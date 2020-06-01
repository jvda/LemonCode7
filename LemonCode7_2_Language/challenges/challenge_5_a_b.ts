const expensiveFunction = (): number => {
    console.log("Una única llamada");
    return 3.1415;
}

const memoize = <T>(func: () => T): (() => T) => {
    let cache: T;
    return (): T => cache = cache == undefined ? cache = func() : cache;
};

/* 
NOTA apartado b:
Para hacerlo en una sola línea tengo que sacar la declaración de mi variable "cache" fuera de la función,
pero ya no puedo tiparla y además ya no está solo en el scope de la función, sino que se podría tocar desde fuera,
lo dejo aquí abajo comentado como solución al apartado b pero personalmente prefiero la solución de arriba
*/

//let cache: any;
//const memoize = <T>(func: () => T): (() => T) => (): T => cache = cache == undefined ? cache = func() : cache;

const memoizedTS = memoize(expensiveFunction);
console.log(memoizedTS()); // Una única llamada // 3.1415
console.log(memoizedTS()); // 3.1415
console.log(memoizedTS()); // 3.1415