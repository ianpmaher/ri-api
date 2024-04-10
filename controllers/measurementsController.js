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
    const rhodeIslandComparison = calculateRILengthComparison(length, rhodeIslandData);
    res.json({
        "Rhode Island Perimeter": "170 miles", // Rhode Island perimeter in miles
        length: length,
        kilometers: length * 1.60934,
        miles: length / 1.60934,
        comparison: rhodeIslandComparison,
    });
}
// === length === //
// function to calculate comparison of length with Rhode Island perimeter
function calculateRILengthComparison(length, rhodeIslandData) {
    const rhodeIslandLength = rhodeIslandData.length;
    const rhodeIslandWidth = rhodeIslandData.width;
    const rhodeIslandPerimeter = 2 * (rhodeIslandLength + rhodeIslandWidth); // Perimeter = 2 * (length + width)
    const comparison = (length / rhodeIslandPerimeter).toFixed(5);
    // return comparison;
    return `The length is ${comparison} times the perimeter of Rhode Island`;
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
    // return json response with data and comparison
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
    const comparison = (area / rhodeIslandArea).toFixed(5);
    // return comparison;
    return `The area is ${comparison} times the area of Rhode Island`;
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