import React, {useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { addCategory } from './../../../Redux/actions/todoAction'


function AddCategoryModal({ show, handleClose }) {
  //For creating a new date instance
  const date = new Date();
  const [category, setCategory] = useState({
      name: '',
      date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
  });

  const dispatch = useDispatch();
  const handleChange = event => setCategory({...category,
  [event.target.name]: event.target.value});

  //Submit new Category
  const submitCategory = event => {
    event.preventDefault();
    dispatch(addCategory(category));
    setCategory({
      ...category,
      name: ''
    });
    handleClose()
  }
return (
  <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Control type="text" name='name' value={category.name} placeholder="Category Name" onChange={handleChange}/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={submitCategory}>Secondary</Button>
      </Modal.Footer>
    </Modal>
  </>
)
}

export default AddCategoryModal
