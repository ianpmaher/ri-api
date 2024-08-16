const { getHistoryData } = require("../scraping/historyData");

const getFullHistory = (req, res) => {
  const rhodeIslandData = getHistoryData();
  res.json(rhodeIslandData);
};

const getHistoryFactsIndex = () => {
  const rhodeIslandData = getHistoryData();
  const randomIndex = Math.floor(Math.random() * rhodeIslandData.length);
  return randomIndex;
};

const getRandomHistory = (req, res) => {
  const rhodeIslandData = getHistoryData();
  const facts = rhodeIslandData;
  const randomIndex = getHistoryFactsIndex();
  const randomFact = facts[randomIndex];
  res.json({
    year: randomFact.year,
    event: randomFact.text,
    media: randomFact.media,
    mediaThumbnail: randomFact.mediaThumbnail,
  });
};

module.exports = {
  getRandomHistory,
  getFullHistory,
};
