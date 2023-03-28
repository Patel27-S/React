import { useState } from "react";

// import handleSelect from "../"
import {GoChevronDown} from "react-icons/go";


function Dropdown({options, value, onChange}){

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

        onChange(option);
    }

    // renderedOptions below is an array of 
    // div elements consiting of all option.labels.
    const renderedOptions = options.map((option) => {
        return <div className = "hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={()=>handleOptionClick(option) }>
            {option.label}
        </div>
    });


    return (
    <div className="w-48 relative ">
        <div 
            className="flex justify-between items-center cursor-pointer rounded p-3 shadow bg-white w-full" 
            onClick={handleClick}>
                {value}
            <GoChevronDown className="text-lg"/>
        </div>
        {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>);
}


export default Dropdown;