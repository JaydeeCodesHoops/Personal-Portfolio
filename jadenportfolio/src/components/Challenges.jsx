import React from "react";
import TimeM from '../assets/timeManagement.jpeg';
import Comm from '../assets/communication2.jpeg';
import selfEsteem from '../assets/selfEsteem.webp';

export default function Challenges(){
    return(
        <>
            <div>
                <h1 style={{fontSize: "50px", color: "orange"}}>Challenges I faced</h1><br/>
            </div>
             <div className="challenge1">
                <div className="challenge1Image">
                    <img style={{width: "100%", height: "400px", borderRadius: "25px"}} src={TimeM} alt="time management image"/>
                </div>
                <div className="challenge1Text">
                    <h2 style={{color: "orange"}}>Time Management</h2>
                    <p style={{fontSize: "18px"}}>fguyjdyjj</p>
                </div>
             </div>
             <div className="challenge2">
                <div className="challenge2Text">
                    <h2 style={{color: "orange"}}>Communication</h2>
                    <p style={{fontSize: "18px"}}>fguyjdyjj</p>
                </div>
                <div className="challenge2Image">
                    <img style={{width: "100%", height: "400px", borderRadius: "25px"}} src={Comm} alt="time management image"/>
                </div>
             </div>
             <div className="challenge3">
                <div className="challenge3Image">
                    <img style={{width: "100%", height: "400px", borderRadius: "25px"}} src={selfEsteem} alt="time management image"/>
                </div>
                <div className="challenge3Text">
                    <h2 style={{color: "orange"}}>Low Self-Esteem</h2>
                    <p style={{fontSize: "18px"}}>fguyjdyjj</p>
                </div>
             </div>
        </>
    );
}