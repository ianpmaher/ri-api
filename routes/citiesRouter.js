const express = require("express");
const router = express.Router();
const citiesController = require("../controllers/citiesController");

router.get("/", citiesController.getCities)
router.get("/random", citiesController.getRandomCity)

module.exports = router;