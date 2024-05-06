const express = require('express');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const app = express();
const port = 3069;

app.get('/scrape', async (req, res) => {
    const url = 'https://www.visitrhodeisland.com/food-drink/restaurants/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const content = await page.content();
    const $ = cheerio.load(content);
    
    let restaurants = [];

    // Assume the specific structure based on the provided XPath and convert it to a suitable selector
    $('div.shared-item div.contents h2 a').each((index, element) => {
        const name = $(element).text().trim(); // get the text
        const link = $(element).attr('href'); // get the href attribute
        restaurants.push({name, link});
    });

    await browser.close();

    res.json(restaurants);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
