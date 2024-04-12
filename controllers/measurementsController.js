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
        "Rhode Island Length": "48 miles", // Rhode Island length in miles
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
    const comparison = (length / rhodeIslandPerimeter).toFixed(4);
    // return comparison;
    return `The length is ${comparison} times the perimeter of Rhode Island, or ${comparison * 100}%.`;
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
        squareKilometers: (area * 2.58999).toFixed(2),
        squareMiles: (area / 2.58999).toFixed(2),
        comparison: rhodeIslandComparison,
    });
}

function calculateRIAreaComparison(area, rhodeIslandData) {
    const rhodeIslandArea = rhodeIslandData.area;
    const comparison = (area / rhodeIslandArea).toFixed(4);
    // return comparison;
    return `The area is ${comparison} times the area of Rhode Island, or ${comparison * 100}%.`;
}

// population comparison
// function to calculate comparison of population with Rhode Island population
function calculatePopulationComparison(req, res) {
    const inputPopulation = req.query.population; // Get the population from the query parameters
    const population = parseFloat(inputPopulation);
    if (isNaN(population)) {
        res.status(400).send("Invalid population");
        return;
    }
    const rhodeIslandData = getRhodeIslandData();
    const rhodeIslandComparison = calculateRIPopulationComparison(population, rhodeIslandData);
    // return json response with data and comparison
    res.json({
        "Rhode Island Population": "1059361", // Rhode Island population
        population: population,
        comparison: rhodeIslandComparison,
    });
}

function calculateRIPopulationComparison(population, rhodeIslandData) {
    const rhodeIslandPopulation = rhodeIslandData.population;
    const comparison = (population / rhodeIslandPopulation).toFixed(3);
    const percentage = (comparison * 100).toFixed(2);
    // return comparison;
    return `The population is ${comparison} times the population of Rhode Island, or ${percentage}%.`;
}

// compare population density
function calculatePopulationDensityComparison(req, res) {
    const inputPopulationDensity = req.query.density; // Get the population density from the query parameters
    const populationDensity = parseFloat(inputPopulationDensity);
    if (isNaN(populationDensity)) {
        res.status(400).send("Invalid population density");
        return;
    }
    const rhodeIslandData = getRhodeIslandData();
    const rhodeIslandComparison = calculateRIPopulationDensityComparison(populationDensity, rhodeIslandData);
    // return json response with data and comparison
    res.json({
        "Rhode Island Population Density": "1021.7 people/sq. mile", // Rhode Island population density
        density: populationDensity,
        comparison: rhodeIslandComparison,
    });
}

function calculateRIPopulationDensityComparison(populationDensity, rhodeIslandData) {
    const rhodeIslandPopulationDensity = rhodeIslandData.popDensity;
    const comparison = (populationDensity / rhodeIslandPopulationDensity).toFixed(3);
    // return comparison;
    return `The population density is ${comparison} times the population density of Rhode Island, or ${comparison * 100}%.`;
}

// highest point comparison
// function to calculate comparison of highest point with Rhode Island highest point
function calculateHighestPointComparison(req, res) {
    const inputHighestPoint = req.query.height; // Get the highest point from the query parameters
    const highestPoint = parseFloat(inputHighestPoint);
    if (isNaN(highestPoint)) {
        res.status(400).send("Invalid highest point");
        return;
    }
    const rhodeIslandData = getRhodeIslandData();
    const rhodeIslandComparison = calculateRIHighestPointComparison(highestPoint, rhodeIslandData);
    // return json response with data and comparison
    res.json({
        "Rhode Island Highest Point": "812 ft", // Rhode Island highest point in feet
        highestPoint: highestPoint,
        meters: (highestPoint * 0.3048).toFixed(2),
        feet: (highestPoint / 0.3048).toFixed(2),
        comparison: rhodeIslandComparison,
    });
}

function calculateRIHighestPointComparison(highestPoint, rhodeIslandData) {
    const rhodeIslandHighestPoint = rhodeIslandData.highestPoint;
    const comparison = (highestPoint / rhodeIslandHighestPoint).toFixed(3);
    // return comparison;
    return `The input height is ${comparison} times the highest point of Rhode Island, or ${comparison * 100}%.`;
}


// compare shoreline length
function calculateShorelineComparison(req, res) {
    const inputShoreline = req.query.shoreline; // Get the shoreline length from the query parameters
    const shoreline = parseFloat(inputShoreline);
    if (isNaN(shoreline)) {
        res.status(400).send("Invalid shoreline length");
        return;
    }
    const rhodeIslandData = getRhodeIslandData();
    const rhodeIslandComparison = calculateRIShorelineComparison(shoreline, rhodeIslandData);
    // return json response with data and comparison
    res.json({
        "Rhode Island Shoreline": "400 miles", // Rhode Island shoreline length in miles
        shoreline: shoreline,
        kilometers: (shoreline * 1.60934).toFixed(2),
        miles: (shoreline / 1.60934).toFixed(2),
        comparison: rhodeIslandComparison,
    });
}

function calculateRIShorelineComparison(shoreline, rhodeIslandData) {
    const rhodeIslandShoreline = rhodeIslandData.shoreline;
    const comparison = (shoreline / rhodeIslandShoreline).toFixed(3);
    // return comparison;
    return `The shoreline length is ${comparison} times the shoreline length of Rhode Island, or ${comparison * 100}%.`;
}

// compare water-to-land ratio
function calculateWaterToLandRatioComparison(req, res) {
    const inputWaterToLandRatio = req.query.ratio; // Get the water-to-land ratio from the query parameters
    const waterToLandRatio = parseFloat(inputWaterToLandRatio);
    if (isNaN(waterToLandRatio)) {
        res.status(400).send("Invalid water-to-land ratio");
        return;
    }
    const rhodeIslandData = getRhodeIslandData();
    const rhodeIslandComparison = calculateRIWaterToLandRatioComparison(waterToLandRatio, rhodeIslandData);
    // return json response with data and comparison
    res.json({
        "Rhode Island Water-to-Land Ratio": "49.5%", // Rhode Island water-to-land ratio
        ratio: waterToLandRatio,
        comparison: rhodeIslandComparison,
    });
}

function calculateRIWaterToLandRatioComparison(waterToLandRatio, rhodeIslandData) {
    const rhodeIslandWaterToLandRatio = rhodeIslandData.waterToLandRatio;
    const comparison = (waterToLandRatio / rhodeIslandWaterToLandRatio).toFixed(3);
    // return comparison;
    return `The water-to-land ratio is ${comparison} times the water-to-land ratio of Rhode Island, or ${comparison * 100}%.`;
}



module.exports = {
    calculateLengthComparison,
    calculateAreaComparison,
    calculatePopulationComparison,
    calculateHighestPointComparison,
    calculatePopulationDensityComparison,
    calculateShorelineComparison,
    calculateWaterToLandRatioComparison,
};
