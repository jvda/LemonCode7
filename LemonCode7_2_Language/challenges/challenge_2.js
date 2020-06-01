
const deepGet = (obj, ...properties) => properties.reduce( (o, element) =>  o[element], obj);

const deepSet = (value, obj, ...properties) => {

    if (properties.length == 0) return obj; 

    let lastProperty = properties.pop();
    
    obj = properties.reduce( (o, property) => {
            if ( !Object.isExtensible(o[property])) o[property] = {};
            return o[property];
        },
        obj
    );

    obj[lastProperty] = value;

}


/* Challenge 2 */

const myObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};

console.log(JSON.stringify(deepGet(myObject, "x"),null,4)); // undefined
console.log(JSON.stringify(deepGet(myObject, "a"),null,4)); // 1
console.log(JSON.stringify(deepGet(myObject, "b"),null,4)); // { c: null, d: {....}}
console.log(JSON.stringify(deepGet(myObject, "b", "c"),null,4)); // null
console.log(JSON.stringify(deepGet(myObject, "b", "d", "f", "g"),null,4)); // bingo
console.log(JSON.stringify(deepGet(myObject),null,4)); // {a: 1, b: {...}}

deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject,null,4)); // {a: { b: 1}}
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject,null,4)); // {a: { b: 1, c: 2}}
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject,null,4)); // {a: 3}
deepSet(4, myObject);
console.log(JSON.stringify(myObject,null,4)); // Do nothing // {a: 3}
