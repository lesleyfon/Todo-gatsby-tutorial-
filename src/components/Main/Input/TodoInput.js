import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import "./TodoInput.css"
import { PlusSquare, Calendar, Star, StarFill } from "react-bootstrap-icons"
import { addTodo } from "./../../../Redux/actions/todoAction"
// src/components/Main/Input/TodoInput.module.css
function TodoInput(props) {
  const [todo, setTodo] = useState({
    name: "",
    completed: false,
    date: "",
    category: "",
    farvorite: false,
  })
  const [farvorite, setfarvorite] = useState(false)

  const handleChange = e => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    })
    handleSubmit(e)
  }

  useEffect(() => {
    console.log(props)
  }, [farvorite, props.todo])

  const displayFav = () => {
    return farvorite ? <StarFill /> : <Star />
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
          setfarvorite(!farvorite)
          setTodo({
            ...todo,
            farvorite: !todo.farvorite,
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
