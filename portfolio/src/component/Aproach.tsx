import React from 'react'
import InfiniteScroll from './AnimatedText'
import profilepic from "../assets/images/20241125_015003.jpg"

type Aproach = {
    image: string;
    para1: string;
    para2: string;
    para3: string;
}

const Aproach: React.FC = () => {
    const aproach: Aproach[] = [
        {
            image: profilepic,
            para1: "DISCOVER AND ANALYSIS",
            para2: "Discover opportunities and refine",
            para3: "strategies for decisions."

        },
        {
            image: profilepic,
            para1: "DISCOVER AND ANALYSIS",
            para2: "Discover opportunities and refine",
            para3: "strategies for decisions."

        },
        {
            image: profilepic,
            para1: "DISCOVER AND ANALYSIS",
            para2: "Discover opportunities and refine",
            para3: "strategies for decisions."

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
            <div className='relative top-65 sm:top-0'>

                <div className=' flex justify-between mt-20 '>
                    <p className=' hidden sm:block'>01</p>
                    <p>//APROACH</p>
                    <p>THREE PHASES</p>
                </div>
                <div className='flex flex-col justify-center items-center sm:mt-24 mt-16'>
                    <h1 className='sm:text-8xl text-2xl text-center sm:tracking-[3px]' >I'M SANJAY GUPTA BASED IN MAHARASHTRA, INDIA.</h1>
                    <p className='text-gray-600 mt-5 sm:text-[30px] text-[12px]'>I create responsive website and maintain</p>
                    <p className='text-gray-600 sm:text-[30px] text-[12px]'> consistency across all devices</p>

<div className='relative bg-checkered grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 w-full items-center sm:my- my-10 border border-[#B2BEB5] h-[60vh] sm:h-[40vh]'>

                        {aproach.map((item, index) => (
<div key={index} className={`flex flex-col justify-center items-center text-center ${index !== 0 ? " border-l border-[#B2BEB5]" : ""} h-full`}>
                                <img src={item.image} className='sm:w-15 sm:h-15 w-10 h-10 rounded-lg' alt="" />
                                <p className='sm:text-3xl text-2xl py-2'>{item.para1}</p>
                                <p className='text-gray-600 sm:text-[15px] text-[10px]'>{item.para2}</p>
                                <p className='text-gray-600 sm:text-[15px] text-[10px]'>{item.para3}</p>
                            </div>
                        ))}
                    </div>

                </div>


            </div>
            <div className='sm:mt-10 mt-60'>
                <InfiniteScroll />

            </div>
        </>
    )
}

export default Aproach