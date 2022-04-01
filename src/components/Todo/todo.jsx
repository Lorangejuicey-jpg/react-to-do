import React from "react";
import "./Todo.css";

const todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button class="complete-button" onClick={() => completeTodo(index)}>
          ✓
        </button>
        <button class="delete-button" onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </div>
  );
};

export default todo;
