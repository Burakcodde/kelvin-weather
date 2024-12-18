// Bugünkü tahmin
const kelvin = 0;

// celsius kelvinden 273 derece düşüktür
let celsius = kelvin - 273;

// celsius değerimizi kullanarak fahrenheit değerimizi bulduk.
let fahrenheit = celsius * (9 / 5) + 32;

// fahreheit değerini aşağıya yuvarladık.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton`);
