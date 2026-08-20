import Second_sec from '../components/Second_sec';
import { Link } from "react-router-dom";
import profilephoto from "./image/rahul Image2.jpeg";
import "../App.css";

//icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { ReactTyped } from "react-typed";



const About = () => {
  return (
    <>
      <section class="sec-first">
        {/* <div class="profession-div">
              <h2 class="sec-name">{import.meta.env.Name}</h2>
              <p class="sec-profession">Wep Developer</p>
            </div> */}

        <div class="card-div about-div">
          <div class="card">

            <div class="img-div">
              <img class="profile-img" src={profilephoto} alt="Profile Photo" />


              <div class="circle"></div>
            </div>
            <div class="name-div">
              <h2 class="name">Rahul</h2>
              <h2 class="name">Singh</h2>
            </div>

            <div class="btn btn-Mobile">

              <Link to="/resume"><button class="button resume-btn">Resume</button></Link>


              <Link to="/project"> <button class="button projects-btn">Project</button></Link>

            </div>
            <div class="icons">
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

          <div class="intro">
            <h2>hello</h2>
            <p className="About-para fire-textt">
              <ReactTyped
                strings={["Here's who I am &amp; what I do"]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={1500}   // wait before deleting
                loop={true}        // 🔥 important
                showCursor={true}
                cursorChar="|"
              />
            </p>

            <div class="btn btn-pc">
              <Link to="/resume"><button class="button resume-btn">Resume</button></Link>

              <Link to="/project"><button class="button projects-btn">Project</button></Link>
            </div>
            <p className='About-para'>Hi, I’m <span className='blue-gloww'>{import.meta.env.Name}</span> — a web developer currently pursuing a <span className='blue-gloww'>Bachelor’s in Computer Applications (BCA)</span>. I’m passionate about building modern, responsive, and user-friendly websites while learning new technologies every day to strengthen my development skills.</p>
            <p className='About-para'>I’m currently exploring Node.js, Express, and databases, with a strong focus on writing clean, maintainable code and building scalable full-stack applications <span className='blue-gloww'>using HTML, CSS, JavaScript, React, Node.js, MySQL, and Git</span>, while working toward a stable and growth-oriented role as a full-stack developer.</p>

          </div>
        </div>
      </section>
      <Second_sec />

    </>
  )
}

export default About