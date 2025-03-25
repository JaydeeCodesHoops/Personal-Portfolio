import React from "react";
import FlipWhat from "../components/WhatIDoFlip.jsx";
import FlipWhy from "../components/WhyIDoFlip.jsx";

export default function WhatAndWhy(){
    return(
        <>
        <div className="WhatandWhy">
            <div className="WhatandWhyHeading">
                <h1>What and Why I do it</h1><br/>
            </div>
            <div>
                <p style={{fontSize: "25px", color: "black"}}>What drives me to become the young dedicated software developer that i am today.<br/>It definitely took a lot of focus and the passion that has grown by the day impacted my career<br/> as a developer so positively that my confidence level has grown too.</p>
            </div>
            <div className="content3Content">
                <FlipWhat/>
                <FlipWhy/>
            </div>
        </div>
        </>
    );
}