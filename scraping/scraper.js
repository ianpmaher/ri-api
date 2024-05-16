const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const yelp = require("./yelp");

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

const url = "https://www.visitrhodeisland.com/food-drink/restaurants/";
// scrapeRestaurants(url).then((restaurants) => {
//     console.log(restaurants);
//     // console.log("success");
// });

// trim the restaurant array , remove duplicates and write to a file
const fs = require("fs");
const path = require("path");
const { text } = require("body-parser");
const filePath = path.join(__dirname, "restaurants.json");
const restaurants = scrapeRestaurants(url).then((restaurants) => {
    const uniqueRestaurants = restaurants.filter(
        (restaurant, index, self) =>
            index === self.findIndex((r) => r.name === restaurant.name && r.link === restaurant.link)
    );
    fs.writeFileSync(filePath, JSON.stringify(uniqueRestaurants, null, 2));
    console.log("File written successfully");
});
