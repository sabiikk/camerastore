import React from 'react'
// import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Header from './Header';
import '../components/addproject.css';

function Addproject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Header/>
    <div  style={{marginTop:'250px'}} className="d-flex justify-content-center">
      <Button className='addbtn' variant="primary"  onClick={handleShow} >SELL YOUR CAMERA</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SELL CAMERA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className='row'>
        <div className='col-md-6'>
          <label htmlFor="productImg">
            <input type="file" style={{display:'none'}} id='productImg' />
            <img src="https://img.freepik.com/premium-vector/upload-folder-icon_791764-715.jpg?w=740"
            className='w-100'
            alt="" />
            {/* <h4 className='me-1'>UPLOAD FILE</h4> */}
          </label>
        </div>
        <div className='col-md-6'>
       
          <input type="text" placeholder='Camera Modal' className='form-control mb-3' />
          <input type="text" placeholder='Short caption' className='form-control mb-3' />
          <input type="text" placeholder='Camera Price' className='form-control mb-3' />
          <textarea name="" id="" placeholder='camera overviewe' rows={4} className='form-control mb-3'   ></textarea>
        
              
        </div>
      </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            SELL Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  )
}

export default Addproject