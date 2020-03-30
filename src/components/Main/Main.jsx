import React from "react"
import "./Main.css"
import TodoInput from "./Input/TodoInput"
import Header from "./Header/Header"
import TodoList from "./TodoList/TodoList"

const Main = () => (
  <div className="main">
    <Header />
    <TodoInput />
    <TodoList />
  </div>
)

export default Main
