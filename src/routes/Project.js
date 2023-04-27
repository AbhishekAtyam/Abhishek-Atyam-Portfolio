import React from 'react';
import Navbar from '../components/Navbar.js';
import Heroimg2 from '../components/Heroimg2.js';
import Footer from '../components/Footer.js';
import Work from '../components/Work.js';
const Project = () => {
  return (
    <div>
      <Navbar />
        <Heroimg2 heading="Projects" text="Some of my recent projects are mentioned below"/>
        <Work/>
        <Footer />
    </div>
  );
};

export default Project;
