import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";

const ToggleBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <div
        className={`menu-btn ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        <h2>My Portfolio</h2>

        <Link to="/" onClick={() => setOpen(false)}>
          🧑‍💻 About Me
        </Link>

        <Link to="/resume" onClick={() => setOpen(false)}>
          📄 Resume
        </Link>

        <Link to="/project" onClick={() => setOpen(false)}>
          🚀 Projects
        </Link>

        <Link to="/contact" onClick={() => setOpen(false)}>
          📬 Contact
        </Link>
      </div>
    </>
  );
};

export default ToggleBar;
