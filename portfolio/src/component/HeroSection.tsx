// import type { FC } from "react"
import React from 'react'
import Navbar from './Navbar'
import location from "../assets/images/location.svg"
import world from "../assets/images/world.svg"
import verified from "../assets/images/verified.svg"
import Profile from './Profile'
import { easeInOut, motion } from "framer-motion";



type Detail = {
    image: string;
    data1: string;
    data2?: string;
}

const HeroSection: React.FC = () => {

    const detail: Detail[] = [{
        image: location,
        data1: "BASED IN MAHARASHTRA",
        data2: "INDIA"
    },
    {
        image: world,
        data1: "AVAILABLE ALL OVER THE WORLD",
        data2: "WOLDWIDE"
    },
    {
        image: verified,
        data1: "FRONT-END WEB DEVELOPER",
        data2: ""
    },
    ]
    return (
        <div>
            <div className=''
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
            <div className=''
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '20%',
                    right: '0',
                    height: '1393%',
                    width: "0.5px",
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>
            <div className='hidden sm:block'
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    right: '0',
                    height: '1393%',
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
                    height: '1393%',
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

                <motion.h1
                    initial={{ y: -200, opacity: 0, zIndex: -20 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='  leading-[1.25] tracking-[15px] text-[25vw] sm:tracking-[30px]   sm:leading-[1.15]'
                >
                    SANJAY  </motion.h1>




            </div>




<motion.div 
initial={{y:50,opacity:0}}
animate={{y:0,opacity:1}}
transition={{duration:0.6,ease:easeInOut}}
>
            <div className=" relative flex flex-col sm:flex sm:flex-row justify-between sm:items-center h-[15vh] px-10">
                {detail.map((item, idx) => (
                    <div key={idx} className="text-center space-y-1 flex flex-col justify-center items-center sm:py-0 py-7">
                        {item.image && <img className='h-6 w-6' src={item.image} alt={`icon-${idx}`} />}
                        <p>{item.data1}</p>
                        {item.data2 && <p>{item.data2}</p>}
                    </div>
                ))}
            </div>
            </motion.div>

            <Profile />

        </div>
    )
}

export default HeroSection