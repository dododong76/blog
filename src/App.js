import react, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [a, b] = useState(["김동은", "김승민"]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{a[0]} 이에요</p>
        <p>안녕하세요!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a>
        <h2>
          열심히 노력합시다. 또 노력합시다.
        </h2>


      </header>
    </div>
  );

}

export default App;
