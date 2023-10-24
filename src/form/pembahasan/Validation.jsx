import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Validator from "validatorjs";

function Validation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email :", email);
    console.log("Password :", password);

    let data = {
      email,
      password,
    }

    let rules = {
      email: "required|email",
      password: "min:8|required",
    }

    let validation = new Validator(data, rules);
    validation.errors.first("email")
    validation.errors.first("password")

  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address :</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>
      <br />

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password :</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>
      <br />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Validation;
