// import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import About from './components/About';
import Testimonial from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'


function App() {


  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <Navbar />
  <Hero />
  <Courses />
  <About />
  <Testimonial />
  <Contact />
  <Footer />
</div>
    </>
  )
}

export default App
