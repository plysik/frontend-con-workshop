import React, { useState } from "react";

export const UserContext = React.createContext({});

export default function UserManager({ children }) {
  const [user, setUser] = useState({
    name: "John",
    surname: "Lemon"
  });
  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
