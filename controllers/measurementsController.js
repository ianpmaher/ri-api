// measurementsController.js
// import unit conversion functions

const { getRhodeIslandData } = require("../rhodeIslandData");

// === length === //
function calculateLengthComparison(req, res) {
    const inputLength = req.query.length; // Get the length from the query parameters
    const length = parseFloat(inputLength);
    if (isNaN(length)) {
        res.status(400).send("Invalid length");
        return;
    }
    const rhodeIslandData = getRhodeIslandData();
    const rhodeIslandComparison = calculateRhodeIslandLengthComparison(length, rhodeIslandData);
    res.json({
        comparison: rhodeIslandComparison,
    });
}
// === length === //
// function to calculate comparison of length with Rhode Island perimeter
function calculateRhodeIslandLengthComparison(length, rhodeIslandData) {
    const rhodeIslandLength = rhodeIslandData.length;
    const rhodeIslandWidth = rhodeIslandData.width;
    const rhodeIslandPerimeter = 2 * (rhodeIslandLength + rhodeIslandWidth); // Perimeter = 2 * (length + width)
    const comparison = length / rhodeIslandPerimeter;
    return comparison;
}

// === area === //
// function to calculate comparison of area with Rhode Island area
function calculateAreaComparison(req, res) {
    const inputArea = req.query.area; // Get the area from the query parameters
    const area = parseFloat(inputArea);
    if (isNaN(area)) {
        res.status(400).send("Invalid area");
        return;
    }
    const rhodeIslandData = getRhodeIslandData();
    const rhodeIslandComparison = calculateRIAreaComparison(area, rhodeIslandData);
    res.json({
        "Rhode Island Area": "1545 sq. miles", // Rhode Island area in square miles
        area: area,
        squareKilometers: area * 2.58999,
        squareMiles: area / 2.58999,
        comparison: rhodeIslandComparison,
    });
}

function calculateRIAreaComparison(area, rhodeIslandData) {
    const rhodeIslandArea = rhodeIslandData.area;
    const comparison = area / rhodeIslandArea;
    return comparison;
}

module.exports = {
    calculateLengthComparison,
    calculateAreaComparison
};



// function calculateLengthComparison(length, rhodeIslandData) {
//     const rhodeIslandLength = rhodeIslandData.length;
//     const rhodeIslandWidth = rhodeIslandData.width;
//     const rhodeIslandPerimeter = 2 * (rhodeIslandLength + rhodeIslandWidth);
//     const comparison = length / rhodeIslandPerimeter;
//     return comparison;
// }