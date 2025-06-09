import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skill/Skill";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import Project from "./components/Project/Project";
import Qualification from "./components/Qualification/Qualification";
import Footer from "./components/Footer/Footer";
import Skill from "./components/Skill/Skill";

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <AboutMe />
    <Service />
    <Project />
    <Qualification/>
    <Skill/>
    <Contact/>
    <Footer />
    </div>
  );
}

export default App;
