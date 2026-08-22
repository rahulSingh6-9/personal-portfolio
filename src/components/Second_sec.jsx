import React from 'react';

//icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { motion } from "framer-motion";

import "./components.css";

const Second_sec = () => {
  return (
    <>
      <motion.section 
        className="sec-second"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <div class="info-div">
          <div class="info">
            <MdCall className="call-icon" />
            <a href="tel:+919001685064">9001685064</a>
          </div>
          <div class="info">
            <MdMarkEmailRead className='call-icon' />
            <a href="mailto:rahulsingh85064@gmail.com">rahulsingh85064@gmail.com</a>
          </div>
        </div>
        <div class="follow-div">
          <h2>follow</h2>
          <div class="icons-two">
            <a href="https://www.linkedin.com/in/rahul-singh-b47257326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/rahulSingh6-9" target="_blank">
              <FaGithub />
            </a>
            <a href='https://wa.me/+919001685064'>
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/rj.heres/profilecard/?igsh=NTVyMDY3dWtzdTB6" target="_blank">
              <FaInstagram />
            </a>
            
          </div>
        </div>
        <div class="last-div">
          <p> © 2025 RJ Brand — All Rights Reserved</p>
        </div>
      </motion.section>
    </>
  )
}

export default Second_sec