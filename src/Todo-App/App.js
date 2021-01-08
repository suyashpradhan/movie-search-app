import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import List from "./List";
import "../style.css";

//Main Component
let App = () => {
  let [input, setInput] = useState("");
  let [todo, setTodo] = useState([]);

  let todoHandler = (e) => {
    setInput(e.target.value);
  };

  let todoButtonHandler = () => {
    setTodo([...todo, input]);
    setInput("");
  };

  return (
    <div className="container mt-4">
      <Card>
        <Card.Body>
          <Card.Title className="h1 text-center">Todo List</Card.Title>
          <Form.Group>
            <Form.Label>Add a todo</Form.Label>
            <Form.Control
              value={input}
              onChange={todoHandler}
              type="text"
              placeholder="Buy Bread"
            />
          </Form.Group>
          <Button variant="primary" onClick={todoButtonHandler}>
            Submit
          </Button>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Body>{<List listTodo={todo} />}</Card.Body>
      </Card>
    </div>
  );
};

export default App;
