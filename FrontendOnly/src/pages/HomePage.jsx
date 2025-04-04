import React, { useState } from "react";
import Header from "../components/HomeHeader.jsx";
import Footer from "../components/HomeFooter.jsx";
import WhatAndWhy from "../components/WhatAndWhy.jsx";
import Challenges from "../components/Challenges.jsx";
import ArrowDown from "../components/ArrowDown.jsx";
import SelfIntro from "../components/SelfIntro.jsx";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={`homeBody ${isMenuOpen ? 'blur' : ''}`}>
                <Header toggleMenu={toggleMenu} />
                <div className="homePageContent1">
                    <SelfIntro />
                </div>
                <div className="homePageContent2">
                    <ArrowDown />
                </div>
                <div className="homePageContent3">
                    <WhatAndWhy />
                </div>
                <div className="homePageContent4">
                    <Challenges />
                </div>
            </div>
            <Footer />
        </>
    );
}