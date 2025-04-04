import React from "react";
import Comm from '../assets/communicationBG.png';
import '../css/MyTeam.css';

export default function myTeam(){
    return(
        <>
            <div className="myTeamContent">
                <img className="teamImage" src={Comm} alt="A Image of my team"/>
                <p>oh yeaaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
        </>
    );
}