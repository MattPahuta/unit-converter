// save number to variable
let num = 20;

const unitEntryVal = document.getElementById('unit-entry-val');
const metricInitialVals = document.querySelectorAll('.metric-initial');
const impInitialVals = document.querySelectorAll('.imp-initial');

const calcButton = document.getElementById('calculate-btn');

// results elements
const feetResults = document.getElementById('feet-results');
const meterResults = document.getElementById('meter-results');
const gallonResults = document.getElementById('gallon-results');
const literResults = document.getElementById('liter-results');
const poundResults = document.getElementById('pound-results');
const kiloResults = document.getElementById('kilo-results');

// *** calculations/formulas *** //
// ***************************** //
/* 
  meters to feet 
  One meter is approximately equal to 3.28084 feet. To convert meters to feet, multiply the given meter value by 3.28084 feet
  - num * 3.28084 

  liters to gallons
  gallons = 0.264172 × liters. Therefore, we just multiply the liters by 0.264172 or divide by 3.785 to convert them into gallons.

  kilograms to pounds 
  The approximation we use for kilograms (kg) to pounds (lb) is 1 kg = 2.2 lb. To convert from kilogram to pound, we multiply by 2.2.

*/

// set initial values
unitEntryVal.textContent = num;

function setInitialVals() {
  metricInitialVals.forEach(val => val.textContent = num)
  impInitialVals.forEach(val => val.textContent = num)
}

// Calculation functions
function metersToFeet(meters) {
  return (meters * 3.2808).toFixed(3);
}

function feetToMeters(feet) {
  return (feet / 3.281).toFixed(3);
}

function litersToGallons(liters) {
  return (liters / 3.785).toFixed(3);
}

function gallonsToLiters(gallons) {
  return (gallons * 3.785412).toFixed(3);
}

function kilogramsToPounds(kilos) {
  return (kilos * 2.2046).toFixed(3);
}

function poundsToKilograms(pounds) {
  return (pounds / 2.2046).toFixed(3);
}

setInitialVals();

// calcButton.addEventListener('click', () => {
//   feetResults.textContent = metersToFeet(num);
//   meterResults.textContent = feetToMeters(num);
//   gallonResults.textContent = litersToGallons(num);
//   literResults.textContent = gallonsToLiters(num);
//   poundResults.textContent = kilogramsToPounds(num);
//   kiloResults.textContent = poundsToKilograms(num);
// })



feetResults.textContent = metersToFeet(num);
meterResults.textContent = feetToMeters(num);
gallonResults.textContent = litersToGallons(num);
literResults.textContent = gallonsToLiters(num);
poundResults.textContent = kilogramsToPounds(num);
kiloResults.textContent = poundsToKilograms(num);

