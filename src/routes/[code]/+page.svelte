<script>
	// import {flip} from "svelte/animate";
	import { getContext } from "svelte";
	import { afterNavigate } from "$app/navigation";
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import * as tb from "@mapbox/tilebelt";
	import { mapTilesOptions } from "$lib/config";
	import Icon from "$lib/Icon.svelte";
	import ShareButtons from "$lib/ShareButtons.svelte";
	import Credit from "$lib/Credit.svelte";

	const config = getContext("config");
	const gridSize = $config.gridSize;
	const gridGap = 7 - gridSize;

	$: zoomOffset = $config.zoomOffset;
	$: mapTiles =
		mapTilesOptions.find((option) => option.id === $config.mapTiles) || mapTilesOptions[0];

	let tiles, blankTile, currentZoom, width;
	let ready = false;
	let failed = false;
	let complete = false;
	let shareOpen = false;

	function makeTiles(centre) {
		// Function to generate the tile grid based on XYZ coordinates for the centre tile.
		const half = Math.floor(gridSize / 2);
		const tl = [centre[0] - half, centre[1] - half, centre[2]].map((xy) => (xy < 0 ? 0 : xy));
		const tiles = [];
		for (let x = 0; x < gridSize; x++) {
			const col = [];
			for (let y = 0; y < gridSize; y++) {
				const i = y * gridSize + x;
				// x and y are original/correct coordinates of each tile. cX and cY are the "current" coordinates.
				// cX === x and cY === y until the grid is shuffled.
				const tile = { i, x, y, cX: x, cY: y, xyz: [tl[0] + x, tl[1] + y, tl[2]], blank: false };
				col.push(tile);
			}
			tiles.push(col);
		}
		blankTile = tiles[gridSize - 1][gridSize - 1];
		blankTile.blank = true;
		return tiles;
	}

	async function checkGrid() {
		// Function run after each move to check whether the grid has been solved.
		if (tiles.flat().every((t) => t.x === t.cX && t.y === t.cY)) {
			complete = true;
			await new Promise((r) => setTimeout(r, 200));
			await window.confetti({
				particleCount: 500,
				spread: 360,
				scalar: 1.5
			});
		}
	}

	function swapPos(tile1, tile2) {
		// Function to swap the position of two tiles. Used for moves and shuffling.
		const temp = { cX: tile1.cX, cY: tile1.cY };
		tile1.cX = tile2.cX;
		tile1.cY = tile2.cY;
		tile2.cX = temp.cX;
		tile2.cY = temp.cY;
		tiles[tile1.cX][tile1.cY] = tile1;
		tiles[tile2.cX][tile2.cY] = tile2;
	}

	function move(tile) {
		// Function to move a tile when it is clicked.
		if (complete) return;

		// tweens is an array of tiles to swap with the blank tile.
		const tweens = [];

		if (tile.cX === blankTile.cX) {
			// Case for horizontal moves.
			const diff = tile.cY - blankTile.cY;
			const sign = Math.sign(diff);
			for (let i = 1; i <= Math.abs(diff); i++) {
				tweens.push(tiles[blankTile.cX][blankTile.cY + i * sign]);
			}
		} else if (tile.cY === blankTile.cY) {
			// Case for vertial moves.
			const diff = tile.cX - blankTile.cX;
			const sign = Math.sign(diff);
			for (let i = 1; i <= Math.abs(diff); i++) {
				tweens.push(tiles[blankTile.cX + i * sign][blankTile.cY]);
			}
		}

		// Apply the moves.
		for (const t of tweens) swapPos(t, blankTile);
		checkGrid();
	}

	function keyMove(e) {
		// Function to swap tiles based on key press.
		const key = e.code;
		if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
			e.preventDefault();

			let tile;
			switch (key) {
				case "ArrowUp":
					tile = tiles?.[blankTile.cX]?.[blankTile.cY + 1];
					break;
				case "ArrowDown":
					tile = tiles?.[blankTile.cX]?.[blankTile.cY - 1];
					break;
				case "ArrowLeft":
					tile = tiles?.[blankTile.cX + 1]?.[blankTile.cY];
					break;
				case "ArrowRight":
					tile = tiles?.[blankTile.cX - 1]?.[blankTile.cY];
					break;
			}

			if (tile) move(tile);
		}
	}

	function shuffleGrid(n) {
		// Function to shuffle the grid.
		// The grid is shuffled by swapping any two pieces an even number of times.
		let tile;
		for (let i = 0; i < n + n % 2; i++) {
			const adjacents = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			]
				.map((adj) => tiles?.[blankTile.cX + adj[0]]?.[blankTile.cY + adj[1]])
				.filter((adj) => adj && adj.i !== tile?.i);
			tile = adjacents[Math.floor(Math.random() * adjacents.length)];
			swapPos(blankTile, tile);
		}
	}

	async function initGrid() {
		// Function to initialise the grid based on a geographic bounding box.
		complete = false;

		// Calculate map tile fractional coordinates corresponding to bounding box min and max.
		const min = tb.pointToTileFraction(...$config.place.bbox.slice(0, 2), 0);
		const max = tb.pointToTileFraction(...$config.place.bbox.slice(2), 0);

		// Increase zoom level until the bounding box is larger than the tile grid size.
		// (This over-zooms beyond the bounding box, but tends to create a better puzzle).
		let zoom = 0;
		let diff = [max[0] - min[0], min[1] - max[1]];
		while (zoom < mapTiles.maxZoom && diff[0] < gridSize && diff[1] < gridSize) {
			diff = diff.map((d) => d * 2);
			zoom++;
		}
		if (zoomOffset)
			zoom = (() => {
				let z = zoom + zoomOffset;
				return z < 2 ? 2 : z > mapTiles.maxZoom ? mapTiles.maxZoom : z;
			})();
		currentZoom = zoom;

		// Create and shuffle the grid based on the centre tile.
		const centre =
			gridSize % 2 === 1
				? tb.pointToTile(...$config.place.centroid, zoom)
				: tb.pointToTileFraction(...$config.place.centroid, zoom).map((val) => Math.round(val));
		tiles = makeTiles(centre);
		shuffleGrid(Math.pow(gridSize, 3));

		if (!ready) {
			try {
				const res = await fetch(mapTiles.url(...tiles[0][0].xyz));
				if (res.status === 200) {
					ready = true;
				} else {
					failed = true;
				}
			} catch {
				failed = true;
			}
		}
	}

	// Initialise the grid when the page loads or the URL changes.
	afterNavigate(() => {
		ready = false;
		initGrid();
	});
