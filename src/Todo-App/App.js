import React, { useState } from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import "../style.css";

//Main Component
let App = () => {
  let [input, setInput] = useState();
  let [todo, setTodo] = useState([]);

  let clickHandler = () => {
    setTodo((prevState) => [...prevState, input]);
  };

  function removeTodo(id) {
    setTodo((prevData) => {
      return prevData.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container mt-4">
      <Card>
        <Card.Body>
          <Card.Title className="h1 text-center">Todo List</Card.Title>

          <Form.Group>
            <Form.Label>Add a todo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buy Bread"
              onChange={(event) => setInput(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={clickHandler}>
            Submit
          </Button>
        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title className="text-center ">Remaining Todos</Card.Title>
          <hr />
          {todo.map((item, index) => {
            return (
              <Alert
                key={index}
                id={index}
                item={item}
                variant="primary"
                onClick={removeTodo}
              >
                {item}
              </Alert>
            );
          })}
        </Card.Body>
      </Card>

      {console.log(todo)}
    </div>
  );
};

export default App;
