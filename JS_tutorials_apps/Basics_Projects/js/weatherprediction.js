// Current Temperature in Kelvin degrees
const kelvin = 293; 
// convertir kelvin to celsius
const celsius = kelvin - 273;
// Convert Celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Round down fahrenheit variable
fahrenheit = Math.floor(fahrenheit);
// use Console to interpolate and print a string
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The Temperature is ${newton} degrees Newton.`);