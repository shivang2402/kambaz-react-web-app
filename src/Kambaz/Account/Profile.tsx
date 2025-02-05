import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-4">Profile</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control type="text" defaultValue="Shivang" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            defaultValue="123"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control type="text" defaultValue="Shivang" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control type="text" defaultValue="Patel" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDOB">
          <Form.Control type="date" defaultValue="2000-01-01" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            defaultValue="shivang@wonderland.com"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formRole">
          <Form.Select defaultValue="User">
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Faculty">Faculty</option>
            <option value="Student">Student</option>
          </Form.Select>
        </Form.Group>
        <Link to="/Kambaz/Account/Signin">
          <Button variant="danger" className="w-100">
            Signout
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
