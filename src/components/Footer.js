import React, { useContext } from "react";
import { UserContext } from "../managers";

export default function Footer() {
  const { user } = useContext(UserContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Footer</h2>
      <p>{`User surname is ${user.surname}`}</p>
    </div>
  );
}
