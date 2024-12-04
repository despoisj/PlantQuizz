// Function to fetch map tiles (either background or GBIF data)
function fetchTileLayer(minX, maxX, minY, maxY, zoom, isBackground = false, taxonKey=3021037) {
    const tiles = [];
    const baseUrl = isBackground 
        ? "https://tile.gbif.org/3857/omt/{z}/{x}/{y}@1x.png?style=gbif-light"
        : "https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?style=green.poly&srs=EPSG:3857&bin=hex&hexPerTile=48&taxonKey={TAXON}";
    
    // Validate zoom level
    if (zoom < 0 || zoom > 16) {
        throw new Error("Zoom level must be between 0 and 16");
    }
    
    // Get all tiles within the specified range
    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            const tileUrl = baseUrl
                .replace('{z}', zoom)
                .replace('{x}', x)
                .replace('{y}', y)
                .replace("{TAXON}", taxonKey);
                
            tiles.push({
                url: tileUrl,
                x: x,
                y: y,
                zoom: zoom
            });
        }
    }
    
    // Function to fetch a single tile
    async function fetchTile(tile) {
        try {
            const response = await fetch(tile.url);

            if (response.status != 200){
                // No plant data for this tile
                // This happens for mimosa bleuatre for ex
                return null;
            }

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const blob = await response.blob();
            return {
                ...tile,
                data: URL.createObjectURL(blob)
            };
        } catch (error) {
            console.error(`Error fetching tile at x:${tile.x} y:${tile.y}:`, error);
            return null;
        }
    }
    
    return Promise.all(tiles.map(tile => fetchTile(tile)));
}

// Display both background and data tiles
async function displayTiles(taxonKey, second=false) {
    const containerId = second ? 'map-container2' : 'map-container'
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing tiles
    
    try {
        const minX = 31;
        const maxX = 33;
        const minY = 21;
        const maxY = 23;
        const zoom = 6;

        // Create a wrapper div for the 3x3 grid
        const gridWrapper = document.createElement('div');
        gridWrapper.style.width = '100%';
        gridWrapper.style.height = '100%';
        gridWrapper.style.position = 'relative';
        container.appendChild(gridWrapper);

        // Calculate tile size based on container size (assuming square container)
        const tileSize = `${100 / 3}%`; // Since we have 3x3 grid

        // First fetch and display background tiles
        const backgroundTiles = await fetchTileLayer(minX, maxX, minY, maxY, zoom, true);
        backgroundTiles.forEach(tile => {
            if (tile) {
                const img = document.createElement('img');
                img.src = tile.data;
                img.style.width = tileSize;
                img.style.height = tileSize;
                img.style.position = 'absolute';
                img.style.left = `${(tile.x - minX) * (100 / 3)}%`;
                img.style.top = `${(tile.y - minY) * (100 / 3)}%`;
                img.style.objectFit = 'cover';
                gridWrapper.appendChild(img);
            }
        });

        // Then fetch and display GBIF data tiles
        const dataTiles = await fetchTileLayer(minX, maxX, minY, maxY, zoom, false, taxonKey);
        dataTiles.forEach(tile => {
            if (tile) {
                const img = document.createElement('img');
                img.src = tile.data;
                img.style.width = tileSize;
                img.style.height = tileSize;
                img.style.position = 'absolute';
                img.style.left = `${(tile.x - minX) * (100 / 3)}%`;
                img.style.top = `${(tile.y - minY) * (100 / 3)}%`;
                img.style.objectFit = 'cover';
                gridWrapper.appendChild(img);
            }
        });
    } catch (error) {
        console.error('Error fetching tiles:', error);
    }
}