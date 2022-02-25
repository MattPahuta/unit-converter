// save number to variable - initial static num for testing
// let num = 0;

const unitEntryVal = document.getElementById('unit-entry-val');
const metricInitialVals = document.querySelectorAll('.metric-initial');
const impInitialVals = document.querySelectorAll('.imp-initial');

const form = document.querySelector('form');
const input = document.querySelector('#unit-input');
const calcButton = document.getElementById('calculate-btn');

// results elements
const feetResults = document.getElementById('feet-results');
const meterResults = document.getElementById('meter-results');
const gallonResults = document.getElementById('gallon-results');
const literResults = document.getElementById('liter-results');
const poundResults = document.getElementById('pound-results');
const kiloResults = document.getElementById('kilo-results');

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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const valToConvert = Number(input.value);
  renderResults(valToConvert);
  setConvertVals(valToConvert);
  form.reset();
})

function setConvertVals(num) {
  metricInitialVals.forEach(val => val.textContent = num)
  impInitialVals.forEach(val => val.textContent = num)
}

function renderResults(num) {
  feetResults.textContent = metersToFeet(num);
  meterResults.textContent = feetToMeters(num);
  gallonResults.textContent = litersToGallons(num);
  literResults.textContent = gallonsToLiters(num);
  poundResults.textContent = kilogramsToPounds(num);
  kiloResults.textContent = poundsToKilograms(num);
}



