import "../App.css";
import Second_sec from '../components/Second_sec'
import contact_img from "./image/contactproject.png";
import SPS_img from "./image/SPSgame.png"
import ProjectCard from '../components/ProjectCard';


const ProjectCardData = [
  {
    title: "Contact Management System",
    image: contact_img,
    description:
      "A full-stack contact management system with admin panel, contact form, email notifications, and database integration. Built using Node.js, Express, and SQL.",
    tech: ["Nodejs", "Express", "SQL", "HTML", "CSS", "JavaScript"],
    open_btn: "https://contact-management-system-app.up.railway.app/",
  },
  {
    title: "Rock Paper Scissors",
    image: SPS_img,
    description:
      "Rock Paper Scissors Game built using HTML, CSS, and JavaScript featuring a modern UI, responsive design, real-time score tracking, and interactive gameplay against a computer opponent.",
    tech: ["HTML", "CSS", "JavaScript"],
    open_btn: "https://rock-paper-scissors-gamesite.netlify.app/",
  }
  
];
const Project = () => {
  return (
    <>
      <section className='section'>
        <div className='card-div'>
          <h1 className='resume-name'>Project</h1>

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