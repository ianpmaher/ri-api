
// === length === //
/**
 * Converts miles to kilometers.
 * @param {number} miles - The value in miles.
 * @returns {number} The equivalent value in kilometers.
 */
const milesToKilometers = (miles) => miles * 1.60934;

/**
 * Converts kilometers to miles.
 * @param {number} kilometers - The value in kilometers.
 * @returns {number} The equivalent value in miles.
 */
const kilometersToMiles = (kilometers) => kilometers / 1.60934;

const inchesToCentimeters = (inches) => inches * 2.54;

const centimetersToInches = (centimeters) => centimeters / 2.54;

const feetToMeters = (feet) => feet * 0.3048;

const metersToFeet = (meters) => meters / 0.3048;

const yardsToMeters = (yards) => yards * 0.9144;

const metersToYards = (meters) => meters / 0.9144;

const milesToMeters = (miles) => miles * 1609.34;

const metersToMiles = (meters) => meters / 1609.34;

// === area === //

const squareMilesToSquareKilometers = (squareMiles) => squareMiles * 2.58999;

const squareKilometersToSquareMiles = (squareKilometers) => squareKilometers / 2.58999;

const squareFeetToSquareMeters = (squareFeet) => squareFeet * 0.092903;

const squareMetersToSquareFeet = (squareMeters) => squareMeters / 0.092903;

const squareYardsToSquareMeters = (squareYards) => squareYards * 0.836127;

const squareMetersToSquareYards = (squareMeters) => squareMeters / 0.836127;

const acresToHectares = (acres) => acres * 0.404686;

const hectaresToAcres = (hectares) => hectares / 0.404686;

// === temperature === //

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

const celsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32;

// === weight === //

const poundsToKilograms = (pounds) => pounds * 0.453592;

const kilogramsToPounds = (kilograms) => kilograms / 0.453592;


// === volume === //
const fluidOuncesToMilliliters = (fluidOunces) => fluidOunces * 29.5735;

const millilitersToFluidOunces = (milliliters) => milliliters / 29.5735;

const gallonsToLiters = (gallons) => gallons * 3.78541;

const litersToGallons = (liters) => liters / 3.78541;


module.exports = {
    milesToKilometers,
    kilometersToMiles,
    inchesToCentimeters,
    centimetersToInches,
    feetToMeters,
    metersToFeet,
    yardsToMeters,
    metersToYards,
    milesToMeters,
    metersToMiles,
    squareMilesToSquareKilometers,
    squareKilometersToSquareMiles,
    squareFeetToSquareMeters,
    squareMetersToSquareFeet,
    squareYardsToSquareMeters,
    squareMetersToSquareYards,
    acresToHectares,
    hectaresToAcres,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    poundsToKilograms,
    kilogramsToPounds,
    fluidOuncesToMilliliters,
    millilitersToFluidOunces,
    gallonsToLiters,
    litersToGallons,
    // Export other conversion functions
};
