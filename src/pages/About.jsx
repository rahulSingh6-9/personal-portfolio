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
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.15 }
  }
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const imageScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const introVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const About = () => {
  return (
    <>
      <section className="sec-first">
        <div className="card-div about-div">
          <motion.div 
            className="card"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <motion.div className="img-div" variants={imageScale}>
              <img className="profile-img" src="https://res.cloudinary.com/djgizjh2y/image/upload/v1787329961/rahul_Image4_ovvore.jpg" alt="Profile Photo" />
              <div className="circle"></div>
            </motion.div>
            
            <motion.div className="name-div" variants={itemFadeUp}>
              <h2 className="name">Rahul</h2>
              <h2 className="name">Singh</h2>
            </motion.div>

            <motion.div className="btn btn-Mobile" variants={itemFadeUp}>
              <Link to="/resume"><button className="button resume-btn">Resume</button></Link>
              <Link to="/project"> <button className="button projects-btn">Project</button></Link>
            </motion.div>
            
            <motion.div className="icons" variants={itemFadeUp}>
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
            </motion.div>
          </motion.div>

          <motion.div 
            className="intro"
            initial="hidden"
            animate="visible"
            variants={introVariants}
          >
            <motion.h2 variants={itemFadeUp}>hello</motion.h2>
            <motion.p className="About-para fire-textt" variants={itemFadeUp}>
              <ReactTyped
                strings={["Here's who I am &amp; what I do"]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={1500}
                loop={true}
                showCursor={true}
                cursorChar="|"
              />
            </motion.p>

            <motion.div className="btn btn-pc" variants={itemFadeUp}>
              <Link to="/resume"><button className="button resume-btn">Resume</button></Link>
              <Link to="/project"><button className="button projects-btn">Project</button></Link>
            </motion.div>
            
            <motion.p className='About-para' variants={itemFadeUp}>Hi, I’m <span className='blue-gloww'>{import.meta.env.Name}</span> — a web developer currently pursuing a <span className='blue-gloww'>Bachelor’s in Computer Applications (BCA)</span>. I’m passionate about building modern, responsive, and user-friendly websites while learning new technologies every day to strengthen my development skills.</motion.p>
            <motion.p className='About-para' variants={itemFadeUp}>I’m currently exploring Node.js, Express, and databases, with a strong focus on writing clean, maintainable code and building scalable full-stack applications <span className='blue-gloww'>using HTML, CSS, JavaScript, React, Node.js, MySQL, MongoDB, Git and Docker</span>, while working toward a stable and growth-oriented role as a full-stack developer.</motion.p>
          </motion.div>
        </div>
      </section>
      <Second_sec />
    </>
  )
}

export default About