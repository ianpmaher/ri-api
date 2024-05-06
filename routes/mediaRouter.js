const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/mediaController");

router.get("/", mediaController.getRandomImages)
router.get("/pics", mediaController.getRandomImages)
router.get("/pics/1", mediaController.getSingleRandomImage)

module.exports = router;