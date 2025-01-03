# Any Map Puzzle
This repo contains the source code for [Any Map Puzzle](https://bothness.github.io/anymap), a browser-based game that allows you to play sliding tile puzzles of any named place in the world. The game is inspired by OSM 15 Puzzle, although the code is written from scratch.

Please note that there are many ways that it could be improved and optimised. Feel free to create your own fork.

## How the app works
Any Map Puzzle is a Svelte Kit app that is currently deployed as a static build on GitHub Pages.

### Location data
The app uses the Nominatim API to search for place names, and to get the coordinates (centroid and bounding box) for a selected place using its OpenStreetMap ID.

### Tile coordinates
The XYZ map tile coordinates for the place are calculated with the help of the Mapbox Tilebelt utility.

### Map tile providers
The map tiles used for the puzzles are standard XYZ raster map tiles from three different providers:

- Stamen Watercolor tiles, hosted by the Smithsonian.
- OpenStreetMap tiles.
- ESRI World Imagery tiles.

### Game mechanics
The game mechanics are coded mostly in vanilla JavaScript, relying on Svelte + Svelte Kit for managing data loading, rendering, and a little bit of reactivity.

## Quirks
A few interesting quirks to be aware of in this code, and for tile puzzles in general.

### Calculating the map area
Given that places in the OSM/Nominatim database come in many shapes and sizes, and don't always fit neatly onto a square puzzle, the algorithm for turning a bounding box into a puzzle area tries to balance these concerns, but can't guarantee optimal results.

### Maximum zoom levels
Regardless of how small the the place is, the zoom level of the tiles gets limited to the maximum zoom level of the tile provider. This is typically zoom level 16 for Stamen and zoom level 18 for OSM and ESRI.

### When tiles are unavailable
For the Stamen and ESRI tiles in particular, the maximum zoom level actually varies by geographic area. To account for this, the app tries to pre-load the top left tile of the puzzle and, if this fails, it will suggest that the player zooms out or selects another tile provider.

### Shuffling algorithm
Sliding tile puzzles have an interesting quirk that if the pieces are placed at random they may not actually be solvable. However, rather than simulating a realistic shuffling of the pieces, it is possible to swap two pieces at random an even number of times to create a solvable puzzle. This more efficient/uniform shuffling method is used by this app.
