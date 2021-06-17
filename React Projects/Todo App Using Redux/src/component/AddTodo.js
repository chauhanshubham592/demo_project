import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button, Alert } from "react-bootstrap";

function AddTodo(props) {
  const [error, setError] = useState("");
  const handelAdd = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      props.addItem(e.target[0].value);
      e.target[0].value = "";
    } else {
      setError("Please Add An Item");
      setTimeout(() => {
        setError("");
      }, 1500);
    }
  };
  return (
    <div className="add_todo container shadow-lg p-4 text-white">
      <Form onSubmit={handelAdd}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Enter Todo</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Todo..." />
        </Form.Group>
        <Button variant="danger" type="submit" className="px-5">
          ADD TODO
        </Button>
      </Form>
      {error && (
        <Alert variant="danger" className="pl-2 my-4">
          {error}
        </Alert>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (val) => dispatch({ type: "ADD_ITEM", payload: val }),
});
export default connect(null, mapDispatchToProps)(AddTodo);
