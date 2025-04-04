import React from "react";
import TimeM from '../assets/timeManagementBG.png';
import Comm from '../assets/communicationBG.png';
import selfEsteem from '../assets/lowEsteemBG.png';

export default function Challenges(){
    return(
        <>
        <div className="challenges">
            <div className="challengesHeading">
                <h1>Main stepping stones to success</h1>
            </div>
             <div className="challenge1">
                <div className="challenge1Image">
                    <img style={{width: "80%", height: "400px"}} src={TimeM} alt="time management image"/>
                </div>
                <div className="challenge1Text">
                    <h1 style={{color: "saddlebrown"}}>Time Management</h1>
                    <p style={{fontSize: "20px", color: "black"}}>This was an issue when I started out coding but I learnt to point out what the issue was before solving it. My whole focus changed, I managed my time correctly along with seperating most important tasks from least important tasks.</p>
                </div>
             </div>

             <hr style={{ width: "80vw",height: "2px", backgroundColor: "gray", border: "none"}} /><br/>

             <div className="challenge2">
                <div className="challenge2Text">
                    <h1 style={{color: "saddlebrown"}}>Communication</h1>
                    <p style={{fontSize: "20px", color: "black"}}>It has been a challenge as all of my colleagues was not as open as I was, so it was not easy to communicate.<br/><br/> I have learnt to speak more to them until we became comfortable with each other in order to work efficiently.</p>
                </div>
                <div className="challenge2Image">
                    <img style={{width: "80%", height: "400px"}} src={Comm} alt="time management image"/>
                </div>
             </div>

             <hr style={{ width: "80vw",height: "2px", backgroundColor: "gray", border: "none"}} /><br/>

             <div className="challenge3">
                <div className="challenge3Image">
                    <img style={{width: "80%", height: "400px"}} src={selfEsteem} alt="time management image"/>
                </div>
                <div className="challenge3Text">
                    <h1 style={{color: "saddlebrown"}}>Low Self-Esteem</h1>
                    <p style={{fontSize: "20px", color: "black"}}>I always tended to compare myself with others that had background knowledge in IT and this broke me abit but, I stopped comparing myself to others and rather focused on improving myself in every possible way so that I may feel much better too which will definitely help my growth within this industry.</p>
                </div>
             </div>
        </div>
        </>
    );
}