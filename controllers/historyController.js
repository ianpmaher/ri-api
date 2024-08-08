const { getHistoryData } = require('../scraping/historyData');

const getHistoryFactsIndex = () => {
    const rhodeIslandData = getHistoryData();
    const facts = rhodeIslandData;
    const randomIndex = Math.floor(Math.random() * facts.length);
    return randomIndex;
};

const getRandomHistory = (req, res) => {
    const rhodeIslandData = getHistoryData();
    const facts = rhodeIslandData.facts;
    const randomIndex = getHistoryFactsIndex();
    const randomFact = facts[randomIndex];
    res.json({ fact: randomFact });
};

module.exports = {
    getRandomHistory
};