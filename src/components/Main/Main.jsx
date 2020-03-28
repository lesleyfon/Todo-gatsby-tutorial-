import React from 'react'
import './Main.css'
import {connect } from 'react-redux'
import TodoInput from './Input/TodoInput'
import Header from './Header/Header'

function Main(props) {
    return (
        <div className='main'>
            <Header />
            <TodoInput />
        </div>
    )
}

const mapStateToProps = state =>{
    return state
}
export default connect(mapStateToProps,  {})(Main)
