// main.js

// Importa las funciones y la constante de mathUtils.js
import { add, subtract, PI } from './mathUtils.js';

// Usa las funciones importadas
const sum = add(5, 3);
console.log(`Sum: ${sum}`); // Output: Sum: 8

const difference = subtract(5, 3);
console.log(`Difference: ${difference}`); // Output: Difference: 2

console.log(`Value of PI: ${PI}`); // Output: Value of PI: 3.14159
