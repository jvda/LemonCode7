
const concat = (head, ...tail) => (tail.length >= 1) ? [...head, ...concat(...tail)] : head;

/* Ejercicio 2 */

let b = ["cuatro","cinco","seis","siete"];
let c = ["ocho","nueve","diez"]
let d = ["once"];

console.log("concat:");
console.log(concat(a,b));
console.log(concat(a,b,c,d));