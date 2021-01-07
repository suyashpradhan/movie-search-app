import React from "react";

function List(props) {
  return (
    <div>
      {props.todo.map((itemObj) => {
        return (
          <div key={itemObj.key} className="alert alert-warning">
            {itemObj.input}
          </div>
        );
      })}
    </div>
  );
}

export default List;
