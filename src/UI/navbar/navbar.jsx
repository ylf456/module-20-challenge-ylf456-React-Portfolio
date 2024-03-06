// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom"; // Link is method that takes the page to the route without fully reload the page
import NavbarComponent from "./navbarComponent";
import { useState } from "react";
import "./index.css";

export default function NavBar() {
  const [currentPage, setCurrentPage] = useState('/');
 
  
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <NavbarComponent
      links={[
        <Link key={1} onClick={()=> setCurrentPage('/')} className={currentPage === `/` ? 'nav-link text-light selected' : 'nav-link text-light'} to="/">
          About Me
        </Link>,
        <Link key={2} onClick={()=> setCurrentPage('/portfolio')} className={currentPage === `/portfolio` ? 'nav-link text-light selected' : 'nav-link text-light'}  to="/portfolio">
          Profolio
        </Link>,
        <Link key={3} onClick={()=> setCurrentPage('/contact-me')} className={currentPage === `/contact-me` ? 'nav-link text-light selected' : 'nav-link text-light'}  to="/contact-me">
          Contact Me
        </Link>,
        <Link key={4} onClick={()=> setCurrentPage('/resume')} className={currentPage === `/resume` ? 'nav-link text-light selected' : 'nav-link text-light'}  to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}

// key is required for JSX .map.
// for each {links.map((link) => link)}
