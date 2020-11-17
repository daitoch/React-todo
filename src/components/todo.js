import React from "react";

const Todo = ({ todos, setTodos }) => {
  const deleteHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id + Math.random() + 10} className="todo">
            <li key={todo.id} className="todo-item">
              {todo.text}
            </li>
            <button key={todo.id + Math.random() + 10} className="complete-btn">
              <i className="fas fa-check"></i>
            </button>
            <button
              key={todo.id + Math.random() + 10}
              onClick={() => deleteHandler(todo.id)}
              className="trash-btn"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
