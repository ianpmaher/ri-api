const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs');


// The URL of the Wikipedia page you want to scrape
const url = "https://en.wikipedia.org/wiki/List_of_people_from_Rhode_Island";

// Function to scrape the Wikipedia page
async function scrapeWikipedia() {
    try {
        // Fetch the HTML of the page
        const { data } = await axios.get(url);

        // Load the HTML into cheerio
        const $ = cheerio.load(data);

        // Array to hold the scraped data
        const people = [];

        // Variable to track the current category
        let currentCategory = "";

        // Iterate through each element in the main content area
        $("div.div-col > ul > li, h2").each((index, element) => {
            if ($(element).is("h2")) {
                // Update the current category when an h2 heading is encountered
                currentCategory = $(element).text().replace("[edit]", "").trim();
            } else {
                // Extract the name (inside the first <a> tag)
                const name = $(element).find("a").first().text();

                // Extract the link to the person's Wikipedia page
                const link = $(element).find("a").first().attr("href");
                const fullLink = `https://en.wikipedia.org${link}`;

                // Extract the short biographical text (the text node after the link)
                const bioText = $(element).text().replace(name, "").trim();

                // Push the data to the people array with the current category
                people.push({
                    name,
                    link: fullLink,
                    bioText,
                    category: currentCategory,
                });
            }
        });

        // Save the scraped data to a JSON file
        fs.writeFileSync("people.json", JSON.stringify(people, null, 2));

        console.log("Data successfully saved to people.json");
    } catch (error) {
        console.error("Error fetching the page:", error);
    }
}

// Call the function to scrape the Wikipedia page
scrapeWikipedia();
