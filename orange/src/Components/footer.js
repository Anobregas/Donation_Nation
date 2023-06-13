import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="footer">
      <nav className="footer_nav-bar" id="home">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/createCharity">Create Charity</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <p className="footer_tag">© 2023 Design and Built by Seal Team 6</p>
    </div>
  );
}
