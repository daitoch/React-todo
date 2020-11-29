import React, { useState } from "react";

const Form = ({ todos, setTodos, status, setStatus }) => {
  const [inputText, setInputText] = useState("");
  const inputSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        id: Math.random() * 1000,
        complete: false,
      },
    ]);
    setInputText("");
  };
  return (
    <form>
      <input
        type="text"
        value={inputText}
        className="todo-input"
        onChange={(e) => setInputText(e.target.value)}
        onBlur={(e) => setInputText(e.target.value)}
      />
      <button
        className="todo-button"
        type="submit"
        onClick={inputSubmitHandler}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
