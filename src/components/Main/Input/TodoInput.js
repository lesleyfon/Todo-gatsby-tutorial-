import React, { useState } from "react"
import { connect } from "react-redux"
import "./TodoInput.css"
import { PlusSquare, Calendar, Star, StarFill } from "react-bootstrap-icons";

import { addTodo } from "./../../../Redux/actions/todoAction";


function TodoInput(props) {
  
  const [favorite, setfavorite] = useState(false)
  const [todo, setTodo] = useState({
    name: "",
    completed: false,
    date: "",
    category: "",
    favorite: false,
  })

  const handleChange = e => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    })
    handleSubmit(e)
  }

  const displayFav = () => {
    return favorite ? <StarFill /> : <Star />
  }

  const handleSubmit = e => {
    if (e.key === "Enter") {
      console.log(todo)
      props.addTodo(todo)
      e.target.value = ""
    }
  }

  return (
    <div className="div-todo">
      <PlusSquare color={"aliceblue"} />
      <input
        id="input-todo"
        name="name"
        placeholder="Add a todo ..."
        onKeyUp={handleChange}
      />
      <Calendar />
      <div
        onClick={e => {
          e.preventDefault()
          setfavorite(!favorite)
          setTodo({
            ...todo,
            favorite: !todo.favorite,
          })
        }}
      >
        {displayFav()}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todo: state.todoreducer,
  }
}
export default connect(mapStateToProps, {
  addTodo,
})(TodoInput)
