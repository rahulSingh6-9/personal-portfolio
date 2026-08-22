import "./components.css";
import "../pages/image/14672844.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const ProjectCardItem = ({ image, title, description, tech , open_btn }) => {
  return (
    <motion.div className="project-card" variants={itemVariants}>
      {/* Image */}
      <div className="project-img">
        <img src={image} alt={title} />
        <span className="project-tag">Portfolio</span>
      </div>

      {/* Info */}
      <div className="project-info">
        <h1>{title}</h1>

        <p className="project-desc">{description}</p>

        {tech && (
          <div className="project-tech">
            {tech.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        )}

        <Link to={open_btn}>
          <button className="project-btn">View Project</button>
        </Link>
      </div>
    </motion.div>
  );
};
const ProjectCard = ({ data }) => {
  return (
    <>
      <motion.div 
        className="project-card-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {data.map((item, index) => (
          <ProjectCardItem
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            tech = {item.tech}
            open_btn={item.open_btn}
          />
        ))}
      </motion.div>
    </>
  );
};

export default ProjectCard;