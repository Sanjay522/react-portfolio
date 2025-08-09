import React from 'react'
import Project from './Project'
import LetsWorkTogether from './LetsWorkTogether'
import Footer from './Footer'

const ProjectPage = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center py-20'>
<p>(2024-2025)</p>
        <h1 className='text-9xl'>PROJECTS</h1>
      </div>
      
        <Project/>
<LetsWorkTogether/>
<Footer/>
    </div>
  )
}

export default ProjectPage