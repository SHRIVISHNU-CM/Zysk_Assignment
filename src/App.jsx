import React from 'react'
import Hero from './components/Hero'
import Company from './components/Company'
import Section3 from './components/section3'
import Section4 from './components/Section4'
import Freetrail from './components/Freetrail'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Questions from './components/Questions'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Company />
      <Section3 />
      <Section4 />
      <Questions />
      <Blog />
      <Freetrail />
      <Footer />
    </>
  )
}

export default App
