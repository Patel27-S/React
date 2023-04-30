import { useState } from 'react';
import Modal from '../components/Modal'
import Button from '../components/Button';

function ModalPage(){

    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
        // When the Button is clicked we want to show the 
        // Modal.
        setShowModal(true);
    }

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {/* Below is a Rule :- */}
            {showModal && <Modal />}
        </div>
    )
}

export default ModalPage;