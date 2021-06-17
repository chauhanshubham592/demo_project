import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";

function LogIn(props) {
  const [error, setError] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    let obj = {};
    Array(3)
      .fill("")
      .forEach((_, i) => {
        obj[e.target[i].name] = e.target[i].value;
      });
    let value = Object.values(obj);
    let err = false;
    value.forEach((item) => {
      if (item == "") {
        setError("Please Fill In All The Fields !!!!!");
        err = true;
        setTimeout(() => {
          setError("");
        }, 1000);
      }
    });
    if (!err) {
      console.log("succes");
      props.addInfo(obj);
      props.isLogged(true);
    }
  };

  return (
    <div className="mylogin container shadow-lg text-white p-4 ">
      <p className="text-white text-success font-weight-bold ">
        Please Sign Up In To Add Todo
      </p>
      <div>
        <Form onSubmit={handelSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name..." />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Your Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email..."
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter Your Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password..."
            />
          </Form.Group>
          {error && (
            <Alert variant="danger" className="pl-2 my-4">
              {error}
            </Alert>
          )}
          <Button variant="danger" type="submit" className="px-5">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  isLogged: (val) => dispatch({ type: "LOGGED_IN", payload: val }),
  addInfo: (val) => dispatch({ type: "ADD_INFO", payload: val }),
});
export default connect(null, mapDispatchToProps)(LogIn);
