function SearchBar({onSubmit}){
   
    const handleFormSubmit = (event) =>
    {   
        event.preventDefault();
        onSubmit('cars');
    };

    return (
    <form onSubmit={handleFormSubmit}>
        <div>
            <input />      
        </div>
    </form>
    );
}


export default SearchBar;