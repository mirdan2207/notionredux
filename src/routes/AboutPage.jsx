import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../components/UserProvider";

const AboutPage = () => {
  const { user } = useUserContext();
  return (
    <div className="flex flex-col gap-3 px-2">
      <h2 className="font-bold text-2xl">Hello, {user.email}</h2>
      <p>Account created at: {new Date(user.createdAt).toLocaleDateString()} </p>
      <Link to="/notes" className="border-2 py-1 px-2 text-xl">Check notes</Link>
    </div>
  );
};

export default AboutPage;
