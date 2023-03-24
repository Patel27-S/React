import { useState } from "react";


function Dropdown({options}){

    const [isOpen, setIsOpen] = useState(false);


    const [selected, setSelected] = useState('Select...');


    const handleClick = () =>{
        if(isOpen){
            setIsOpen(false);          
        }
        else{
            setIsOpen(true);
        }
    }

    const handleOptionClick = (option) =>{
        setIsOpen(false);

        setSelected(option.label);
    }

    // renderedOptions below is an array of 
    // div elements consiting of all option.labels.
    const renderedOptions = options.map((option) => {
        return <div key={option.value} onClick={()=>handleOptionClick(option)}>
            {option.label}
        </div>
    });


    return <div>
        <div onClick={handleClick}>{selected}</div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
}


export default Dropdown;