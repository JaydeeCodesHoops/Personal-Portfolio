import React from 'react';
import Jaden from '../assets/myself.jpg';

export default function SelfIntro(){
    return(
        <>
            <img className="jadenImage" src={Jaden} alt="image of jaden"/><br/>
            <h1 style={{fontSize: "100px",fontFamily: "sans-serif"}}>I'm Jaden</h1><br/>
            <h2 style={{color: "orange", fontSize: "35px"}}>A Software Engineer </h2><br/>
            <h3 style={{fontSize: "25px", fontFamily: "sans-serif"}}>This portfolio showcases my work experience, expertise, challenges I faced<br/>and what makes me to be the software developer I am today.</h3>
        </>
    );
}