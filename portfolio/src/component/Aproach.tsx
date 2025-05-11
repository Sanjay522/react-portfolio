import React from 'react'
import InfiniteScroll from './AnimatedText'
import profilepic from "../assets/images/20241125_015003.jpg"
import { div } from 'framer-motion/client';

type Aproach={
    image:string;
    para1:string;
    para2:string;
    para3:string;
}

const Aproach: React.FC = () => {
    const aproach:Aproach[] = [
        {image:profilepic,
            para1:"DISCOVER AND ANALYSIS",
            para2:"Discover opportunities and refine",
            para3:"strategies for decisions."

        },
        {image:profilepic,
            para1:"DISCOVER AND ANALYSIS",
            para2:"Discover opportunities and refine",
            para3:"strategies for decisions."

        },
        {image:profilepic,
            para1:"DISCOVER AND ANALYSIS",
            para2:"Discover opportunities and refine",
            para3:"strategies for decisions."

        }
    ]
    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: '200%',
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
                    top: '316%',
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
                    top: '342.5%',
                    left: '0',
                    right: '0',
                    height: '1.5px',
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>
            <div className='relative'>

                <div className=' flex justify-between mt-20 '>
                    <p>01</p>
                    <p>//APROACH</p>
                    <p>THREE PHASES</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-25'>
                    <h1 className='text-8xl text-center' style={{ letterSpacing: "3px" }}>I'M SANJAY GUPTA BASED IN MAHARASHTRA, INDIA.</h1>
                    <p className='text-gray-600 mt-5'>I create responsive website and maintain</p>
                    <p className='text-gray-600'> consistency across all devices</p>

                     <div className='relative bg-checkered grid grid-cols-3 w-full  my-15 border  border-[#B2BEB5] h-[40vh] w-full'>
                       
                    {aproach.map((item,index)=>(
                        <div key={index} className={`flex flex-col justify-center items-center   ${index !==0?" border-l border-[#B2BEB5] h-full" :""} `}>
                        <img src={item.image} className='w-15 h-15 rounded-lg'  alt="" />
                        <p className='text-3xl py-2'>{item.para1}</p>
                        <p className='text-gray-600'>{item.para2}</p>
                        <p className='text-gray-600'>{item.para3}</p>
                    </div>
                    ))}
                    </div> 

                </div>

               
            </div>
            <div className='mt-10'>
            <InfiniteScroll />

            </div>
        </>
    )
}

export default Aproach