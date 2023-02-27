import { useState } from "react";

import BookEdit from "./BookEdit";

function BookShow({book, key, onDelete, onEdit}){

    const [showEdit, setShowEdit] = useState(false);

    const handleClick = () =>{
        onDelete(book.id);
    };

    const handleEdit = () =>{
        if(showEdit === true){
            setShowEdit(false);
        }
        else{
            setShowEdit(true);
        };
    };

    const handleSubmit = (id, newTitle) =>{
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    let content = <h3>{book.title}</h3>

    if(showEdit === true){
        content = <BookEdit book = {book} onSubmit={handleSubmit}/>
    }

    return (
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEdit}>
                    Edit
                </button>
                <button className="delete" onClick={handleClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;