import React from 'react'
import myImage5 from "../assets/landpage.jpg";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Fhome() {
  return (
    <div>
     <Container className="text-center my-4">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h3 style={{marginTop:'50px'}} >Let's Take a Picture</h3>
          <h1>  PICTURE</h1>
          <div className="imgeland mb-4">
            <img style={{width:'100%'}} src={myImage5} alt="Camera" className="img-fluid" />
          </div>
          <Button variant="primary" as={Link} to="/login" style={{marginTop:"-700px"}} >
            GETTING STARTED
          </Button>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Fhome