import React, { useContext } from "react";
import { UserContext } from "../managers/UserManager";

export default function Header() {
  const { user } = useContext(UserContext);
  if (!user.name || !user.surname) {
    return <div>No user :( </div>;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Header</h2>
      <p>{`User name is ${user.name}`}</p>
    </div>
  );
}
