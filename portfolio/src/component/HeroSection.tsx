// import type { FC } from "react"
import React from 'react'
import Navbar from './Navbar'

const HeroSection:React.FC = () => {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: '15%', 
          left: '0',
          right: '0',
          height: '1.5px',
        //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
          backgroundColor: '#B2BEB5',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '0', 
          left: '25%',
          right: '0',
          height: '200%',
          width:"0.5px",
        //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
          backgroundColor: '#B2BEB5',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '0', 
          left: '50%',
          right: '0',
          height: '200%',
          width:"1px",
        //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
          backgroundColor: '#B2BEB5',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '0', 
          left: '75%',
          right: '0',
          height: '200%',
          width:"1px",
        //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
          backgroundColor: '#B2BEB5',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '80%', 
          left: '0',
          right: '0',
          height: '2px',
        //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
          backgroundColor: '#B2BEB5',
        }}
      ></div>
      <Navbar/>
      <div className="relative  flex items-center justify-center">
<h1 className="text-[400px] leading-none text-center"style={{
    fontSize:'32vw',
    lineHeight:'0.97',
    letterSpacing:'5px',
    fontStretch:'expanded'
}} >SANJAY</h1>
</div>

    </div>
  )
}

export default HeroSection