const express = require("express");
const router = express.Router();
const restaurantsController = require("../controllers/restaurantsController");

router.get("/", restaurantsController.getRandomRestaurant)
router.get("/all", restaurantsController.getRestaurants)

module.exports = router;