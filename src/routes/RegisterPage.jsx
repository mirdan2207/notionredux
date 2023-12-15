import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useUserContext } from "../components/UserProvider";
import { User } from "../schemas/user";
import { z } from "zod";
import { registerUserAction, setRegisterError } from "../redux/action";

const RegisterSchema = User.and(
  z.object({ repeatPassword: z.string() })
).refine((data) => data.password === data.repeatPassword, {
  message: "Passwords should match",
  path: ["repeatPassword"],
});

const RegisterPage = ({ signup, user, registerError, setRegisterError }) => {
  // const { signup, user } = useUserContext();
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);
  const handleRegister = () => {
    const user = {
      email,
      password,
      repeatPassword,
    };

    const result = RegisterSchema.safeParse(user);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    signup(email, password)
      .then((newUser) => {
        store.dispatch(registerUserAction(newUser));
        localStorage.setItem(USER_KEY, JSON.stringify(newUser));
      })
      .catch((error) => {
        setRegisterError(error.message);
        localStorage.removeItem(USER_KEY);
      });
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="py-4">
      <h2 className="text-2xl text-center">Register Page</h2>
      <div className="max-w-xs mx-auto flex flex-col gap-2">
        {!!errors["email"] && <p className="text-red-500">{errors["email"]}</p>}
        <input
          type="email"
          className="border border-gray-300 py-1 px-2 rounded-md"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        {!!errors["password"] && (
          <p className="text-red-500">{errors["password"]}</p>
        )}
        <input
          type="password"
          className="border border-gray-300 py-1 px-2 rounded-md"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        {!!errors["repeatPassword"] && (
          <p className="text-red-500">{errors["repeatPassword"]}</p>
        )}
        <input
          type="password"
          className="border border-gray-300 py-1 px-2 rounded-md"
          value={repeatPassword}
          placeholder="Repeat password"
          onChange={handleRepeatPasswordChange}
        />
        <button
          className="bg-slate-400 py-1 px-2 rounded-md text-white"
          onClick={handleRegister}
        >
          Register
        </button>
        <p className="text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  registerError: state.registerError,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (email, password) => {
    dispatch(setRegisterError(null));
    return dispatch(signup(email, password));
  },
  setRegisterError: (error) => dispatch(setRegisterError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
