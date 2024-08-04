import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home_page/Home";
import Nav from "./components/navbar/Nav";
import Certificate from "./components/certificates/Certificates";
import Contact from "./components/ContactMe.js/Contact";
import Education from "./components/Education/Education";
import Skills from "./components/skills/Skills";
import Footer from "./components/Footer/Footer";
import Project from "./components/Projects/Project";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/certificates" element={<Certificate />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Add the Footer component */}
      </div>
    </BrowserRouter>
  );
}

export default App;
