import React from "react";

const Todo = ({ todo, removeTodo, competeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => competeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          Apagar
        </button>
      </div>
    </div>
  );
};

export default Todo;
