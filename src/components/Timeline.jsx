import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./components.css";

const Timelineitems = ({ image, alt, date, post, company, location, list = [], index }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isEven = index % 2 === 1; // 0-indexed, so 1 is even child visually (nth-child(even))

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? 0 : (isEven ? 30 : -30), 
      y: isMobile ? 30 : 0 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <motion.div 
      className="timeline-item"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img className="timeline-image" src={image} alt={alt} />
      <div className="textbox">
        <small>{date}</small>
        <h5 className="highlight">{post}</h5>
        <p><span>company: </span>{company}</p>
        <p><span>location: </span>{location}</p>
        <ul className="experience-list">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Timeline = ({ data }) => {
  return (
    <div className="timeline">
      {data.map((item, index) => (
        <Timelineitems
          key={index}
          index={index}
          image={item.image}
          alt={item.alt}
          post={item.post}
          date={item.date}
          location={item.location}
          company={item.company}
          list={item.list}
        />
      ))}
    </div>
  );
};

export default Timeline;