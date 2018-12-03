import React from "react";
import { Counter, Form, WindowMeasure, Header, Footer } from "./components";
import { useToggle } from "./hooks";
import "./App.css";
import UserManager from "./managers/UserManager";

const App = () => {
  const toggle = useToggle(true);

  return (
    <UserManager>
      <Header />
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
      <Footer />
    </UserManager>
  );
};

export default App;
