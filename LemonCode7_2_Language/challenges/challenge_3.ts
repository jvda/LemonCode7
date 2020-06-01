
type Tree<T> = {sheet: T} | {branch: Tree<T> | Array<Tree<T>>};

const t: Tree<number> = {
    branch: [
        {sheet:  34},
        {branch:
            {sheet: 28}
        }
    ]
};

console.log(JSON.stringify(t,null,4));
