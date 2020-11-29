import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Form from "./components/form";
import Todo from "./components/todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilters(todos.filter((todos) => todos.complete));
        break;
      case "uncompleted":
        setFilters(todos.filter((todos) => !todos.complete));
        break;
      default:
        setFilters(todos);
        break;
    }
  }, [status, todos]);

  return (
    <div className="App">
      <header>
        <h1>React Todo</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <Todo todos={todos} setTodos={setTodos} filters={filters} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
