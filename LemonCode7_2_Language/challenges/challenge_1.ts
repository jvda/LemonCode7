
//type NestedArray<T> = Array<T | NestedArray<T>>;
type NestedArray<T> = T | Array<NestedArray<T>>;

const plainReduce = <T>(narray: Array<NestedArray<T>>): Array<T>=> {
    return narray.reduce<Array<T>>( (r: Array<T>, element: NestedArray<T>): Array<T> => {
        
        r.push(...Array.isArray(element) ? plainReduce(element) : [element]);
        
        return r;
    }
    ,[]);
};
   
/* Challenge 1 */

const sample: Array<NestedArray<number>> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

console.log(plainReduce(sample));