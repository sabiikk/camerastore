import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap"; // Import React Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

const backgroundStyle = {
  backgroundImage: 'url("https://img.freepik.com/free-photo/neat-workspace-with-camera_23-2147833206.jpg?t=st=1729184736~exp=1729188336~hmac=c780fcab88cd6eace490184257590b066310756b281bd6c922aa6a85a2a7e00d&w=900")', // Replace with your background image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh'
}

function Auth() {
  return (
    <>
      <div style={backgroundStyle}>
          {/* Back to Home Button */}
          <Button variant="primary" href="/"className="justify-content-center align-items-center mt-4 ms-4">
                Back to Home
              </Button>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100">
          <Col xs={12} md={6} lg={4} className="mx-auto">
            <div className="p-4 shadow rounded bg-white">
            

              {/* Login Form */}
              <h2 className="text-center mb-4">Login</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
              <p className="text-center mt-3">
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Auth;
