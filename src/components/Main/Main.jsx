import React from 'react'
import './Main.css'
import {connect } from 'react-redux'
import TodoInput from './Input/TodoInput'
import Header from './Header/Header'
import TodoList from './TodoList/TodoList'

function Main() {
    return (
        <div className='main'>
            <Header />
            <TodoInput />

            <TodoList />
        </div>
    )
}

export default Main
