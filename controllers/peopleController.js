
// allow us to read the content of the people.json file

const peopleList = require("../scraping/people.json");

const getPeople = (req, res) => {
    res.json(peopleList);
}

const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * peopleList.length);
    return randomIndex;
};

const getRandomPerson = (req, res) => {
    const randomIndex = getRandomIndex();
    const randomPerson = peopleList[randomIndex];
    res.json({ person: randomPerson });
}

module.exports = {
    getPeople,
    getRandomPerson
};