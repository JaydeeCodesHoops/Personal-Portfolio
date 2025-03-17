import React from "react";
import Header from '../components/HomeHeader.jsx';
import Footer from '../components/HomeFooter.jsx';
import WhatAndWhy from "../components/WhatAndWhy.jsx";
import Challenges from "../components/Challenges.jsx";
import ArrowDown from "../components/ArrowDown.jsx";
import SelfIntro from "../components/SelfIntro.jsx";

export default function Home(){
    return(
        <>
        <div>
            <div className="homeBody">
                <div>
                    <Header/>
                </div>
                <div className="homePageContent1">
                   <SelfIntro/>
                </div>
                <div className="homePageContent2">
                    <ArrowDown/>
                </div>
                <div className="homePageContent3">
                    <WhatAndWhy/>
                </div>
                <div className="homePageContent4">
                    <Challenges/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        </>
    );
}