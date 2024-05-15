
// allow us to read the content of the restaurants.json file

const restaurantsList = require("../scraping/restaurants.json");

const getRestaurants = (req, res) => {
    res.json(restaurantsList);
}

const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * restaurantsList.length);
    return randomIndex;
};

const getRandomRestaurant = (req, res) => {
    const randomIndex = getRandomIndex();
    const randomRest = restaurantsList[randomIndex];
    res.json({ restaurant: randomRest });
}

module.exports = {
    getRandomRestaurant,
    getRestaurants
};