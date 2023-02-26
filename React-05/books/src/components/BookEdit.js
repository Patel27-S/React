import { useState } from "react";


function BookEdit({showEdit}){

    const [title, setTitle] = useState('');

    const handleChange = (event) =>{
        event.preventDefault();
        setTitle(event.target.value);
    }

    return (
        <form className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;