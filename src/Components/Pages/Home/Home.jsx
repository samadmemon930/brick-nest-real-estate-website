import React from 'react'
import HomePage from './HomePage'
import Navbar from '../../Navbar'
import ServicePage from './ServicePage'
import SpotlightProperties from './SpotlightProperties'
import CollectionPage from './CollectionPage'
import AgentsPage from './AgentsPage'
import LatestProperties from './LatestProperties'
import ExplorePage from './ExplorePage'
import BlogPage from "./BlogPage"
import Footer from '../../Footer'


const Home = () => {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <ServicePage/>
    <SpotlightProperties/>
    <CollectionPage/>
    <AgentsPage/>
    <LatestProperties/>
    <ExplorePage/>
    <BlogPage/>
    <Footer/>
    </>
  )
}

export default Home