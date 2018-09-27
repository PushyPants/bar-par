import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }>
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/addemp"
        className={
          window.location.pathname === "/addemp" ? "nav-link active" : "nav-link"
        }>
        Add Employee
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/addavail"
        className={
          window.location.pathname === "/addavail" ? "nav-link active" : "nav-link"
        }>
        Add Availability
      </Link>
    </li>
  </ul>
);

export default Nav;
