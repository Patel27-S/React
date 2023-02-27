import { useState } from "react";


function BookEdit({book, onSubmit}){

    // Making sure whatever the original title is 
    // ,is always displayed even when we try editing the 
    // book's title
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) =>{
        // event.preventDefault();
        setTitle(event.target.value);
    }


    const handleSubmit = (event) =>{
        event.preventDefault();
        // onEdit(book.id, title);
        onSubmit(book.id, title);
    }


    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;