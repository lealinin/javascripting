// Convert Celsius to Fahrenheit

const convertToF = function(celsius) {
  let fahrenheit = celsius * 9/5 + 32
  return fahrenheit;
}

console.log(convertToF(30))