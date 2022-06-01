import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [steps, showSteps] = useState(
    Number(JSON.parse(localStorage.getItem("step"))) || 0
  );

  useEffect(() => {
    localStorage.setItem("step", steps);
  }, [steps]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world, I am Rakib</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="increase">
          <strong>Steps : {steps}</strong> <br />
          <button onClick={() => showSteps(steps + 1)}>Walk</button>
        </div>
      </header>
    </div>
  );
}

export default App;
