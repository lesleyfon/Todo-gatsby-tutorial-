import React from 'react'
import { PlusCircle} from 'react-bootstrap-icons';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='plus-sign'>
                <PlusCircle />
            </div>
            <div>
                <h4>Create List</h4>
            </div>
        </div>
    )
}

export default Footer
