const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/mediaController");

router.get("/", mediaController.getRandomImages)

module.exports = router;