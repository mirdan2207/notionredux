import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useUserContext } from "./UserProvider";
import { connect } from "react-redux";
import { logoutUser } from "../redux/action";

const Layout = ({ user, signout }) => {
  // const { user, signout } = useUserContext();
  return (
    <>
      <header className="container flex gap-2 mx-auto py-1 px-2">
        <h1>Hello, {user?.email}</h1>
        <nav className="ml-auto flex gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-500"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/notes"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-500"
            }
          >
            Notes
          </NavLink>
            <p className="cursor-pointer" onClick={signout}>
              Logout
            </p>
        </nav>
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
