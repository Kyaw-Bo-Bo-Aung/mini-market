import React, { useState } from "react";

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [users, setUsers] = useState(null);
  
  const handleUsers = users => {
    setUsers(users);
  }

  return <UserContext.Provider value={{ users, handleUsers }}>{props.children}</UserContext.Provider>;
};

export default UserProvider;
