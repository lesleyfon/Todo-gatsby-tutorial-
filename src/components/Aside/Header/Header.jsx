import React from 'react'
import {Search, Justify, PersonBoundingBox, Bell } from 'react-bootstrap-icons';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='top'>
                <div className='burger-menu'>
                    <Justify  size={35} />
                </div>
                <div className='input-field'>
                    <input type='text' className="rq-form-element" name='search'/>
                    <i></i>
                    <div>
                        <Search size={25}/>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className="name-icon"> <PersonBoundingBox size={30}/></div>
                <div className="name-tag"> Lesley Banadzem</div>
                <div className="notifications"> <Bell size={30} /></div>
            </div>
        </div>
    )
}

export default Header
