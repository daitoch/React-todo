import React from "react";

const Todo = ({ todos }) => (
  <div className="todo-container">
    <ul className="todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <li key={todo.id} className="todo-item">
            {todo.text}
          </li>
          <button className="complete-btn">
            <i className="fas fa-check"></i>
          </button>
          <button className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </ul>
  </div>
);

export default Todo;
