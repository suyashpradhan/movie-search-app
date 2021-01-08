import React from "react";

function List({ listTodo }) {
  return (
    <div>
      {listTodo.map((item) => {
        return (
          <div key={item} className="alert alert-warning">
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default List;
