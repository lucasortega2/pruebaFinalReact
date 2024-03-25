import books from "../books.json" with {type : "json"}
import { randomUUID } from 'node:crypto'
import fs from "fs"
export const getAllBooksModel = () => {
    return books
}

export const getBookForIdModel = ({id}) => {
    const book = books.filter((book) => book.id === id)
    return book
};
export const createBookModel = ({ input }) => {
    const newBook = {
        id: input.id ? input.id : randomUUID() ,
        ...input
    }
    const newBooks = [...books, newBook]
    fs.writeFileSync("books.json", JSON.stringify(newBooks,null,2),"utf-8");
    return newBook
}

export const updateBookModel = ({ id, data }) => {

     const updatedBooks = books.map(book => {
        if (book.id === id) {
            return {
                ...book,
                ...data
            };
        }
        return book; 
    });
    
 fs.writeFileSync("books.json", JSON.stringify(updatedBooks,null,2),"utf-8");
    return data
}

export const deleteBookModel = ({id}) => {
    const bookIndex = books.findIndex(book => book.id === id)
    console.log(bookIndex);
    books.splice(bookIndex, 1)
    fs.writeFileSync("books.json", JSON.stringify(books,null,2),"utf-8");
    return true
}