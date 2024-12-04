const PLANTNET_DATASET_KEY = "7a3679ef-5582-4aaa-81f0-8c2545cafc81"
const PLANTNET_CROWD_DATASET_KEY = "14d5676a-2c54-4f94-9023-1e8dcd822aa0"


function fetchImagesGeneric(taxonKey, limit, months="5,8", onlyPlantNet=true, callback) {
	// Generic function to fetch images from GBIF, first with plantnet, and retries larger if doesn't work
    var datasetSelection = onlyPlantNet ? `&datasetKey=${PLANTNET_DATASET_KEY}&datasetKey=${PLANTNET_CROWD_DATASET_KEY}` : ""
    var monthsSelection = months ? `&month=${months}` : ""
    const apiUrl = `https://api.gbif.org/v1/occurrence/search?taxonKey=${taxonKey}&mediaType=StillImage&basisOfRecord=HUMAN_OBSERVATION${monthsSelection}${datasetSelection}&limit=${limit}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            if (data.count == 0){
                console.log("No images found for this species.");

                if (onlyPlantNet) {
                    console.log("Retrying outside PlantNet")
                    fetchImagesGeneric(taxonKey, limit, months=months, false, callback);
                } else {
                    console.log("No images found at all, even outside of PlantNet.")
                    console.log(apiUrl)
                }
            } else {
            	// Success, call the callback
                callback(data);
            }
            
        },
        error: function(error) {
            console.error("Error fetching images:", error);
            //alert("Erreur de récupération des images.");
        }
    });
}

function isNotTif(url) {
    // We can't check just JPG, because some images are blob urls so we don't know
    return ! (url.toLowerCase().endsWith('.tif') || url.toLowerCase().endsWith('.tiff'));
}

function filterPlantnetData(data, totalNumber){
    // Filters the data to try to get 1 bark, 1 flower, 1 fruit
    // And the rest with leaves

    // First separate results that have tags and the ones without
    var withTags = []
    var withoutTags = []

    data.results.forEach(result => {
        var extensions = result.extensions["http://rs.tdwg.org/ac/terms/Multimedia"]
        if (extensions == undefined || extensions[0] == undefined || extensions[0]["http://rs.tdwg.org/ac/terms/tag"] == undefined){
            withoutTags.push(result)
        } else {
            withTags.push(result)
        }
    });

    // Remove all non-jpg images
    withTags = withTags.filter(result => result.media.some(m => m.identifier && isNotTif(m.identifier)));
    withoutTags = withoutTags.filter(result => result.media.some(m => m.identifier && isNotTif(m.identifier)));

    // Shuffle
    withTags.sort(() => Math.random() - 0.5);
    withoutTags.sort(() => Math.random() - 0.5);

    // Sort the ones with tags and get the first bark, flower, fruit and leaf
    // and all the untagged or incorrect tagged into untagged
    var bark = []
    var flower = []
    var fruit = []
    var leaf = []
    var untagged = []

    withTags.forEach(result => {
        var extensions = result.extensions["http://rs.tdwg.org/ac/terms/Multimedia"]
        var subjectParts = extensions.map(function(extension) {
            return extension["http://rs.tdwg.org/ac/terms/tag"];
        });

        var index = subjectParts.indexOf("bark");
        if (index != -1){
            bark.push(result.media[index].identifier)
            return;
        }

        index = subjectParts.indexOf("flower");
        if (index != -1){
            flower.push(result.media[index].identifier)
            return;
        }

        index = subjectParts.indexOf("fruit");
        if (index != -1){
            fruit.push(result.media[index].identifier)
            return;
        }

        index = subjectParts.indexOf("leaf");
        if (index != -1){
            leaf.push(result.media[index].identifier)
            return;
        }

        // If none of the above
        //untagged.push(result.media[index].identifier)
    });

    // For untagged, add first image of each
    withoutTags.forEach(result => {
        // Check that it's not undefined
        if (result.media[0] != undefined && result.media[0].identifier != undefined){
            untagged.push(result.media[0].identifier)
        }
    });

    // Try to get one of each
    var final = []

    if (bark.length > 0){
        final.push(bark[0])
    }

    if (flower.length > 0){
        final.push(flower[0])
    }

    if (fruit.length > 0){
        final.push(fruit[0])
    }

    // Get leaves to fill in the rest
    const missingNumber = totalNumber - final.length
    for (var i = 0; i < missingNumber; i++){
        // First try in leaf if not empty, else untagged
        if (leaf.length > 0){
            final.push(leaf.pop())
        } else {
            // Don't add if empty
            if (untagged.length > 0){
                final.push(untagged.pop())
            }
        }
    }

    // Log how many of each were found
    console.log("Bark:", bark.length)
    console.log("Flower:", flower.length)
    console.log("Fruit:", fruit.length)
    console.log("Leaf:", leaf.length)
    console.log("Untagged:", untagged.length)

    return final
}
