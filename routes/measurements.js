const express = require("express");
const router = express.Router();
const { getRhodeIslandData } = require("../rhodeIslandData");

router.get("/length", (req, res) => {
    const inputLength = req.query.length;
    const length = parseFloat(inputLength);
    if (isNaN(length)) {
        res.status(400).send("Invalid length");
        return;
    }
    const rhodeIslandData = getRhodeIslandData();
    const rhodeIslandComparison = calculateRhodeIslandComparison(length, rhodeIslandData);
    res.json({
        comparison: rhodeIslandComparison
    });
    // res.json({
    //     length: length,
    //     cm: length * 2.54,
    //     inch: length / 2.54
    // });
    
})

// more routes for different measurements