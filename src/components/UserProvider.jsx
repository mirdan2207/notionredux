import React, { createContext, useContext } from "react";
import useAuth from "../hooks/useAuth";
import store from "../redux/store";

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);
const UserProvider = ({ children }) => {
  const value = useAuth();
  React.useEffect(() => {
    if (value.user) {
      store.dispatch({ type: "LOGIN_USER", payload: value.user });
    }
  }, [value.user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
