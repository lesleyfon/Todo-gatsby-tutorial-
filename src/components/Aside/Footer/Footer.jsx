import React from 'react'
import { PlusCircle} from 'react-bootstrap-icons';
import './Footer.css'

function Footer({ handleShow }) {
    return (
        <div className='footer'>
            <div className='plus-sign' onClick={handleShow}>
                <PlusCircle />
            </div>
            <div onClick={handleShow} >
                <h4>Create List</h4>
            </div>
        </div>
    )
}

export default Footer
