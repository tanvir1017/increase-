import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [steps, showSteps] = useState(
    Number(JSON.parse(localStorage.getItem("step"))) || 0
  );
  const handleRemoveFromLocalStorage = () => {
    localStorage.removeItem("step");
    showSteps(0);
  };
  useEffect(() => {
    localStorage.setItem("step", steps);
  }, [steps]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="increase">
          <br />
          <strong>Steps : {steps}</strong> <br />
          <br />
          <button onClick={() => showSteps(steps + 1)}>Walk</button>{" "}
          <button onClick={() => showSteps(steps - 1)}>Decrement</button>
          <br /> <br />
          <button onClick={handleRemoveFromLocalStorage}>
            Clear the interval
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
