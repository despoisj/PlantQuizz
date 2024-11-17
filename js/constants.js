const PLANTNET_DATASET_KEY = "7a3679ef-5582-4aaa-81f0-8c2545cafc81"
const PLANTNET_CROWD_DATASET_KEY = "14d5676a-2c54-4f94-9023-1e8dcd822aa0"


function fetchImagesGeneric(taxonKey, limit, onlyPlantNet=true, callback) {
	// Generic function to fetch images from GBIF, first with plantnet, and retries larger if doesn't work
    var datasetSelection = onlyPlantNet ? `&datasetKey=${PLANTNET_DATASET_KEY}&datasetKey=${PLANTNET_CROWD_DATASET_KEY}` : ""
    const apiUrl = `https://api.gbif.org/v1/occurrence/search?taxonKey=${taxonKey}&mediaType=StillImage&basisOfRecord=HUMAN_OBSERVATION${datasetSelection}&limit=${limit}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            if (data.count == 0){
                console.log("No images found for this species.");
                console.log(apiUrl)

                if (onlyPlantNet) {
                    console.log("Retrying outside PlantNet")
                    fetchImagesGeneric(taxonKey, limit, false, callback);
                } else {
                    console.log("No images found at all, even outside of PlantNet.")
                }
            } else {
            	// Success, call the callback
                callback(data);
            }
            
        },
        error: function(error) {
            console.error("Error fetching images:", error);
            alert("Erreur de récupération des images.");
        }
    });
}