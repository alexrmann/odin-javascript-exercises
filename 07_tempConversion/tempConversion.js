const convertToCelsius = function(tempFahr) {
  const tempCels = (tempFahr -32) * (5/9);
  let roundedCels = Math.round(tempCels * 10) / 10
  return roundedCels;
};

const convertToFahrenheit = function(tempCels) {
  const tempFahr = tempCels * (9/5) + 32;
  let roundedFahr = Math.round(tempFahr * 10) / 10
  return roundedFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
