// import type { FC } from "react"
import React from 'react'
import Navbar from './Navbar'
import location from "../assets/images/location.svg"
import world from "../assets/images/world.svg"
import verified from "../assets/images/verified.svg"
import Profile from './Profile'


type Detail = {
    image:string;
    data1:string;
    data2?:string;
}

const HeroSection: React.FC = () => {

    const detail:Detail[] = [{
        image:location,
        data1:"BASED IN MAHARASHTRA",
        data2:"INDIA"
    },
    {
        image:world,
        data1:"AVAILABLE ALL OVER THE WORLD",
        data2:"WOLDWIDE"
    },
    {
        image:verified,
        data1:"FRONT-END WEB DEVELOPER",
        data2:""
    },
]
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
                    left: '20%',
                    right: '0',
                    height: '1500%',
                    width: "0.5px",
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
                    height: '1500%',
                    width: "1px",
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '80%',
                    right: '0',
                    height: '1500%',
                    width: "1px",
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>
            <div
                style={{
                    position: 'absolute',
                    top: '75%',
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
                    top: '92%',
                    left: '0',
                    right: '0',
                    height: '1.5px',
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>
            


            <Navbar />
            <div className="relative  flex items-center justify-center">
                <h1 className="text-[400px] leading-none text-center " style={{
                    fontSize: '25vw',
                    lineHeight: '1.15',
                    letterSpacing: '30px',
                    fontStretch: 'expanded'
                }} >SANJAY</h1>
            </div>


           
            <div className=" relative flex justify-between items-center h-[15vh] px-10">
        {detail.map((item, idx) => (
          <div key={idx} className="text-center space-y-1 flex flex-col justify-center items-center">
            {item.image && <img className='h-6 w-6' src={item.image} alt={`icon-${idx}`} />}
            <p>{item.data1}</p>
            {item.data2 && <p>{item.data2}</p>}
          </div>
        ))}
      </div>

            <Profile/>

        </div>
    )
}

export default HeroSection