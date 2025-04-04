import React from "react";
import Header from "../components/HomeHeader.jsx";
import Footer from "../components/HomeFooter.jsx";
import { FaUser, FaSuitcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import '../css/Resume.css'

export default function Resume(){
    return(
        <>
        <div>
            <div className="resumeBody">
                <div>
                    <Header/>
                </div>
                <div className="nameAndTitle">
                    <h1 className="jaden-resume-heading">Jaden Van Schalkwyk</h1>
                    <h1>Software Developer</h1>
                    <div className="emailAndNumber">
                        <span>vanschalkwykjaden10@gmail.com</span>
                        <span>-</span>
                        <span>069 315 5864</span>
                        <span>-</span>
                        <span>Cape Town, SA</span>
                    </div>
                </div>
                <hr style={{width: "80vw", height: "2px", backgroundColor: "gray", border: "none"}}/>
                <div className="summary">
                    <div className="summaryHeading">
                        <FaUser size={30} color="#3182ce" /><h1>Profile Summary</h1><br/>
                    </div>
                    <p>
                        I am a dedicated software developer with background knowledge of basic fundamentals of a
                        computer along with the basics of HTML. I developed skills in C#, Web API’s, SQL Databases,
                        React.js, HTML and CSS through redAcademy’s software development program. In this time I
                        have gained experience in Back-end and Front-end as a developer. This opportunity allowed me
                        to gain work experience working on live client projects, adapting to the real work environment. I
                        have availed myself to always be open to learn new concepts and much more in software.
                    </p>
                </div>
                <div className="professionalExperience">
                    <div className="experienceHeading">
                        <FaSuitcase size={30} color="#3182ce" /><h1>Professional Experience</h1><br/>
                    </div>
                    <div className="experienceBodyDev">
                        <div>
                            <h3>Software Developer</h3>
                            <p>redAcademy | June 2024 - Present</p>
                        </div>
                        <ul>
                            <li> Worked on Back-end, Front-end for the live client projects - Central Maintenance projects as well as Financial Calculators for Lewis.</li>
                            <li> Gained experience in building user interfaces in React.js creating efficient user experiences.</li>
                            <li>I have contributed my input to all projects effectively.</li>
                        </ul><br/>
                    </div>
                    <div className="experienceBodyRef" id="refs">
                        <h3>References</h3>
                        <p><span style={{fontWeight: "bold"}}>Mahomed Goolam -</span> Technical Mentor</p>
                        <p><span style={{fontWeight: "bold"}}>Emmanuel Madzunye -</span> Senior Lecturer</p>
                        <p>Phone: +27 21 680 0900</p>
                        <p>Email: info@redacademy.co.za</p>
                    </div>
                </div>
                <div className="education">
                    <div className="educationHeading">
                        <FaGraduationCap size={30} color="#3182ce"/><h1>Education</h1>
                    </div>
                    <div className="educationBody">
                        <h3>Matric Graduate</h3>
                        <p>Grassdale High, Secondary School | Graduated: December 2022</p><br/>
                        <p>NQF Level 4 Certificate</p><br/>

                        <h3>Software Developer Graduate</h3>
                        <p>redAcademy Software Development Learning Academy | Current Graduate: Present - May 2025</p><br/>
                        <p><span style={{fontWeight: "bold"}}>National Certificate:</span> Information Technology: Systems Development</p>
                        <p>NQF Level 5 Certificate</p>
                    </div>
                </div>
                <div className="skills">
                    <div className="skillsHeading">
                        <FaStar size={30} color="#3182ce"/><h1>Technical Skills</h1>
                    </div>
                    <div className="technicalSkills">
                    <div>
                        <h3>Programming Languages and other expertise</h3>
                    </div>
                    <div className="skillsList">
                        {['React.js', 'C#', 'Node.js', 'HTML & CSS', 'Minimal / traditional APIs',
                         'SQL Server', 'PosgreSQL', 'Docker', 
                          'Git', 'GitHub', 'Azure', 'WordPress', 'Airtable'
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="skillsListItem"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        </>
    );
}