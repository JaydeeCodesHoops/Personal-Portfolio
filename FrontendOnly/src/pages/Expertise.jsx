import React, { useState } from "react";
import Header from "../components/HomeHeader.jsx";
import Footer from "../components/HomeFooter.jsx";
import {  CodeIcon, DatabaseIcon, ServerIcon , NetworkIcon, PackageIcon, GitBranchIcon, GlobeIcon } from "lucide-react";
import Github from '../assets/Github.png';
import PortfolioUI from '../assets/portfolio-ui.jpg';
import ChurchUI from '../assets/church-event.png';
import API from '../assets/church-backend.png';
import API2 from '../assets/API2.png';
import Postgres from '../assets/postgres.png';
import SQL from '../assets/sql-database.png';
import http from '../assets/HTTP-request.png';
import azure from '../assets/azure.png';
import backend from '../assets/backend.png';
import wordpress from '../assets/wordpress.png';
import wordpressUI from '../assets/wordpressUI.PNG';
import '../css/Expertise.css'

const ExpertiseItem = ({ icon: Icon, title, description1, description2, image, image2, figure }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`expertise-item ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="expertise-header">
        <span className="expertise-icon">
          <Icon size={50}/>
        </span>
        <h3 className="expertise-title">{title}</h3>
      </div>
      
      <div className={`expertise-description ${isExpanded ? 'show' : ''}`}>
        <div className="unorderedList">
            <li>{description1}</li>
            <li>{description2}</li>
        </div>
        <br/>

        {(image?.trim() !=="" || image2?.trim() !=="") && (
        <div className="expertise-image">
           {image?.trim() !== "" && <img style={{width: 500, height: 200, borderRadius: 10}}src={image} alt={title} />}
           {image2?.trim() !== "" && <img style={{width: 500, height: 200, borderRadius: 10}} src={image2} alt={title + 2}/>}
        </div>
      )}

        <div className="figure">
          <p>{figure}</p>
        </div>
      </div>
      
      <div className="expand-indicator">
        {isExpanded ? 'Close Details' : 'View Details'}
      </div>
    </div>
  );
};

export default function Expertise() {
  const expertiseData = [
    {
      icon: CodeIcon,
      title: 'Frontend Development',
      description1: 'React.js - Component-based UI development, for easier user experiences.',
      description2: "HTML & CSS - Web page structuring and styling, responsive design.",
      image: PortfolioUI,
      image2: ChurchUI,
      figure: "These are 2 UI's of 2 seperate projects showcasing my frontend expertise."
    },
    {
      icon: ServerIcon,
      title: 'Backend Development',
      description1: 'C# - Object-oriented programming, .NET framework, API development.',
      description2: "Node.js - Server-side JavaScript, event-driven programming, API development.",
      image: API,
      image2: backend,
      figure: "This is the traditional API I have built for one of my projects."
    },
    {
      icon: DatabaseIcon,
      title: 'Database Management',
      description1: 'SQL Server - Relational database management, stored procedures.',
      description2: "PostgreSQL - Open-source relational database, SQL, indexing, performance tuning.",
      image: Postgres,
      image2: SQL,
      figure: "The database management applications I worked with (Postgres & SQL Server)."
    },
    {
      icon: NetworkIcon,
      title: 'API Development & Architecture',
      description1: 'Minimal / Traditional APIs - RESTful API design, microservices, middleware implementation.',
      description2: "Creation and use of HTTP requests, communication between frontend to database.",
      image: API2,
      image2: http,
      figure: "The backend that I have developed for the functionality in my projects."
    },
    {
      icon: PackageIcon,
      title: 'DevOps & Cloud',
      description1: 'Docker - Containerization, container orchestration, CI/CD integration.',
      description2: "Azure - Cloud computing, hosting, functions, DevOps pipelines.",
      image: azure,
      image2: "",
      figure: "Azure as one of the main cloud computing software used in my experience of cloud computing."
    },
    {
      icon: GitBranchIcon,
      title: 'Version Control & Collaboration',
      description1: 'Git - Source control, branching, merging, version tracking.',
      description2: "GitHub - Repository management, collaboration, CI/CD integration.",
      image: Github,
      image2: "",
      figure: "GitHub as my primary source for personal projects and my coding experience version control system."
    },
    {
      icon: GlobeIcon,
      title: 'Content Management & Web Development',
      description1: 'WordPress - CMS customization, theme/plugin development, PHP integration.',
      description2: "Security & Performance Optimization - Implementing best practices to secure Websites and improve loading times.",
      image: wordpress,
      image2: wordpressUI,
      figure: "Quick and easy web development through Word Press has been a fun experience for me. "
    },
  ];

  return (
    <>
      <div>
        <div className="expertise-page">
          <div>
            <Header/>
          </div>
          <h1 className="page-title">My Technical Expertise</h1>
          <div className="expertise-grid">
            {expertiseData.map((expertise, index) => (
              <ExpertiseItem 
                key={index}
                icon={expertise.icon}
                title={expertise.title}
                description1={expertise.description1}
                description2={expertise.description2}
                image={expertise.image}
                image2={expertise.image2}
                figure={expertise.figure}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}