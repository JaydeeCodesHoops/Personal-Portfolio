import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/HomeHeader";
import Footer from '../components/HomeFooter.jsx';

export default function Resume(){
    const  navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    }
    return(
        <>
        <div>
            <div style={{backgroundColor: "black"}}>
                <Header/>
            </div>
            <div>
                <h1>Resume Page</h1><br/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        </>
    );
}