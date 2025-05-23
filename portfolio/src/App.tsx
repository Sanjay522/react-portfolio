// import { useState } from 'react'
import './App.css'
import AboutMe from './component/AboutMe'
import Aproach from './component/Aproach'
import Experience from './component/Experience'
import Footer from './component/Footer'
import HeroSection from './component/HeroSection'
import LetsWorkTogether from './component/LetsWorkTogether'
import Project from './component/Project'
import Stats from './component/Stats'
import ToolStack from './component/ToolStack'
import VoiceOfSanjay from './component/VoiceOfSanjay'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='sm:px-12 px-8'>
      <HeroSection/>
      <Aproach/>
      <Project/>
      <AboutMe/>
      <VoiceOfSanjay/>
      <Stats/>
      <Experience/>
      {/* add some animationn here  */}
      <ToolStack/>
      <LetsWorkTogether/>
      <Footer/>
      </div>
    </>
  )
}

export default App
