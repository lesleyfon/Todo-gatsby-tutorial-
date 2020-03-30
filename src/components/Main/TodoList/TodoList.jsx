import React, { useState, useEffect } from 'react'
import TodoCard from './TodoCard'
import './TodoList.css'
import { connect } from 'react-redux'

function TodoList(props) {
    const [todo, setTodo] = useState([]);

    useEffect(()=>{ 
        setTodo(props.todo)
    },[props.todo,])

    // const displayCards = () => {
    //     if(todo.length <= 0 ){
    //         return null
    //     }else{
    //        return )
    //     }
    // }
    return (
        <div>

            { (todo.length <= 0 ) ? null :  todo.map((item, index) => <TodoCard key={index} todo={ item } index={index}/>) }
        </div>
    )
}

const mapstateToProps = state => {
    return {
        todo:  state.todoreducer.todo
    }
}
export default connect(mapstateToProps, {})(TodoList)
