import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import AboutBanner from './AboutBanner'
import FeaturedAgents from './FeaturedAgents'
import TestimonialsPage from './TestimonialsPage'
import FaqPage from './FaqPage'
import SpotlightProperties from './SpotlightProperties'



const About = () => {
  return (
    <>
   <Navbar/>
   <AboutBanner/>
   <SpotlightProperties/>
   <FeaturedAgents/>
   <TestimonialsPage/>
   <FaqPage/>
   <Footer/>
    </>
  )
}

export default About