import React, { useContext } from "react";
import { useInput } from "../hooks";
import { UserContext } from "../managers/UserManager";

export default function Form() {
  const name = useInput("");
  const surname = useInput("");
  const { setUser } = useContext(UserContext);
  const submitForm = e => {
    e.preventDefault();
    let user = { name: name.value, surname: surname.value };
    setUser(user);
  };
  return (
    <div>
      <h2>Form solution</h2>
      <p>
        <input type="text" {...name} />
      </p>
      <p>
        <input type="text" {...surname} />
      </p>
      <p>
        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </p>
    </div>
  );
}
