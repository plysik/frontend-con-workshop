import React from "react";
import { Counter, Form, WindowMeasure } from "./components";
import { useToggle } from "./hooks";
import "./App.css";

const App = () => {
  const toggle = useToggle(true);

  return (
    <div className="App">
      <div>
        <button onClick={toggle.inverse}>
          {!toggle.value ? "Show" : "Hide"} counter
        </button>
        {toggle.value && <Counter />}
      </div>
      <WindowMeasure />
      <Form />
    </div>
  );
};

export default App;
