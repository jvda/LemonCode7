
let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string =>
    (count++ , `${text} `.repeat(repetitions).trim());

const memoizeArgs = <T>(func: (...args: Array<number | string | boolean>) => T ) => {
    let cache: object = {};
    return (...args: Array<number | string | boolean>): T => {
        let key: string = JSON.stringify(args);
        return cache[key] = cache[key] ? cache[key] : func(...args);
    }
};

const memoizedGreet = memoizeArgs(repeatText);

console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count);