const express = require("express");
const router = express.Router();
const peopleController = require("../controllers/peopleController");

router.get("/", peopleController.getRandomPerson)
router.get("/all", peopleController.getPeople)

module.exports = router;