import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-4">Sign up</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formVerifyPassword">
          <Form.Control type="password" placeholder="Verify Password" />
        </Form.Group>
        <Link to="/Kambaz/Account/Profile">
          <Button variant="primary" className="w-100 mb-2">
            Sign up
          </Button>
        </Link>
        <Link to="/Kambaz/Account/Signin">
          <Button variant="link" className="w-100">
            Already have an account? Sign in
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
