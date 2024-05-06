// return fetched image search results from wikimedia commons
async function fetchImages(title) {
    const endpoint = "https://en.wikipedia.org/w/api.php";

    // Construct the parameters for the initial request to get image titles
    const params = new URLSearchParams({
        action: "query",
        titles: title,
        prop: "images",
        format: "json",
        imlimit: "50",
    });

    // Fetch the image titles
    let response = await fetch(`${endpoint}?${params}`);
    let data = await response.json();
    let pages = data.query.pages;

    // Collect all image titles
    let imageTitles = [];
    for (let pageId in pages) {
        let images = pages[pageId].images || [];
        images.forEach((image) => imageTitles.push(image.title));
    }

    // Shuffle the image titles array
    // Randomize the order of images using the Fisher-Yates shuffle algorithm (Knuth shuffle) https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    shuffleArray(imageTitles);

    // Construct parameters for the second request to get image URLs
    if (imageTitles.length > 0) {
        const imageParams = new URLSearchParams({
            action: "query",
            prop: "imageinfo",
            iiprop: "url",
            format: "json",
            titles: imageTitles.join("|"),
        });

        // Fetch the image URLs
        response = await fetch(`${endpoint}?${imageParams}`);
        data = await response.json();
        pages = data.query.pages;

        const src = [];

        // Print the URLs
        for (let pageId in pages) {
            let page = pages[pageId];
            if (page.imageinfo) {
                // send image urls to client
                const pageImageUrls = page.imageinfo.map((info) => info.url);
                src.push(...pageImageUrls);
                // return imageUrls;
                // res.json({ imageUrls });
            }
        }
        return src;
    }
    return [];
}

// Function to shuffle an array using the Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index j such that 0 <= j <= i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Example usage
// fetchImages("Rhode Island");

async function getRandomImages(req, res) {
    const title = req.query.title || "Rhode Island";
    fetchImages(title)
        .then((src) => {
            // console.log(imageUrls);
            res.send({ src });
        })
        .catch((error) => {
            console.error("Error fetching images:", error);
            res.status(500).json({ error: "Error fetching images" });
        });
}

// Function to fetch and return only one image
async function getSingleRandomImage(req, res, title) {
    const src = await fetchImages(title);
    if (src.length > 0) {
        const randomIndex = Math.floor(Math.random() * src.length);
        const randomImageUrl = src[randomIndex];
        res.send( {randomImageUrl} );
    } else {
        res.send( { error: "No images found" } );
    }

}


// const images = fetchImages("Rhode Island");
// res.json( images );
// const rhodeIslandData = getRhodeIslandData();
// const facts = rhodeIslandData.facts;
// const randomIndex = getRandomFactIndex();
// const randomFact = facts[randomIndex];
// res.json({ fact: randomFact });

module.exports = {
    getRandomImages,
    getSingleRandomImage,
};
