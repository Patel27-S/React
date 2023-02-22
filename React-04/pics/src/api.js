import axios from "axios";


const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',
    {
        headers :{
            Authorization: 'Client-ID <Put whatever your access key for Unsplash API is, here. It is supposed to be confidential and hence I have removed from the code>'
        },
        params :{
            query : term
        }
    }

    )
  
    return response.data.results;
};


export default searchImages;