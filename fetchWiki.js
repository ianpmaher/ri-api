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

        // Print the URLs
        for (let pageId in pages) {
            let page = pages[pageId];
            if (page.imageinfo) {
                console.log(page.imageinfo[0].url);
            }
        }
    }
}

// Function to shuffle an array using the Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Example usage
fetchImages("Rhode Island");
