import React from "react";
import {
  Form,
  WindowMeasure,
  Header,
  Footer,
  Toggle,
  Select,
  Option
} from "./components";
import "./App.css";
import { UserManager } from "./managers";

const App = () => {
  return (
    <React.Fragment>
      <div>
        <UserManager>
          <Header />
          <div className="App">
            <Select>
              <Option value="apple">
                <span>Apple</span>
              </Option>
              <Option value="pear">
                <span>Pear</span>
              </Option>
              <Option value="grapes">
                <span>Grapes</span>
              </Option>
            </Select>
            <Toggle />
            <WindowMeasure />
            <Form />
          </div>
          <Footer />
        </UserManager>
      </div>
    </React.Fragment>
  );
};

export default App;
