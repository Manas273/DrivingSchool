'use client'

import React, { useState } from "react";
import "@/styles/navbar.css"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a href="/" className="title">
        New Truckers Driving Academy
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>       
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/courses">Courses</a>
        </li>
        <li>
          <a href="/testimonial">Testimonial</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>      
      </ul>
    </nav>
  );
};

export default Navbar