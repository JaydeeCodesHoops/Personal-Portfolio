import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/HomeHeader";
import Footer from '../components/HomeFooter.jsx';

export default function Experience(){
    const  navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    }
    return(
        <>
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <h1>Experience Page</h1><br/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        </>
    );
}