import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-brand">Note App</div>
      <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
