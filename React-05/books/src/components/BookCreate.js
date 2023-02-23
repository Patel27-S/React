import { useState } from "react";


function BookCreate({onCreate}){
    const [title, setTitle] = useState('');

    const handleChange = (event) =>{
        event.preventDefault();
        setTitle(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default BookCreate;