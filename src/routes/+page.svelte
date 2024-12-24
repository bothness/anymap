<script>
  import {getContext} from "svelte";
  import {base} from "$app/paths";
  import {page} from "$app/stores";
  import {goto} from "$app/navigation";
	import throttle from 'throttleit';
  import {mapTilesOptions, difficultyOptions} from "$lib/config";
	import Search from "$lib/Search.svelte";
  import Icon from "$lib/Icon.svelte";
  import ShareButtons from "$lib/ShareButtons.svelte";
  import Credit from "$lib/Credit.svelte";

  const config = getContext("config");

  $: placeCode = $config?.place?.code;
  $: difficulty = difficultyOptions.find(op => op.gridSize === $config.gridSize) || difficultyOptions[1];
  $: mapTiles = mapTilesOptions.find(op => op.id === $config.mapTiles) || mapTilesOptions[0];
  let shareOpen = false;

	async function suggest(query, populateResults) {
		if (query && query.length < 3) return populateResults([]);
		const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=geojson`;
		const res = await fetch(url);
		const json = await res.json();
		const results = json.features
      // .filter(f => f.properties.osm_type !== "node")
      .map(f => ({
        code: f.properties.osm_type[0].toUpperCase() + f.properties.osm_id,
        name: f.properties.name,
        group: f.properties.display_name.slice(f.properties.name.length + 2).replaceAll("Israel", "Palestine"),
        bbox: f.bbox,
        centroid: f.geometry.coordinates
		}));
	  populateResults(results);
	}

	function selectPlace(e) {
    placeCode = e.detail.code;
	}
</script>

<main>
  <div class="title-block">
    <h1 class="title">Any Map Puzzle</h1>
    <div class="floating-icons">
      <button class="icon-button" on:click={() => shareOpen = !shareOpen}><Icon type="share" margin/>Share</button>
      <ShareButtons message="Play map puzzles of any place %23AnyMapPuzzle" url={$page.url.href} bind:open={shareOpen}/>
    </div>
  </div>
  <form on:submit|preventDefault={() => goto(`${base}/${placeCode}?maptiles=${mapTiles.id}&gridsize=${difficulty.gridSize}`)}>
    <Search value={$config.place?.name || ""} suggest={throttle(suggest, 1000)} on:change={selectPlace}/>
    <div class="columns">
      <div>
        <label>
          Select map tiles<br/>
          <select bind:value={mapTiles}>
            {#each mapTilesOptions as option}
              <option value={option}>{option.label}</option>
            {/each}
          </select>
        </label>
        <label>
          Select difficulty<br/>
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
        <img class="tile-img" src="{mapTiles.url(19302, 24631, 16)}" alt=""/>
      </div>
    </div>
  </form>
  <Credit attribution={mapTiles.attribution}/>
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
		content: '';
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 6px;
		box-shadow: inset -3px -3px 4px rgba(255, 255, 255, 0.35),
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
  .button:hover, .button:focus, .button:active {
    background: #006060;
  }
  button:disabled {
    background: grey;
    margin-bottom: 0;
  }
  select {
    width: 100%;
  }
</style>