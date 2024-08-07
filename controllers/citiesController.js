// read the content of the cities.json file
const citiesList = require("../scraping/cities.json");

const getCities = (req, res) => {
    res.json(citiesList);
}

const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * citiesList.length);
    return randomIndex;
};

const getRandomCity = (req, res) => {
    const randomIndex = getRandomIndex();
    const randomCity = citiesList[randomIndex];
    res.json({ city: randomCity });
}

module.exports = {
    getRandomCity,
    getCities
};