import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Expertise from './pages/Expertise.jsx';
import Work from './pages/Work.jsx';
import Experience from './pages//Experience.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/expertise" element={<Expertise/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
