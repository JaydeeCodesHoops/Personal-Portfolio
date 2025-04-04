import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Jaden from '../assets/myself.jpg';

export const FloatingSection = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("floating-content");
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Lora:400,700', 'Montserrat:300,500',  'Poppins:400,700', 'Prompt:400,700']
          }
        });
      }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            id="floating-content"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="p-6 bg-white shadow-lg rounded-lg"
        >
            {children}
        </motion.div>
    );
};

export default function SelfIntro(){
    return(
        <>
        <div className="selfIntroSection">
            <div className="selfIntroText">
                <h1 style={{fontSize: "75px",fontFamily: "sans-serif"}}>Hi, I'm Jaden</h1>
                <h2 style={{color: "#A67B5B", fontSize: "45px", fontFamily: 'Prompt, sans-serif', letterSpacing: '3px'}}>A Software Engineer </h2>
                <h3 style={{fontSize: "25px", fontFamily: "sans-serif"}}>This portfolio showcases my work experience, expertise, challenges I faced and what makes me the software developer I am today.</h3>
            </div>
            <div className="selfIntroImage">
                <img className="jadenImage" src={Jaden} alt="image of jaden"/><br/>
            </div>
        </div>
        </>
    );
}