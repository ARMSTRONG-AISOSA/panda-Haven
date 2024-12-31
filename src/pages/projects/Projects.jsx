import React from 'react';
import './projects.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>Projects Page</h1>
        <Footer />
      </div>
    </div>
  )
}

export default Projects
