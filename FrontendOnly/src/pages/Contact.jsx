import React, { useState } from "react";
import Header from "../components/HomeHeader.jsx";
import Footer from "../components/HomeFooter.jsx";
import { FaLinkedin, FaGithub,  FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileExport, FaWhatsapp } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import '../css/Contact.css'

const ConnectItem = ({icon: Icon, title, description, cell}) => {

    return(
      <div className="content-item-div">
        <div className="connect-item">
            <div className="connect-heading">
                <span className="connect-icon">
                    <Icon/>
                </span>
                <h3 className="connect-title">{title}</h3><br/>
                <p>{description}</p>
            </div>
        </div>
      </div>
    );
};

export default function Contact() {
     const connectData = [
        {
          icon: FaUserGroup,
          title: 'Collaborate?',
          description: 'You looking for a great collaborator to code with? We can build great UI systems together and stay in touch!',
        },
        {
          icon: FaFileExport,
          title: 'Request Application?',
          description: 'Are you trying to find an experienced developer to build a web application for a business or for something else? You finally found that person, contact me via any provided source of contact so that we may take it further from there.',
        }
    ];

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( import.meta.env.VITE_EMAILJS_SERVICE_ID,  import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    alert("Form Successfully Submitted");
    console.log('Form Submitted', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/jaden-van-schalkwyk-76aba6317/',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      link: 'https://github.com/JaydeeCodesHoops',
      color: '#333'
    }
  ];

  return (
    <>
    <div className="contact-content">
        <div>
          <Header/>
        </div>
      <div className="whole-page-content">
        <div className="contact-jaden-info">
            <h1 className="contact-heading">Contact Jaden</h1>
            <div className="connect-grid">
              {connectData.map((connect, index) => (
                <ConnectItem
                  key={index}
                  icon={connect.icon}
                  title={connect.title}
                  description={connect.description}
                  cell={connect.cell}
                />
              ))}
            </div>
        </div>
        <div className="reach-out-text">
          <p>You may reach out to me via contact details below or via email on the form too.</p>
        </div>
      <div className="contact-page">
        <div>
          <h2>Pop Me An Email</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h1>Get In Touch</h1>
            <p>Have a project in mind? or Need a great user experience website? Let's chat!</p>
            
            <div className="contact-details">
              <div className="contact-detail">
                <FaEnvelope className="contact-email" />
                <span>vanschalkwykjaden10@gmail.com</span>
              </div>
              <div className="contact-detail">
                <FaPhone className="contact-phone" />
                <span>+27 (69) 315 5864</span>
              </div>
              <div className="contact-detail">
                <FaMapMarkerAlt className="contact-location" />
                <span>Cape Town, WC, SA</span>
              </div>
              <div className="contact-detail">
                <FaWhatsapp className="contact-whattsapp" />
                <span>+27 (69) 315 5864</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Mail
            </button>
          </form>
        </div>
        <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: social.color }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
      </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};
