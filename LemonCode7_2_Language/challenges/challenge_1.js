
const plain = (narray) => {
    return narray.reduce( (r, element) => {

            r.push(...Array.isArray(element) ? plain(element) : [element]);
            return r;
        },
        []
    );
}

/* Challenge 1 */

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

console.log(plain(sample));
