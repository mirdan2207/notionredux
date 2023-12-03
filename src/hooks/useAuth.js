import { useCallback, useMemo, useState } from "react";
import { loginUser, registerUser } from "../api/user";

const USER_KEY = "user";

export default function useAuth() {
  const [user, setUser] = useState(() => {
    const userString = localStorage.getItem(USER_KEY);
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  });

  const signin = useCallback(
    (email, password) =>
      loginUser(email, password)
        .then((newUser) => {
          setUser(newUser);
          localStorage.setItem(USER_KEY, JSON.stringify(newUser));
        })
        .catch(() => {
          setUser(null);
          localStorage.removeItem(USER_KEY);
        }),
    []
  );

  const signout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
  }, []);

  const signup = useCallback(
    (email, password) =>
      registerUser(email, password)
        .then((newUser) => {
          setUser(newUser);
          localStorage.setItem(USER_KEY, JSON.stringify(newUser));
        })
        .catch(() => {
          setUser(null);
          localStorage.removeItem(USER_KEY);
        }),
    []
  );

  const value = useMemo(
    () => ({
      user,
      signin,
      signout,
      signup,
    }),
    [signin, signout, signup, user]
  );

  return value;
}
