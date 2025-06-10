import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Faqs from './components/Faqs'

const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Project/>
    <Faqs/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
