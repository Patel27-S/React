import Link from "./Link";

function Sidebar(){

    // An array of objects :-
    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'},
        {label: 'Modal', path: '/modal'},
    ];

    // "map" is a function for arrays. "filter" is also a function on arrays.
    const renderedLinks = links.map((link)=>{
        return (
        <Link 
            key={link.label} 
            to={link.path} 
            children={link.label} 
            className="mb-3" 
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
            {link.label}
        </Link>)
    })

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {renderedLinks}
        </div>
    );
}


export default Sidebar;