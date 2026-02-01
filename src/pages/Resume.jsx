import React from 'react';
import "../App.css";
import profileimage from "./image/14672844.jpg";
import highschool from "../assets/vecteezy_school_1200587.png";
import coding from "../assets/lcd-icon-vector.jpg";
import Second_sec from '../components/Second_sec';
import Timeline from '../components/Timeline';
import SkillBar from '../components/SkillBar';
import { MdOutlineDownloading } from "react-icons/md";




// ExperienceData array
const ExperienceData = [
  {
    image: profileimage,
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
    image: profileimage,
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
  },
  {
    image: profileimage,
    alt: "Image",
    qualification: "bachelor of computer application",
    institute: "modi institute of management & technology",
    year: "2025 - 2026",
    class1: "Semester 3",
    percentage1: "Ongoing",

    location: "kota, rajasthan",
  }

]

// SkillBarData 
const SkillBarData = [
  {
    name: "HTML, CSS",
    width: "75%",
  },
  {
    name: "JavaScript",
    width: "45%",
  },
  {
    name: "react",
    width: "45%",
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
            <a href="/cv.pdf" download className="download-cv">
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid vitae ducimus temporibus. Amet
                  eveniet, rerum sit odit recusandae officiis nulla! Minus, numquam earum beatae porro necessitatibus cum omnis rem?</p>
              </div>
              <SkillBar data={SkillBarData} />
            </div>


          </div>
          <div className='card language'>
            <div className='heading-div'><h3>languages</h3></div>
            <div className='highlight'>
              <p>english</p>
              <p>hindi</p>
            </div>
          </div>

        </div>
      </section>
      <Second_sec />
    </>

  )
};

export default Resume;