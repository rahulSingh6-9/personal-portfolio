import React from 'react';

//icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";

import "./components.css";

const Second_sec = () => {
  return (
    <>
      <section class="sec-second">
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
            <a href="" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/rj.heres/profilecard/?igsh=NTVyMDY3dWtzdTB6" target="_blank">
              <FaInstagram />
            </a>
            <a href="#" target="_blank">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div class="last-div">
          <p> © 2025 RJ Brand — All Rights Reserved</p>
        </div>
      </section>
    </>
  )
}

export default Second_sec