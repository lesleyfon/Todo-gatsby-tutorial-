import React, {useState} from 'react';
import { connect } from 'react-redux';


function TodoInput() {
    const [todo, setTodo] = useState({
        todo: '',
        completed: false,
        date: '',
        category: ''
    })
    const handleChange = e => {
        setTodo({
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <input name='todo' placeholder='Add a todo ...' onChange={handleChange}/>
        </div>
    )
}

export default connect()(TodoInput)
