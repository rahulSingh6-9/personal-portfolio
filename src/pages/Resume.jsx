import "../App.css";
import wingsflyimg from "./image/wingsfly.jpeg";

import highschool from "../assets/vecteezy_school_1200587.png";
import coding from "../assets/lcd-icon-vector.jpg";
import Second_sec from '../components/Second_sec';
import Timeline from '../components/Timeline';
import SkillBar from '../components/SkillBar';
import CV from './image/RahulSingh.pdf'
import { MdOutlineDownloading, MdLocationOn, MdCalendarToday } from "react-icons/md";




// ExperienceData array
const ExperienceData = [
  {
    image: "https://res.cloudinary.com/djgizjh2y/image/upload/v1787331161/wingsfly_ti1w1m.jpg",
    alt: "img1",
    date: "sept 2025 - feb 2026",
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
   
    alt: "",
    date: ".... ",

  },
];

// EducationData

const EducationData = [
  {
    image: "https://res.cloudinary.com/djgizjh2y/image/upload/v1787376158/vecteezy_school_1200587_pebseq.png",
    alt: "High School",
    qualification: "high school",
    institute: "central public school",
    location: "kota, rajasthan",
    year: "2022 - 2024",
    board: "RBSE",
    subject: "Mathematics",
  },
  {
    image: "https://res.cloudinary.com/djgizjh2y/image/upload/v1787331122/lcd-icon-vector_yc8vgf.jpg",
    alt: "Bachelor Degree",
    qualification: "bachelor degree",
    institute: "modi institute of management & technology",
    bachelors: "bachelor of computer application",
    location: "kota, rajasthan",
    year: "2024 - 2027",
    status: "Currently Pursuing",
    cgpa: "8.30",
  },
];

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
    name: "SQL, MongoDB",
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
            <div className='heading-div'><h3>Education</h3></div>
            <div className='education-timeline'>
              {EducationData.map((item, index) => (
                <div className='education-box-div' key={index}>
                  <div className='education-year-div'>
                    <small>{item.year}</small>
                    <h2 className='#'>{item.qualification}</h2>
                  </div>

                  <div className='education-box'>
                    <img src={item.image} alt={item.alt} />
                    <div className='institute-div'> <h5><span style={{ color: 'blue' }}>Institute:</span> {item.institute}</h5></div>
                    
                    {item.bachelors && (
                      <div style={{ marginTop: '5px' }}>
                        <h4 style={{ textTransform: 'capitalize', fontSize: '15px', color: '#333' }}><span style={{ color: 'blue' }}>Bachelors:</span> {item.bachelors}</h4>
                      </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px 0', paddingLeft: index % 2 === 1 ? '45px' : '0', paddingRight: index % 2 === 0 ? '45px' : '0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <MdLocationOn style={{ fontSize: '18px', color: '#1a1919' }} />
                        <span style={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: '600', color: '#1a1919' }}>{item.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <MdCalendarToday style={{ fontSize: '16px', color: '#1a1919' }} />
                        <span style={{ fontSize: '14px', fontWeight: '600', color: '#1a1919' }}>{item.year}</span>
                      </div>
                    </div>

                    {item.board && (
                      <div>
                        <h4 style={{ fontSize: '15px', color: '#333' }}><span style={{ color: 'blue' }}>Board:</span> {item.board}</h4>
                      </div>
                    )}

                    {item.subject && (
                      <div>
                        <h4 style={{ textTransform: 'capitalize', fontSize: '15px', color: '#333' }}><span style={{ color: 'blue' }}>Subject:</span> {item.subject}</h4>
                      </div>
                    )}

                    {item.status && (
                      <div className='class1-div highlight' style={{ marginTop: '5px' }}>
                        <p style={{ fontWeight: '600' }}>{item.status}</p>
                      </div>
                    )}

                    {item.cgpa && (
                      <div className='class1-div highlight' style={{ marginTop: '5px' }}>
                        <p style={{ fontWeight: '600' }}>CGPA: {item.cgpa}</p>
                      </div>
                    )}
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