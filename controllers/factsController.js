const { getRhodeIslandData } = require("../rhodeIslandData");

const getRandomFactIndex = () => {
  const rhodeIslandData = getRhodeIslandData();
  const facts = rhodeIslandData.facts;
  const randomIndex = Math.floor(Math.random() * facts.length);
  return randomIndex;
};

const getRandomFact = (req, res) => {
  const rhodeIslandData = getRhodeIslandData();
  const facts = rhodeIslandData.facts;
  const randomIndex = getRandomFactIndex();
  const randomFact = facts[randomIndex];
  res.json({ fact: randomFact });
};

module.exports = {
  getRandomFact,
};
