import React from 'react'
import {Search, Justify} from 'react-bootstrap-icons';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='top'>
                <div className='burger-menu'>
                    <Justify  size={45} />
                </div>
                <div className='input-field'>
                    <input type='text' className="rq-form-element" name='search'/>
                    <i></i>
                    <div>
                        <Search size={30}/>
                    </div>
                </div>
            </div>
            <div className='bottom'>

            </div>
        </div>
    )
}

export default Header
