import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import "./TodoInput.css"
import { PlusSquare, Calendar, Star, StarFill } from "react-bootstrap-icons"
// src/components/Main/Input/TodoInput.module.css
function TodoInput() {
  const [todo, setTodo] = useState({
    todo: "",
    completed: false,
    date: "",
    category: "",
    farvorite: false,
  })
  const [farvorite, setfarvorite] = useState(false)

  const handleChange = e => {
    setTodo({
      [e.target.name]: e.target.value,
    })
  }
  useEffect(() => {}, [farvorite])

  const displayFav = () => {
    return farvorite ? <StarFill /> : <Star />
  }
  return (
    <div className="div-todo">
      <PlusSquare color={"aliceblue"} />
      <input
        id="input-todo"
        name="todo"
        placeholder="Add a todo ..."
        onChange={handleChange}
      />
      <Calendar />
      <div
        onClick={e => {
          e.preventDefault()
          setfarvorite(!farvorite)
          setTodo({
            ...todo,
            farvorite: !todo.farvorite
            })
        }}
      >
        {displayFav()}
      </div>
    </div>
  )
}

export default connect()(TodoInput)
