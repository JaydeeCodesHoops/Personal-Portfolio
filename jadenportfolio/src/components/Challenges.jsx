import React from "react";
import TimeM from '../assets/timeManagementBG.png';
import Comm from '../assets/communicationBG.png';
import selfEsteem from '../assets/lowEsteemBG.png';

export default function Challenges(){
    return(
        <>
        <div className="challenges">
            <div className="challengesHeading">
                <h1>Stepping stones to success</h1>
            </div>
             <div className="challenge1">
                <div className="challenge1Image">
                    <img style={{width: "80%", height: "400px"}} src={TimeM} alt="time management image"/>
                </div>
                <div className="challenge1Text">
                    <h1 style={{color: "red"}}>Time Management</h1>
                    <p style={{fontSize: "20px", color: "black"}}>This was a major issue when i just started out coding, seperating most important tasks from least important tasks. It caused trouble for myself as I ended up rushing to complete an important task before the deadline.<br/><br/> I realised that I was not going in the right direction and had to shift my focus and work on most important tasks first with more time allocated to it.</p>
                </div>
             </div>

             <hr style={{ width: "80vw",height: "2px", backgroundColor: "gray", border: "none"}} /><br/>

             <div className="challenge2">
                <div className="challenge2Text">
                    <h1 style={{color: "red"}}>Communication</h1>
                    <p style={{fontSize: "20px", color: "black"}}>It has been a challenge as many of my colleagues was not as open as I was so it was not easy to communicate.<br/><br/> I have learnt to speak more to them so that we may become comfortable with each other and work efficiently as well. </p>
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
                    <h1 style={{color: "red"}}>Low Self-Esteem</h1>
                    <p style={{fontSize: "20px", color: "black"}}>In the beginning I was not as confident as I am now due to me comparing myself to others that has backgroud knowledge on coding while I do not have prior knowledge.</p>
                </div>
             </div>
        </div>
        </>
    );
}