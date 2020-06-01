const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
    await delay(time);
    console.log(message);
};

const triggers = [
    async () => await showMessage([200, "third"]),
    async () => await showMessage([100, "second"])
];

//Función generica que ejecuta de forma secuencual cada función del array de triggers
const run = async triggers => {
    return await triggers.reduce( async (p,trigger) => {
        await p;
        const result = await trigger();
    },
    Promise.resolve());
};
// NOTA: Para ayudar a la comprensión del reduce anterior. No lleva return porque al 
// llevar async la función devuelve una promesa. Esa promesa es la "p" de la siguiente
// iteración. De esta forma se consigue encadenar las promesas de cada elemento del
// array

// El caso de first se hace fuera de la función "run" para dejarla más genérica
run(triggers).then( result => console.log("first"));
