const convertToFahrenheit = function(baseF) {
  let baseC = baseF * 9/5 + 32;
  return Math.round(baseC*10)/10;
};

const convertToCelsius = function(baseC) {
  let baseF = (baseC - 32) * 5/9;
  return Math.round(baseF*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
