// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom"; // Link is method that takes the page to the route without fully reload the page
import NavbarComponent from "./navbarComponent";
import { useState } from "react";

export default function NavBar() {
  const [select, setSelect] = useState("");

  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <NavbarComponent
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link text-light" to="/portfolio">
          Profolio
        </Link>,
        <Link key={3} className="nav-link text-light" to="/contact-me">
          Contact Me
        </Link>,
        <Link key={4} className="nav-link text-light" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}

// key is required for JSX .map.
// for each {links.map((link) => link)}
