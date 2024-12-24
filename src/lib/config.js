export const mapTilesOptions = [
  {
    id: "watercolor",
    label: "Stamen Watercolor",
    url: (x, y, z) => `https://watercolormaps.collection.cooperhewitt.org/tile/watercolor/${z}/${x}/${y}.jpg`,
    attribution: `Map tiles by <a target="_blank" href="http://maps.stamen.com">Stamen Design</a>. Data by <a target="_blank" href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>.`,
    maxZoom: 16
  },
  {
    id: "osm",
    label: "OpenStreetMap",
    url: (x, y, z) => `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`,
    attribution: `Map tiles by <a target="_blank" href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>.`,
    maxZoom: 19
  },
  {
    id: "aerial",
    label: "ESRI World Imagery",
    url: (x, y, z) => `https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}?blankTile=false`,
    attribution: `<a target="_blank" href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9">Aerial imagery</a> by Esri, Maxar, Earthstar Geographics, and the GIS User Community.`,
    maxZoom: 19
  },
];

export const difficultyOptions = [
  {
    label: "Easy (3 x 3)",
    gridSize: 3
  },
  {
    label: "Medium (4 x 4)",
    gridSize: 4
  },
  {
    label: "Hard (5 x 5)",
    gridSize: 5
  },
  {
    label: "Very hard (6 x 6)",
    gridSize: 6
  },
];