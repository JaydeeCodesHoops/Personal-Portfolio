import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import J from '../assets/jaydee.png';
import '../css/homePage.css';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activePage, setActivePage] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    // Determine active page based on current route
    useEffect(() => {
        const path = location.pathname;
        switch(path) {
            case '/':
                setActivePage('home');
                break;
            case '/resume':
                setActivePage('resume');
                break;
            case '/expertise':
                setActivePage('expertise');
                break;
            case '/experience':
                setActivePage('experiences');
                break;
            case '/contact':
                setActivePage('contact');
                break;
            default:
                setActivePage('home');
        }
    }, [location.pathname]);

    const navigationItems = [
        { id: 'header1', name: 'home', label: 'Home', path: '/' },
        { id: 'header2', name: 'resume', label: 'Resume', path: '/resume' },
        { id: 'header3', name: 'expertise', label: 'Expertise', path: '/expertise' },
        { id: 'header4', name: 'experiences', label: 'Experience', path: '/experience' },
        { id: 'header5', name: 'contact', label: 'Contact', path: '/contact' }
    ];

    const handleNavigation = (path) => {
        navigate(path);
        if (isOpen) setIsOpen(false); // Close menu after navigation
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="homeHeader">
            <img className="nameImage" src={J} alt="Jaden's Name"/>
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <div className="otherPagesButtons">
                    {navigationItems.map((item) => (
                        <p 
                            key={item.id}
                            id={item.id}
                            onClick={() => handleNavigation(item.path)}
                            className={`header-item ${activePage === item.name ? 'active' : ''}`}
                        >
                            {item.label}
                            {activePage === item.name && <span className="active-underline"></span>}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}