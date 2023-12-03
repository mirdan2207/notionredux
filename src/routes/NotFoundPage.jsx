import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../components/UserProvider";

const NotFoundPage = () => {
  const { user } = useUserContext();

  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="text-3xl">
        <h2 className="font-bold">Not found</h2>
        {user ? (
          <p>
            <Link to="/">Go to Home</Link>{" "}
          </p>
        ) : (
          <p>
            <Link to="/login">Go to Login</Link>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default NotFoundPage;