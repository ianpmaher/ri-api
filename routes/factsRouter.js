const express = require("express");
const router = express.Router();
const factsController = require("../controllers/factsController");

router.get("/", factsController.getRandomFact)

module.exports = router;