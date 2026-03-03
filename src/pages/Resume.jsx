import "../App.css";
import wingsflyimg from "./image/wingsfly.jpeg";

import highschool from "../assets/vecteezy_school_1200587.png";
import coding from "../assets/lcd-icon-vector.jpg";
import Second_sec from '../components/Second_sec';
import Timeline from '../components/Timeline';
import SkillBar from '../components/SkillBar';
import CV from './image/RahulSingh.pdf'
import { MdOutlineDownloading } from "react-icons/md";




// ExperienceData array
const ExperienceData = [
  {
    image: wingsflyimg,
    alt: "img1",
    date: "sept 2025 - present",
    post: "web developer & technical supporter",
    company: "wingSFLY",
    location: "rajasthan",
    list: [
      "Built responsive UI using HTML, CSS & JavaScript",
      "Worked on React components & hooks",
      "Improved page performance by 30%"
    ]
  },
  {
   
    alt: "img1",
    date: "switch.. ",

  },
];

// EducationData

const EducationData = [
  {
    image: highschool,
    alt: "Image",
    qualification: "high school",
    institute: "central public school",
    year: "2022 - 2023",
    class1: "11th",
    percentage1: "Percentage: 65%",
    class2: "12th",
    percentage2: "Percentage: 76.6%",
    location: "kota, rajasthan",
  },
  {
    image: coding,
    alt: "Image",
    qualification: "bachelor of computer application",
    institute: "modi institute of management & technology",
    year: "2024 - 2025",
    class1: "Semester 1",
    percentage1: "CGPA: 8.8",
    class2: "Semester 2",
    percentage2: "CGPA: 8.3",
    location: "kota, rajasthan",
  }

]

// SkillBarData 
const SkillBarData = [
  {
    name: "HTML, CSS, JS",
    width: "75%",
  },
  {
    name: "react",
    width: "60%",
  },
  {
    name: "NodeJS & Express",
    width: "65%"
  },
  {
    name: "SQL",
    width: "50%",
  },
  {
    name: "c programming",
    width: "75%",
  },
];

const Resume = () => {
  return (
    <>
      <section className="section">
        <div className='card-div'>
          <h1 className='resume-name'>resume</h1>
          <div className="cv-wrapper">
            <a href={CV} download className="download-cv">
             <MdOutlineDownloading className='downloadIcon' />
              Download CV
            </a>
          </div>


          <div className="card experience">
            <div className='heading-div'><h3>experience</h3></div>
            <Timeline data={ExperienceData} />

          </div>
          <div className="card education">
            <div className='heading-div'><h3>qualification</h3></div>
            <div className='education-timeline'>
              {EducationData.map((item, index) => (
                <div className='education-box-div' key={index}>
                  <div className='education-year-div'>
                    <small>{item.year}</small>
                    <h2 className='#'>{item.qualification}</h2>
                  </div>

                  <div className='education-box'>
                    <img src={item.image} alt={item.alt} />
                    <div className='institute-div'> <h2>{item.institute}</h2></div>
                    <div>
                      <h4>{item.class1}</h4>
                      <div className='class1-div highlight'>
                        <p>{item.percentage1}</p>
                      </div>
                    </div>
                    <div>
                      <h4>{item.class2}</h4>
                      <div className='class2-div highlight'>
                        <p>{item.percentage2}</p>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>

          </div>

          <div className='card skill'>
            <div className='heading-div'><h3>professional skillset</h3></div>
            <div className='skill-img'>
              <div className='skill-info'>
                <p>I work with <span class="blue-glow">C programming</span> and full-stack web development, using <span class="blue-glow">HTML, CSS, JavaScript, React</span> on the frontend and  
                   <span class="blue-glow"> Node.js</span> with <span class="blue-glow">Express</span> on the backend. I also handle <span class="blue-glow">databases using MySQ</span>L. I like turning ideas into real projects, learning new 
                   technologies, and improving my skills by actually building things.</p>
                
              </div>
              <SkillBar data={SkillBarData} />
            </div>


          </div>

        </div>
      </section>
      <Second_sec />
    </>

  )
};

export default Resume;