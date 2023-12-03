import React, { createContext, useContext } from "react";
import useAuth from "../hooks/useAuth";

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);
const UserProvider = ({ children }) => {
  const value = useAuth();
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
