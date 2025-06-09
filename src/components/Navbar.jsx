// import { Link } from 'react-router-dom';
import React, { useState } from 'react'

import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";






const Navbar = () => {
   /* const [isNavShowing , setIsNavShowing] = useState(false); */
    const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => setIsOpen(!isOpen);

 
  return (
    <nav>
      <div className="container nav__container">
        <div className="logo">Ade <span>ko</span></div>

       {/*  <ul className={`nav__links ${isNavShowing ? 'active' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="#/testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul> */}


         <ul className={`nav__links ${isOpen ? "active" : "close"}`}>

          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#project" onClick={toggleMenu}>Project</a></li>
          <li><a href="#testimonial" onClick={toggleMenu}>Testimonial</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>

        <div className="menu-toggle" onClick={toggleMenu}>
          {

         
           isOpen ? <span className="bar" ><IoMdClose /></span> :
          <span className="bar" ><IoMdMenu /></span>
           }
        </div>

  
      </div>
    </nav>
  )
}

export default Navbar