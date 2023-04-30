import classNames from "classnames";

import useNavigation from "../hooks/use-navigation";

function Link({to, children, className, activeClassName}){ 

    const {navigate, currentPath} = useNavigation();

    const classes = classNames(
        'text-blue-500', 
        className,
        currentPath === to && activeClassName);

    const handleClick = (event) =>{
        event.preventDefault();
        navigate(to);
    };
    return (
    <div>
        <a href={to} className={classes} onClick={handleClick}> {children}</a>
    </div>
    );
}
        
    

export default Link;