import React from 'react'
import pic from "../assets/images/20250311_073546.jpg"

const AboutMe: React.FC = () => {
    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    top: '660%',
                    left: '0',
                    right: '0',
                    height: '1.5px',
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>

            <div className=' relative flex justify-between  '>
                <p>02</p>
                <p>//WHO AM I</p>
                <p>SINCE 2024</p>
            </div>
            <div className='flex justify-center flex-col items-center my-20 space-y-2'>
                <h1 className='text-7xl'>MORE ABOUT</h1>
                <h1 className='text-8xl'>SANJAY</h1>
            </div>
            <div className='relative flex justify-center'>
                <img src={pic} className='h-[100vh] w-[30vw] object-cover rounded-lg ' alt="" />
            </div>
            <div className=' relative flex flex-col justify-center items-center mb-20'>
                <div className='text-2xl text-center py-10'>
                    <p>I'M A VISIONARY FRONTEND WEB DEVELOPER BASED IN THE INDIA.SPECIALIZING IN CREATING ENGAGING,</p>
                    <p>HIGH-PERFORMANCE USER INTERFACES THAT SEAMLESSLY BLEND AESTHETICS WITH FUNCTIONALITY.</p>
                </div>
                <div className='text-gray-600 text-center '>
                    <p>
                        With a strong foundation in modern web technologies and a keen eye for design, I bring digital experiences to life</p>
                    <p>that are both visually compelling and intuitively interactive.
                    </p>
                </div>
                <button className='border-2 rounded-full px-8 py-3 my-10 cursor-pointer '>DOWNLOAD RESUME</button>

            </div>
        </div>
    )
}

export default AboutMe