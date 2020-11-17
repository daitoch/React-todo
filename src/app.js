import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Form from "./components/form";
import Todo from "./components/todo";

const App = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>React Todo</h1>
      </header>
      <Form setState={setInputText} />
      <Todo text={inputText} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
