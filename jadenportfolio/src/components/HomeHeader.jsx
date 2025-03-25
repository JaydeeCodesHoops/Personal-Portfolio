import React from "react";
import { useNavigate } from 'react-router-dom';
import J from '../assets/jaydee.png';
import '../css/homePage.css';

export default function Header(){
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    } 
    const handleResume = () => {
        navigate("/resume");
    } 
    const handleExpertise = () => {
        navigate("/expertise");
    }
    const handleExperiences = () => {
        navigate("/experience");
    }
    const handleContact = () => {
        navigate("/contact");
    }

    return(
        <>
            <div className="homeHeader">
                    <img className="nameImage" src={J} alt="Jaden's Name"/>
                <div className="otherPagesButtons">
                    <p id="header1" onClick={handleHome}>Home</p>
                    <p id="header2" onClick={handleResume}>Resume</p>
                    <p id="header3" onClick={handleExpertise}>Expertise</p>
                    <p id="header4" onClick={handleExperiences}>Experience</p>
                    <p id="header5" onClick={handleContact}>Contact</p>
                </div>
            </div>
        </>
    );
} 