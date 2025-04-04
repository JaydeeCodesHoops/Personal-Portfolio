import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { FaReact, FaCheckCircle  , FaUsers, FaCalculator, FaMobile, FaServer, FaTools  } from 'react-icons/fa';
import Header from "../components/HomeHeader.jsx";
import Footer from "../components/HomeFooter.jsx";
import '../css/Experience.css';

const ExperienceItem = ({ icon: Icon, title, company, duration, description, technologies, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <div 
        className={`experience-item ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="experience-header">
          <span className="experience-icon">
            <Icon />
          </span>
          <div className="experience-title-container">
            <h3 className="experience-title">{title}</h3>
            <p className="experience-company">{company}</p>
            <p className="experience-duration">{duration}</p>
          </div>
        </div>
        
        <div className={`experience-description ${isExpanded ? 'show' : ''}`}>
          <p>{description}</p>
          
          {technologies && technologies.length > 0 && (
            <div className="technologies-used">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                {technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div><br/>
              <div className="linkText">
                {link}
              </div>
            </div>
          )}
        </div>
        
        <div className="expand-indicator">
          {isExpanded ? 'Close Details' : 'View Details'}
        </div>
      </div>
    );
  };

export default function Experience(){
  const navigate = useNavigate();

  const handleReference = () => {
    navigate("/resume#refs");
  };
    const experienceData = [
        {
          icon: FaReact,
          title: 'Full Stack Web Application',
          company: 'Personal Projects',
          duration: 'August 2024 - Currently Updating a few',
          description: 'Developed comprehensive web applications that demonstrates advanced full-stack development skills. The projects integrates multiple technologies to create an efficient solution to its purpose.',
          technologies: ['React.js', 'SQL Server', 'C#', 'API', 'External Resources'],
          link: <a href="https://github.com/JaydeeCodesHoops">link to my github</a>
        },
        {
          icon: FaCheckCircle ,
          title: 'Attendance Tracking System',
          company: 'Church Event Management Application',
          duration: 'Oct 2024 - Dec 2024',
          description: 'Built a complete e-commerce platform with advanced features including user authentication and event management. Implemented secure and efficient backend services.',
          technologies: [ 'React.js', 'SQL Server', 'C#', 'API', 'External Resources'],
          link: <a href="https://github.com/JaydeeCodesHoops/Church-Event-Management-Application">link to this project</a>
        },
        {
          icon: FaServer,
          title: 'Backend Integration',
          company: 'Personal Projects Backend',
          duration: 'Oct 2024 - Curently Still upskilling & implementing',
          description: 'Created APIs with the functionality to be integrated with the UI systems for clear and efficient communication with data storage sources, improving system performance and scalability.',
          technologies: [ 'C#', 'Minimal / Traditional API', 'Entity Framework', 'External Resources'],
          link: <p style={{color: "red"}}>resource not available yet</p>
        },
        {
          icon: FaMobile,
          title: 'Mobile Application Development',
          company: 'Personal Project',
          duration: 'Jan 2025 - Current Work In Progress',
          description: 'Developed a cross-platform mobile application with advanced features including real-time messaging, customer help and support services and location-based services.',
          technologies: ['React Native', 'Custom API', 'SQL Server', 'External Resources'],
          link: <p style={{color: "red"}}>resource not available yet</p>
        },
        {
          icon: FaUsers,
          title: 'Agile Work Environment',
          company: 'redAcademy',
          duration: 'June 2024 - Currently Still In Position',
          description: 'I collaborated closely with cross-functional teams to deliver high-quality products. I participated in regular sprint planning, daily standups, and sprint retrospectives, contributing to continuous improvement and adaptive project management. ',
          technologies: ['Node.js', 'Docker', 'PostgreSQL', 'React.js', 'C#', 'SQL Server', ' Traditional APIs', 'Jira', 'Azure', 'Microsoft Office', 'Git', 'Word Press', 'External Resources'],
          link: <a href="https://www.linkedin.com/in/jaden-van-schalkwyk-76aba6317/">check my linkedIn for proof</a>
        },
        {
          icon: FaTools,
          title: 'Central Maintenance Project',
          company: 'redAcademy',
          duration: 'Dec 2024 - Currently Still In Position',
          description: 'I have contibuted effectively to the Central Maintenance Projects with my Team. I Created a UI Screen including functionality with high performance and scalability for our Client.',
          technologies: ['Node.js', 'Docker', 'React.js', 'C#', ' Traditional APIs', 'Azure', 'External Resources'],
          link: <p onClick={handleReference} style={{ cursor: "pointer", textDecoration: "underline" }}>contact my references for proof</p>
        },
        {
          icon: FaCalculator,
          title: 'Financial Calculators - Testing Tools',
          company: 'redAcademy',
          duration: 'Dec 2024 - Currently Still In Position',
          description: 'I have contibuted to the Financial Calculator Projects with my Team, ensuring accuracy and user-friendly interfaces. We collaborated to implement complex financial algorithms and features, focusing on providing reliable and efficient tools for our Client.',
          technologies: ['Node.js', 'React.js', 'Azure', 'External Resources'],
          link: <p onClick={handleReference} style={{ cursor: "pointer", textDecoration: "underline" }}>contact my references for proof</p>
        }
      ];

      return(
        <>
        <div>
            <div className="experience-page">
                <div>
                  <Header/>
                </div>
                <h1 className="page-title">Professional Experience & Projects</h1>
                <div className="experience-grid">
                    {experienceData.map((experience, index) => (
                        <ExperienceItem
                            key={index}
                            icon={experience.icon}
                            title={experience.title}
                            company={experience.company}
                            duration={experience.duration}
                            description={experience.description}
                            technologies={experience.technologies}
                            link={experience.link}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
        </>
      );
};