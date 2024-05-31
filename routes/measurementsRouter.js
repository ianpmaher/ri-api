const express = require("express");
const router = express.Router();
const { calculateLengthComparison, calculateAreaComparison, calculatePopulationComparison, calculateHighestPointComparison, calculatePopulationDensityComparison, calculateWaterToLandRatioComparison, calculateShorelineComparison, calculateRIWidthComparison } = require("../controllers/measurementsController");

router.get("/length", calculateLengthComparison)

router.get("/width", calculateRIWidthComparison)

router.get("/area", calculateAreaComparison)

router.get("/population", calculatePopulationComparison)

router.get("/population-density", calculatePopulationDensityComparison)

router.get("/highest-point", calculateHighestPointComparison)

router.get("/water-to-land", calculateWaterToLandRatioComparison)

router.get("/shoreline", calculateShorelineComparison)

// router.get("/length", (req, res) => {
//     const inputLength = req.query.length;
//     const length = parseFloat(inputLength);
//     if (isNaN(length)) {
//         res.status(400).send("Invalid length");
//         return;
//     }
//     const rhodeIslandData = getRhodeIslandData();
//     const rhodeIslandComparison = calculateRhodeIslandComparison(length, rhodeIslandData);
//     res.json({
//         comparison: rhodeIslandComparison
//     });
//     // res.json({
//     //     length: length,
//     //     cm: length * 2.54,
//     //     inch: length / 2.54
//     // });
    
// })

module.exports = router;