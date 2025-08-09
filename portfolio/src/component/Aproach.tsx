import React from 'react'
import InfiniteScroll from './AnimatedText'
import profilepic from "../assets/images/20241125_015003.jpg"
import { easeInOut, motion } from "framer-motion";


type Aproach = {
    image: string;
    para1: string;
    para2: string;
    para3: string;
    progressIndex:number;
}

const Aproach: React.FC = () => {


    const aproach: Aproach[] = [
        {
            image: profilepic,
            para1: "DISCOVER AND ANALYSIS",
            para2: "Discover opportunities and refine",
            para3: "strategies for decisions.",
            progressIndex:0,

        },
        {
            image: profilepic,
            para1: "Design and Implement",
            para2: "Design and implement solutions",
            para3: "to transform ideas.",
                        progressIndex:1,


        },
        {
            image: profilepic,
            para1: "Deliver and Monitor",
            para2: "Ensure efficient execution and",
            para3: "performance tracking.",
                        progressIndex:2,


        }
    ]

    const text = "I'M SANJAY GUPTA BASED IN MAHARASHTRA, INDIA."
    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: '197%',
                    left: '0',
                    right: '0',
                    height: '1px',
                    width: "96%",
                    margin: "auto",
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#232023',
                }}
            ></div>
            <div
                style={{
                    position: 'absolute',
                    top: '346%',
                    left: '0',
                    right: '0',
                    height: '1px',
                    width: "94%",
                    margin: "auto",
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#232023',
                }}
            ></div>
            <div
                style={{
                    position: 'absolute',
                    top: '372.3%',
                    left: '0',
                    right: '0',
                    height: '1.5px',
                    width: "94%",
                    margin: "auto",
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#232023',
                }}
            ></div>
            <div className='relative top-65 sm:top-0'>

                <div className=' flex justify-between mt-11 text-[15px] '>
                    <p className=' hidden sm:block'>01</p>
                    <p className='font-semibold'>//APROACH</p>
                    <p className='text-gray-500'>THREE PHASES</p>
                </div>
                <div className='flex flex-col justify-center items-center sm:mt-24 mt-16'>
                    <div className='flex flex-wrap justify-center'>
                        {text.split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }} // ✅ triggers only when in viewport
                                transition={{ delay: index * 0.15, ease: easeInOut }}
                                viewport={{ once: true, amount: 0.6 }} // adjust amount if needed
                                className='sm:text-8xl text-2xl text-center mx-2 font-semibold tracking-tight'
                            >
                                {word}
                            </motion.span>
                        ))}

                    </div>
                    <p className='text-[#4D4D5C] mt-5 sm:text-[20px] text-[12px]'>I create responsive website and maintain</p>
                    <p className='text-[#4D4D5C] sm:text-[20px] text-[12px]'> consistency across all devices</p>
                    <div className='flex w-[45vw] justify-between items-center my-20'>
                        <p className=' rounded-full text-center bg-gray-700 px-3 py-1'>1</p>
                        <div className='h-[1px] w-[35vw] bg-gray-500 mx-4 '></div>
                        <p className=' rounded-full px-3 py-1 text-center bg-gray-700  '>2</p>
                        <div className='h-[1px] w-[35vw] bg-gray-500 mx-4'></div>
                        <p className=' rounded-full px-3 py-1 text-center bg-gray-700'>3</p>
                    </div>

                    <div className='relative bg-checkered grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 w-full items-center sm:my- my-10 border-[0.5px] border-[#232023] h-[60vh] sm:h-[40vh]'>

                        {aproach.map((item, index) => (
                            <div key={index} className={`flex flex-col justify-center items-center text-center ${index !== 0 ? " border-l border-[#232023]" : ""} h-full`}>
                                <div className="hidden sm:flex gap-1 my-5  ">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 sm:h-3 sm:w-3 rounded-full ${i <= item.progressIndex ? "bg-white" : "bg-[#232023]"
                }`}
            ></span>
          ))}
        </div>
        <div className='flex gap-2 my-5'>
                                <img src={item.image} className='sm:w-10 sm:h-10 w-10 h-10 rounded-lg object-cover' alt="" />
                                <img src={item.image} className='sm:w-10 sm:h-10 w-10 h-10 rounded-lg object-cover' alt="" />
                                <img src={item.image} className='sm:w-10 sm:h-10 w-10 h-10 rounded-lg object-cover' alt="" />

        </div>
                                <p className='sm:text-3xl text-2xl py-2 font-semibold tracking-tight'>{item.para1}</p>
                                <p className='text-[#4D4D5C] sm:text-[20px] text-[10px]'>{item.para2}</p>
                                <p className='text-[#4D4D5C] sm:text-[20px] text-[10px]'>{item.para3}</p>
                            </div>
                        ))}
                    </div>

                </div>


            </div>
            <div className='sm:mt-33 mt-60'>
                <InfiniteScroll />

            </div>
        </>
    )
}

export default Aproach