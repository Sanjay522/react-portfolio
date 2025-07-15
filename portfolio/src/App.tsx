// import { useState } from 'react'
import './App.css'
import AboutMe from './component/AboutMe'
import Aproach from './component/Aproach'
import CustomCursor from './component/Cursor'
import Experience from './component/Experience'
import Footer from './component/Footer'
import HeroSection from './component/HeroSection'
import LetsWorkTogether from './component/LetsWorkTogether'
import Menu from './component/Menu'
// import ImageSelectorGallery from './component/Product'
import ProductPage from './component/Product'
import Project from './component/Project'
import ProjectHead from './component/ProjectHead'
import ProjectPage from './component/ProjectPage'
import Stats from './component/Stats'
import ToolStack from './component/ToolStack'
import VoiceOfSanjay from './component/VoiceOfSanjay'

import { motion } from "framer-motion";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <CustomCursor/>
    <motion.div className='sm:px-12 px-8 '>
      <HeroSection/>
      <Aproach/>
      <ProjectHead/>
      <Project/>
      <AboutMe/>
      <VoiceOfSanjay/>
      <Stats/>
      <Experience/>
      <ToolStack/>
      <LetsWorkTogether/>
      <Footer/>
    <Menu/>
  <ProjectPage/>
      </motion.div>
    </>
  )
}

export default App
