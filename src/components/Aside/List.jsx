import React, {useState, } from 'react';
import { Modal } from 'react-bootstrap'
import './List.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CategoryList from './Body/CategoryList';


function List() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='list'>
            <Header />
            <CategoryList />
            <Footer handleShow={handleShow}/>
            <AddCategoryModal show = {show} handleClose={handleClose}  />
        </div>
    )
}

export default List



function AddCategoryModal({show, handleClose, }) {
  
    
  
      return (
        <>  
          <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Form In Her</Modal.Body>
          </Modal>
        </>
      );
    }