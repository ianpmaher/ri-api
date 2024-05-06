const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const yelp = require("./yelp");

async function scrapeRestaurants(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    let restaurants = [];

    try {
        let hasNextPage = true; // assume there is a next page
        let count = 0;
        while (hasNextPage && count < 80) {
        // while (hasNextPage) {
            const content = await page.content();
            const $ = cheerio.load(content);

            // Assume the specific structure based on the provided XPath and convert it to a suitable selector
            $("div.shared-item div.contents h2 a").each((index, element) => {
                const name = $(element).text().trim(); // get the text
                const link = $(element).attr("href"); // get the href attribute
                // Add the restaurant to the list
                restaurants.push({ name, link });
            });

            // Check if there is a next page
            // const nextPageButton = $("div.pager ul li a").has('data-query-link');
            // console.log(document.querySelector('a[data-query-link][href*="skip"]'));
            const nextButton = await page.$('a[data-query-link][href*="skip"]');
            if (nextButton) {
                console.log("Next page exists");
                await page.evaluate(button => button.click(), nextButton);
                count++;
                console.log("Next page clicked");
                // await page.waitForNavigation({ waitUntil: "networkidle2" });

                console.log("Next page loaded");
                // wait for content to have changed 
                await page.waitForSelector('div.shared-item div.contents h2 a', { visible: true, timeout: 30000 }); // wait for the content to load
            
                // await Promise.all([page.waitForNavigation({ waitUntil: "networkidle2" }), nextButton.click()]);
                // await page.goto(nextPage, { waitUntil: "networkidle2" });
            } else {
                hasNextPage = false;
            }
        }
    } catch (err) {
        console.log(err);
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
const filePath = path.join(__dirname, "restaurants.json");
const restaurants = scrapeRestaurants(url).then((restaurants) => {
    const uniqueRestaurants = restaurants.filter((restaurant, index, self) =>
        index === self.findIndex((r) => (
            r.name === restaurant.name && r.link === restaurant.link
        ))
    );
    fs.writeFileSync

    (filePath, JSON.stringify(uniqueRestaurants, null, 2));
    console.log("File written successfully");
});