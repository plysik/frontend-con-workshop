import React from "react";
import { useNumber } from "../hooks";
const Counter = () => {
  let [counter, increase, decrease] = useNumber(0);
  return (
    <React.Fragment>
      <h2>Counter solution</h2>
      <p>You have clicked {counter} times</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </React.Fragment>
  );
};
export default Counter;