</script>

<main>
	<div class="flex-row">
		<nav class="flex-left">&lt; <a href="{base}/">Any Map Puzzle</a></nav>
		<div class="flex-right">
			<a
				class="icon-button zoom-button"
				class:disabled={currentZoom >= mapTiles.maxZoom}
				tabindex={currentZoom >= mapTiles.maxZoom ? "-1" : null}
				href="{base}/{$config.place.code}?maptiles={mapTiles.id}&gridsize={gridSize}{zoomOffset + 1
					? `&zoom=${zoomOffset + 1}`
					: ''}"
				title="Zoom in"><Icon type="zoomin" /></a
			>
			<a
				class="icon-button zoom-button"
				class:disabled={(gridSize <= 4 && currentZoom < 3) || (gridSize > 4 && currentZoom < 4)}
				tabindex={(gridSize <= 4 && currentZoom < 3) || (gridSize > 4 && currentZoom < 4) ? "-1" : null}
				href="{base}/{$config.place.code}?maptiles={mapTiles.id}&gridsize={gridSize}{zoomOffset - 1
					? `&zoom=${zoomOffset - 1}`
					: ''}"
				title="Zoom out"><Icon type="zoomout" /></a
			>
		</div>
	</div>
	<div class="flex-row">
		<h1 class="flex-left">{$config.place.name}</h1>
		<div class="floating-icons flex-right">
			<button class="icon-button" on:click={initGrid}><Icon type="shuffle" margin />Shuffle</button>
			<button class="icon-button" on:click={() => (shareOpen = !shareOpen)}
				><Icon type="share" margin />Share</button
			>
			<ShareButtons
				message="Try this {$config.place.name} map puzzle %23AnyMapPuzzle"
				url={$page.url.href}
				bind:open={shareOpen}
			/>
		</div>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	{#if ready}
		<div
			tabindex="0"
			class="grid"
			bind:clientWidth={width}
			style:height="{width || 100}px"
			style:margin-right="-{gridGap}px"
			on:focus={(e) => e.target.scrollIntoView()}
			on:keydown={keyMove}
		>
			{#each tiles.flat().sort((a, b) => a.i - b.i) as tile (tile.i)}
				<button
					tabindex="-1"
					class="tile"
					class:blank={tile.blank && !complete}
					class:fade-in={tile.blank}
					style:left="{100 * (tile.cX / gridSize)}%"
					style:top="{100 * (tile.cY / gridSize)}%"
					style:width="calc({100 / gridSize}% - {gridGap}px)"
					style:height="calc({100 / gridSize}% - {gridGap}px)"
					on:click={() => move(tile)}
				>
					<img class="tile-img" src={mapTiles.url(...tile.xyz)} alt="" />
				</button>
			{/each}
		</div>
	{:else if failed}
		<div
			class="grid"
			bind:clientWidth={width}
			style="height: {width || 100}px; background: #ddd; padding: 12px;"
		>
			{mapTiles.label}
			map tiles not available for this area. Try zooming out or using
			{@html mapTilesOptions
				.filter((op) => op.id !== mapTiles.id)
				.map((op) => `<a href="${$page.url.href.replace(mapTiles.id, op.id)}">${op.label}</a>`)
				.join(" or ")}
			tiles.
		</div>
	{/if}
	<Credit attribution={mapTiles.attribution} />
</main>

<style>
	h1 {
		margin-top: 0;
	}
	.grid {
		display: block;
		position: relative;
	}
	.tile {
		position: absolute;
		border: 0;
		background: none;
		padding: 0;
		margin: 0;
		transition: all 0.2s ease-in-out;
	}
	.fade-in {
		opacity: 1;
		animation-name: fadeInOpacity;
		animation-iteration-count: 1;
		animation-timing-function: ease-in;
		animation-duration: 0.4s;
	}
	@keyframes fadeInOpacity {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.tile:focus {
		outline: none;
		box-shadow: none;
	}
	.blank {
		display: none;
	}
	.tile-img {
		position: relative;
		border-radius: 6px;
		width: 100%;
	}
	.tile::after {
		display: block;
		position: absolute;
		content: "";
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 6px;
		box-shadow:
			inset -3px -3px 4px rgba(255, 255, 255, 0.35),
			inset 3px 3px 4px rgba(94, 104, 121, 0.2);
	}
</style>
