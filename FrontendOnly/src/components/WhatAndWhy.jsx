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
                <p style={{fontSize: "25px", color: "black", fontFamily: "sans-serif"}}>Small description of what drives me to become the young dedicated software developer that I am today.<br/>It definitely took a lot of focus while the passion is growing by the day, this really impacted my career as a developer that it pushes me to strive for new heights each day.</p>
            </div>
            <div className="content3Content">
                <FlipWhat/>
                <FlipWhy/>
            </div>
        </div>
        </>
    );
}