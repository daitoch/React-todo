import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

const App = () => (
  <div className="App">
    <header>
      <h1>Hello react</h1>
    </header>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
