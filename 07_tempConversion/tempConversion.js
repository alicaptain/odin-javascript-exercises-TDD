const ftoc = function (fahrenheit) {
  if (isNaN(fahrenheit)) {
    return 'ERROR';
  } else {
    let rawCelsius = (fahrenheit - 32) / 1.8;
    let Celsius = Math.round(rawCelsius * 10) / 10;
    return Celsius;
  }



};

const ctof = function (celsius) {
  if (isNaN(celsius)) {
    return 'ERROR';
  } else {
    let rawFahrenheit = (celsius * 1.8) + 32;
    let Fahrenheit = Math.round(rawFahrenheit * 10) / 10;
    return Fahrenheit;
  }

};



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};