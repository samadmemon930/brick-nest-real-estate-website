import React from 'react'
import Navbar from "../../Navbar"
import ContactMap from './ContactMap'
import ContactDetails from './ContactDetails'
import ContactBanner from './ContactBanner'
import Footer from "../../Footer"


const Contact = () => {
  return (
    <>
    <Navbar/>
    <ContactBanner/>
    <ContactMap/>
    <ContactDetails/>
    <Footer/>
    </>
  )
}

export default Contact