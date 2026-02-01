import React from 'react'
import "../App.css";
import Second_sec from '../components/Second_sec'
import profilephoto from "./image/14672844.jpg";
import ProjectCard from '../components/ProjectCard';


const ProjectCardData = [
  {
    title: "Portfolio Website",
    image: profilephoto,
    description:
      "A responsive portfolio website built with HTML, CSS & JavaScript, featuring smooth scrolling and modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    open_btn: "/project/portfolio",
  },
  
];
const Project = () => {
  return (
    <>
      <section className='section'>
        <div className='card-div'>
          <h1 className='resume-name'>Project</h1>
          <div className='project-para-div'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus consectetur nihil dolorem commodi magnam eum debitis ex sequi corporis laboriosam
            ea ratione distinctio, optio iste repudiandae eaque, quibusdam, nobis possimus.</div>

          <div className='card proj'>
            <div className='project-div'>
              <ProjectCard data={ProjectCardData} />
            </div>
          </div>
        </div>
      </section>
      <Second_sec />
    </>
  )
}

export default Project