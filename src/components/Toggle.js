import React from "react";
import { useToggle } from "../hooks";
import Counter from "./Counter";

export default function Toggle() {
  const toggle = useToggle(true);
  return (
    <div className="toggle">
      <button onClick={toggle.inverse}>
        {!toggle.value ? "Show" : "Hide"} counter
      </button>
      {toggle.value && <Counter />}
    </div>
  );
}
