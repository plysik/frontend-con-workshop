import React from "react";
import { Form, WindowMeasure, Header, Footer } from "./components";
import "./App.css";
import { UserManager } from "./managers";
import Toggle from "./components/Toggle";

const App = () => {
  return (
    <UserManager>
      <Header />
      <div className="App">
        <Toggle />
        <WindowMeasure />
        <Form />
      </div>
      <Footer />
    </UserManager>
  );
};

export default App;
