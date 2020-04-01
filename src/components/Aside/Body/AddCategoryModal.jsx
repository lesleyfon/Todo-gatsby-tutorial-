import React, {useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { connect } from 'react-redux';


function AddCategoryModal({ show, handleClose }) {
  const date = new Date();
  const [category, setCategory] = useState({
      name: '',
      date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
  });
  const handleChange = event => setCategory({...category,
  [event.target.name]: event.target.value})
return (
  <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Control type="text" placeholder="Category Name" onChange={handleChange}/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary">Secondary</Button>
      </Modal.Footer>
    </Modal>
  </>
)
}

export default AddCategoryModal
