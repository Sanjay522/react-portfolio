// import { useState } from 'react'
import './App.css'
import AboutMe from './component/AboutMe'
import Aproach from './component/Aproach'
import Experience from './component/Experience'
import HeroSection from './component/HeroSection'
import Project from './component/Project'
import Stats from './component/Stats'
import VoiceOfSanjay from './component/VoiceOfSanjay'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='px-12'>
      <HeroSection/>
      <Aproach/>
      <Project/>
      <AboutMe/>
      <VoiceOfSanjay/>
      <Stats/>
      <Experience/>
      </div>
    </>
  )
}

export default App
