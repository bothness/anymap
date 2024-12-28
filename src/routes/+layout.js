import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

// export const prerender = true;
// export const trailingSlash = "always";

/** @type {import('./$types').PageLoad} */
export async function load({ params, url, fetch }) {
  let place = null;
  const code = params?.code;

  if (code) {
    const res = await fetch(`https://nominatim.openstreetmap.org/lookup?osm_ids=${code}&format=json`);
    const json = (await res.json())[0];
    if (!json) {
      redirect(308, `${base}/`);
    }
    const bbox = json.boundingbox.map(xy => +xy);
    place = {
      code,
      name: json.name,
      bbox: [bbox[2], bbox[0], bbox[3], bbox[1]],
      centroid: [+json.lon, +json.lat]
    };
  }
  const mapTiles = url.searchParams.get("maptiles") || "watercolor";
  const gridSize = (() => {
    const val = +(url.searchParams.get("gridsize") || 4);
    return val < 3 ? 3 : val > 6 ? 6 : val;
  })();
  const zoomOffset = +(url.searchParams.get("zoom") || 0);

	return {
		place,
    mapTiles,
    gridSize,
    zoomOffset
	};
}