import {GoBell, GoCloudDownload} from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage(){

    const handleClick = () =>{
        console.log('Please Click This.')
    }
    return (<div>
        <div>
            <Button success rounded onClick={handleClick}>
                <GoBell className='mr-1'/>
                Click me
            </Button>
        </div>
        <div>
            <Button primary outline>
                <GoCloudDownload/>
                Hide Ads
            </Button>
        </div>
        <div>
            <Button danger>
                Buy Now
            </Button>
        </div>
    </div>);    
}


export default ButtonPage;