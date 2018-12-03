import React from "react";
import { useInput } from "../hooks";

export default function Form() {
  const email = useInput("");
  const password = useInput("");
  return (
    <div>
      <h2>Form solution</h2>
      <p>
        <input type="text" {...email} />
      </p>
      <p>
        <input type="password" {...password} />
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </div>
  );
}
