import React from 'react'
import Header from './Header'
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
function Profile() {
  return (
    <>
    <Header/>
    <Container fluid className="mt-5">
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-light border-right">
          <ListGroup variant="flush">
            <ListGroup.Item action href="#profile">
              Profile
            </ListGroup.Item>
            <ListGroup.Item action href="#settings">
              Settings
            </ListGroup.Item>
            <ListGroup.Item action href="#messages">
              Messages
            </ListGroup.Item>
            <ListGroup.Item action href="#logout">
              Logout
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Profile Card */}
        <Col md={6}>
          <Card className="text-center shadow-sm">
            <Card.Img
              variant="top"
              src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"
              alt="Profile"
              className="rounded-circle mt-3 mx-auto"
              style={{ width: '150px', height: '150px' }}
            />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                Web Developer with a passion for creating beautiful and functional websites.
                Skilled in HTML, CSS, JavaScript, and React.
              </Card.Text>
              <div className="d-flex justify-content-center mb-3">
                <Button variant="primary" className="me-2" href="https://twitter.com">
                  Twitter
                </Button>
                <Button variant="dark" href="https://github.com">
                  GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    
    
    </>
  )
}

export default Profile