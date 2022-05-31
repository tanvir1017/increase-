import * as React from "react";

function Counter() {
  const [steps, showSteps] = React.useState(
    Number(JSON.parse(localStorage.getItem("step"))) || 0
  );

  React.useEffect(() => {
    localStorage.setItem("step", steps);
  }, [steps]);
  return (
    <div>
      <strong>Steps : {steps}</strong> <br />
      <br />
      <button onClick={() => showSteps(steps + 1)}>Walk</button>{" "}
      <button
        onClick={() => (steps <= 0 ? showSteps(0) : showSteps(steps - 1))}
      >
        Decrement
      </button>
      <br /> <br />
      <button onClick={() => showSteps(0) && localStorage.removeItem("step")}>
        Clear the interval
      </button>
    </div>
  );
}

export default Counter;
