import React from "react";
import "./Nav.scss";

import { NavLink, Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav>
      <Link to="/login" onClick={() => localStorage.removeItem("token")}>
        Logout
      </Link>
      <NavLink to="/friends">Friends</NavLink>
      <NavLink to="/make_new_friends">Add Friend</NavLink>
    </nav>
  );
};

export default Nav;
