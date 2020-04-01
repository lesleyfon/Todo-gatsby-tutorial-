import React, { useState } from "react"
import "./List.css"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import CategoryList from "./Body/CategoryList"
import AddCategoryModal from './Body/AddCategoryModal'

function List() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="list">
      <Header />
      <CategoryList />
      <Footer handleShow={handleShow} />
      <AddCategoryModal show={show} handleClose={handleClose} />
    </div>
  )
}

export default List


