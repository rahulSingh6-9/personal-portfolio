import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
import { AiOutlineProject } from "react-icons/ai";
import { PiReadCvLogoBold } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";




const ToggleBar = () => (
  <>

    {/* 🔹 Navigation Menu */}

   <label>
    <input className="toggle-input" type="checkbox" />
    
    


    <div className="slide">
      <div className="toggle">
      
      <span className="top_line common"></span>
      <span className="middle_line common"></span>
      <span className="bottom_line common"></span>
    </div>
      <ul>
        {/* ✅ Use <Link> instead of <a> */}
        <li><Link to="/">
         <IoMdHome className="slide-icon"/>
          <h4>About Me</h4></Link></li>
        <li><Link to="/resume">
         <PiReadCvLogoFill className="slide-icon" />
          <h4>resume</h4></Link></li>
        <li><Link to="/project">
          <IoMdContact className="slide-icon" />

          <h4>projects</h4></Link></li>
        <li><Link to="/contact">
          <IoMdContact className="slide-icon"/>
          <h4>contact</h4></Link></li>
      </ul>
    </div>
   </label>

  </>
);

export default ToggleBar;
