const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");

router.get("/", historyController.getFullHistory)
router.get("/random", historyController.getRandomHistory)

module.exports = router;