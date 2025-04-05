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
                    <p style={{fontSize: "20px", color: "black"}}>This was an issue when I started out coding but I quickly learnt how to overcome time management. 
                    I listed my priorities from urgent to not that important. Once I discovered what was high priority in my life I would focus on it, resolve it and gain momentum henceforth. This would then lead me to a smoother process in completing tasks timeously.</p>
                </div>
             </div>

             <hr style={{ width: "80vw",height: "2px", backgroundColor: "gray", border: "none"}} /><br/>

             <div className="challenge2">
                <div className="challenge2Text">
                    <h1 style={{color: "saddlebrown"}}>Communication</h1>
                    <p style={{fontSize: "20px", color: "black"}}>As we know it's a means of sending and receiving information. Just as developing apps is what we put in is what we get out. So too is the importance of communicating clearly and efficiently to our peers and colleagues in order to ensure no broken communication. It's vital that the team working on projects together understand each other and  place the project at hand as the number 1 focal point. 1 spirit 1 goal.</p>
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
                    <h1 style={{color: "saddlebrown"}}>Identity</h1>
                    <p style={{fontSize: "20px", color: "black"}}>Often times when we enter into a new space we feel threatened by others because of their experience and character not realizing that they have also been in our shoes before. I felt not good enough at one stage as a developer and quickly realized that being a student is too learn and grow from there. Having identity of who you are in the season where you at brings understanding and purpose. As time went on I became way more confident and then started flowing in my role. Everyday I learn and strive to do better and that excites me.</p>
                </div>
             </div>
        </div>
        </>
    );
}