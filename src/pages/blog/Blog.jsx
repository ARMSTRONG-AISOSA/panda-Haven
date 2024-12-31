import React from 'react';
import './blog.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';


const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>Blog</h1>
        <Footer />
      </div>
    </div>
  )
}

export default Blog
