
interface book {
    title: string;
    isRead: boolean;
}

function isBookReadTS(books: Array<book>, titleToSearch: string): boolean {
    let book: book = books.find((element: book): boolean => element.title == titleToSearch);
    return book == undefined ? false : book.isRead;
}

/* Ejercicio 4 */

const books2: Array<book> = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];

console.log(isBookReadTS(books2, "Devastación")); // true
console.log(isBookReadTS(books2, "Canción de hielo y fuego")); // false
console.log(isBookReadTS(books2, "Los Pilares de la Tierra")); // false

