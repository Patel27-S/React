import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList'

import searchImages from './api'


function App(){

    const handleSubmit = (term) =>{
        searchImages(term);
        }
    return <div>
        <SearchBar onSubmit = {handleSubmit}/>
        {/* <ImageList imagesList = {{handleSubmit}}/> */}
    </div>
}


export default App;