import "./components.css";
import "../pages/image/14672844.jpg";
import { Link } from "react-router-dom";


const ProjectCardItem = ({ image, title, description, tech , open_btn }) => {
  return (
    <div className="project-card">
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
    </div>
  );
};
const ProjectCard = ({ data }) => {
  return (
    <>
      <div className="project-card-container">
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
      </div>
    </>
  );
};

export default ProjectCard;