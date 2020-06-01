
const head = ([first]) => first;

const tail = ([first, ...last]) => last;

const init = (all) => all.slice(0, all.length - 1);

const last = (all) => all.pop();

/* Ejercicio 1 */
console.log("Exercise 1:");

let a = ["uno","dos","tres"];

console.log(head(a)); 
console.log(tail(a)); 
console.log(init(a)); 
console.log(last(a)); 
