<script>
	import { getContext } from "svelte";
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import throttle from "throttleit";
	import { mapTilesOptions, difficultyOptions } from "$lib/config";
	import Search from "$lib/Search.svelte";
	import Icon from "$lib/Icon.svelte";
	import ShareButtons from "$lib/ShareButtons.svelte";
	import Credit from "$lib/Credit.svelte";

	const config = getContext("config");

	let placeCode = $config?.place?.code;
	let difficulty =
		difficultyOptions.find((op) => op.gridSize === $config.gridSize) || difficultyOptions[1];
	let mapTiles = mapTilesOptions.find((op) => op.id === $config.mapTiles) || mapTilesOptions[0];
	let shareOpen = false;

  // Function to query the Nominatim API for placed based on a search text string.
	async function suggest(query, populateResults) {
		const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=jsonv2`;
		const res = await fetch(url);
		const json = await res.json();
		const results = json.map((item) => ({
			code: item.osm_type[0].toUpperCase() + item.osm_id,
			name: item.name,
			group: item.display_name.slice(item.name.length + 2).replace(/israel$/i, "Palestine")
		}));
		populateResults(results);
	}

	function selectPlace(e) {
		placeCode = e.detail.code;
	}
</script>

<main>
	<div class="flex-row">
		<h1 class="flex-left">Any Map Puzzle</h1>
		<div class="floating-icons flex-right">
			<button class="icon-button" on:click={() => (shareOpen = !shareOpen)}
				><Icon type="share" margin />Share</button
			>
			<ShareButtons
				message="Play map puzzles of any place %23AnyMapPuzzle"
				url={$page.url.href}
				bind:open={shareOpen}
			/>
		</div>
	</div>
	<form
		on:submit|preventDefault={() =>
			goto(`${base}/${placeCode}?maptiles=${mapTiles.id}&gridsize=${difficulty.gridSize}`)}
	>
		<Search
			value={$config.place?.name || ""}
			suggest={throttle(suggest, 1000)}
			on:change={selectPlace}
		/>
		<div class="columns">
			<div>
				<label>
					Select map tiles<br />
					<select bind:value={mapTiles}>
						{#each mapTilesOptions as option}
							<option value={option}>{option.label}</option>
						{/each}
					</select>
				</label>
				<label>
					Select difficulty<br />
					<select bind:value={difficulty}>
						{#each difficultyOptions as option}
							<option value={option}>{option.label}</option>
						{/each}
					</select>
				</label>
				<p>
					<button type="submit" class="button" disabled={!placeCode}>Start puzzle</button>
					{#if !placeCode}
						<span class="credit">First select a place to start the puzzle</span>
					{/if}
				</p>
			</div>
			<div class="tile">
				<img class="tile-img" src={mapTiles.url(19302, 24631, 16)} alt="" />
			</div>
		</div>
	</form>
	<Credit attribution={mapTiles.attribution} />
</main>

<style>
	.columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: 18px;
		margin-top: 20px;
	}
	.tile {
		display: flex;
		position: relative;
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
	.tile-img {
		width: 100%;
		border-radius: 6px;
	}
	.button {
		display: block;
		background: #008080;
		color: white;
		font-weight: bold;
	}
	.button:not(:disabled):hover,
	.button:focus,
	.button:active {
		background: #006060;
	}
	button:disabled {
		margin-bottom: 0;
		background: grey;
	}
	select {
		width: 100%;
	}
</style>
