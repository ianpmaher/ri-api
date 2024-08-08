const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const yelp = require("./yelp");
const axios = require("axios");

async function scrapeRestaurants(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    let restaurants = [];

    try {
        let hasNextPage = true; // assume there is a next page
        // while (hasNextPage && count < 80) {
        while (hasNextPage) {
            const content = await page.content();
            const $ = cheerio.load(content);

            // Assume the specific structure based on the provided XPath and convert it to a suitable selector
            $("div.shared-item div.contents h2 a").each((index, element) => {
                const name = $(element).text().trim(); // get the text
                const link = $(element).attr("href"); // get the href attribute
                restaurants.push({ name, link });
                // $("div.shared-item div.contents p.address a").each((index, element) => {
                //     const address = $(element).text().trim();
                //     // console.log("Address:", address);

                // });
                // $("div.shared-item div.contents p.region").each((index, element) => {
                //     const region = $(element).text().trim();
                //     // console.log("Region:", region);
                // });
                // Add the restaurant to the list
                // restaurants.push({ name, link, address });
            });

            // Check if there is a next page
            const nextButton = await page.$('a[data-gtm-vars*="listings_custom_listing_list_pager_nxt"]');

            if (nextButton) {
                await page.evaluate((button) => button.click(), nextButton);
                console.log("Next page clicked");
                try {
                    // wait for content to have changed
                    await page.waitForSelector("div.shared-item div.contents h2 a", { visible: true, timeout: 5000 }); // wait for the content to load
                    console.log("Next page loaded");
                } catch (err) {
                    console.log("Next page not loaded");
                    hasNextPage = false;
                }
                // await page.waitForNavigation({ waitUntil: "networkidle2" });
            } else {
                hasNextPage = false;
            }

            // check if we have reached 1000 restaurants
            // if (restaurants.length >= 1900) {
            //     hasNextPage = false;
            // }
        }
    } catch (err) {
        console.log(err);
        hasNextPage = false;
    }

    await browser.close();

    return restaurants;
}

// const url = "https://www.visitrhodeisland.com/food-drink/restaurants/";
// // scrapeRestaurants(url).then((restaurants) => {
// //     console.log(restaurants);
// //     // console.log("success");
// // });

// // trim the restaurant array , remove duplicates and write to a file
// const fs = require("fs");
// const path = require("path");
// const { text } = require("body-parser");
// const filePath = path.join(__dirname, "restaurants.json");
// const restaurants = scrapeRestaurants(url).then((restaurants) => {
//     const uniqueRestaurants = restaurants.filter(
//         (restaurant, index, self) =>
//             index === self.findIndex((r) => r.name === restaurant.name && r.link === restaurant.link)
//     );
//     fs.writeFileSync(filePath, JSON.stringify(uniqueRestaurants, null, 2));
//     console.log("File written successfully");
// });

// ====================================================================================================
// fetching from RI Historical Site / Secretaries of State

async function scrapeTimelineData(url) {
    try {
        // Fetch the HTML content of the webpage
        const { data } = await axios.get(url);

        // Load the HTML content into Cheerio
        const $ = cheerio.load(data);

        // Initialize an array to hold the results
        const timelineData = [];

        const timelineThing = $('#tl-tdeqi-marker')
        console.log(timelineThing.attr('aria-label'));
        
        timelineThing.each((index, element) => {
            const ariaLabel = $(element).attr('aria-label');
            if (ariaLabel) {
                console.log(ariaLabel.trim());
                timelineData.push(ariaLabel.trim());
            }
        });
        


        // Select and iterate over each timeline item
        // const firstHeadlineDate = $('[lastChild="text"]');
    
            // const date = $(element).find('h3.tl-headline-date').text().trim();
            // const fact = $(element).find('div.tl-text-content p').text().trim();

            // Push the date and fact into the results array
            // timelineData.push({ date, fact });
        

        return timelineData;
    } catch (error) {
        console.error('Error fetching the webpage:', error);
        return [];
    }
}


// Example usage
scrapeTimelineData(
    "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1bOLCVOyhNEPjNeGMmihuQ-rIW43pCzy2ZFa0u7wgeMs&font=Default&lang=en&initial_zoom=2&height=650"
)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// ====================================================================================================
