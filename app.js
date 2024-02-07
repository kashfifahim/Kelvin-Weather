// // Set today's forecasted temperature in Kelvin
// let kelvin = 0;

// // Converting Kelvin to Celsius
// let celsius = kelvin - 273;

// // Converting Celsius to Fahrenheit then rounding it
// let fahrenheit = celsius * (9/5) + 32;
// fahrenheit = Math.floor(fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

function convertKelvinToCelsius(kelvin) {
    return kelvin - 273;
}

function convertCelsiusToFahrenheit(celsius) {
    return Math.floor(celsius * (9/5) + 32);
}

let kelvin = Number(process.argv[2]);
// console.log(typeof kelvin);
let celsius = convertKelvinToCelsius(kelvin);
let fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);