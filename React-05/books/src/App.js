import { useState } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList"

function App(){

    const [books, setBooks] = useState([]);
    

    const createBook = (title) => {
        const updatedBooks = [
            ...books, 
            {
                id:Math.round(Math.random()*9999), 
                title: title
            } 
        ];
        setBooks(updatedBooks);
      };
    

    const deleteBookById = (id) =>{
        // We want to remove the object from the array
        // in which the value of 'id' is the passed 'id'
        // parameter
        const updatedBooks = books.filter((book) =>{
        return book.id !== id
    });

        setBooks(updatedBooks);
    }
    // console.log(books);
    
    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook}/>         
        </div>
    );
}

export default App;