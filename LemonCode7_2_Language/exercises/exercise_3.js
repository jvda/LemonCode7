
function clone(source) {
    return {...source};
}

function merge(target, source) {
    return {...source, ...target};
}

/* Ejercicio 3 */

const pa = {name: "Maria", surname: "Ibañez", country: "SPA"};
const pb = {name: "Luisa", age: 31, married: true};

console.log(clone(pa));
console.log(merge(pa,pb));