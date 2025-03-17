import React from "react";
import FlipWhat from "../components/WhatIDoFlip.jsx";
import FlipWhy from "../components/WhyIDoFlip.jsx";

export default function WhatAndWhy(){
    return(
        <>
            <h1 style={{fontSize: "50px", color: "orange"}}>What and Why I do it</h1><br/>
            <p style={{fontSize: "25px"}}>What drives me to become the young dedicated software developer that i am today.<br/>It definitely took a lot of focus and the passion that has grown by the day impacted my career<br/> as a developer so positively that my confidence level has grown too.</p>
            <div className="content3Content">
                <FlipWhat/>
                <FlipWhy/>
            </div>
        </>
    );
}