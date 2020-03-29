import React, { useState } from "react"
import { Star, StarFill } from "react-bootstrap-icons"
import { connect } from "react-redux"

function TodoCard(props) {
  const [favorite, setfavorite] = useState(false)

  const displayFav = () => {
    return favorite ? <StarFill /> : <Star />
  }

  return (
    <div className="todo-card">
      <div>
        <input type="checkbox" className="todo-completed" />
        <h5 className="todo-title">{props.todo.name}</h5>
      </div>
      <div onClick={e => {
          e.preventDefault()
          setfavorite(!favorite)}
          }>{displayFav()}</div>
    </div>
  )
}

export default connect(null, {})(TodoCard)
