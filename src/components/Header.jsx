import { BrowserRouter, Link } from "react-router-dom";
import ToggleBar from "./Togglebar";
import "./components.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import profilephoto from "../pages/image/rahul Image2.jpeg";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = ({ mobileMode, setMobileMode }) => {

  // Load last active tab from localStorage
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "about"
  );

  // Save active tab into localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  //Mobile Function     
  const toggleMobile = () => {
    setMobileMode(!mobileMode)
  }

  const turnOffMobile = () => {
    setMobileMode(false);
  }

  return (
    <>
      <motion.header 
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <IoChevronBackCircleOutline className="back-btn" onClick={() => { window.history.back() }} />
        <div className="header-logo">
          <img className="header-image" src="https://res.cloudinary.com/djgizjh2y/image/upload/v1787329961/rahul_Image4_ovvore.jpg" alt="Logo" />
          <p className="header-name">Rahul Singh</p>
        </div>
        <div className="header-icon-div">
          <HiOutlineComputerDesktop onClick={turnOffMobile} className="phone-icon" />
          <CiMobile3 className="mobileBtn phone-icon" onClick={toggleMobile} />
        </div>

        <div className="header-list-div">
          <ul className="header-list">
            <li>
              <Link to="/" className={`nav-item ${activeTab === "about" ? "active" : ""}`}
                onClick={() => setActiveTab("about")}>about</Link>
            </li>
            <li>
              <Link to="/resume" className={`nav-item ${activeTab === "resume" ? "active" : ""}`}
                onClick={() => setActiveTab("resume")}>resume</Link>
            </li>
            <li>
              <Link to="/project" className={`nav-item ${activeTab === "project" ? "active" : ""}`}
                onClick={() => setActiveTab("project")}>project</Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-item ${activeTab === "contact" ? "active" : ""}`}
                onClick={() => setActiveTab("contact")}>contact</Link>
            </li>
          </ul>
        </div>
        <ToggleBar />
      </motion.header>
    </>
  )
};

export default Header;   