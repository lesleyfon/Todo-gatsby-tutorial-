import React, { useState, useEffect } from "react"
import { Star, StarFill, FileEarmarkCheck } from "react-bootstrap-icons"
import { completedTodo } from "./../../../Redux/actions/todoAction"
import { connect } from "react-redux"

function TodoCard(props) {
  const [favorite, setFavorite] = useState(false)
  const completedTodo = props.completedTodo

  const displayFav = () => {
    return favorite ? <StarFill /> : <Star />
  }

  console.log(props)
  useEffect(() => {}, [completedTodo, props.todo, props.index])

  const handleCompleted = e => {
    e.preventDefault()
    completedTodo({
      index: props.index,
      ...props.todo,
      completed: true,
    })
  }

  return (
    <div className="todo-card">
      <div>
        <div 
         role ='button'
         tabIndex={0}
         className="todo-completed" 
         onClick={handleCompleted}
         onKeyUp={handleCompleted}
         >
          <FileEarmarkCheck 
            size={20}
          />
        </div>
        <p className="todo-title">{props.todo.name}</p>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={e => {
          e.preventDefault()
          setFavorite(!favorite)
        }}
        onKeyUp={() => {
          setFavorite(!favorite)
        }}
      >
        {displayFav()}
      </div>
    </div>
  )
}

export default connect(null, {
  completedTodo,
})(TodoCard)
