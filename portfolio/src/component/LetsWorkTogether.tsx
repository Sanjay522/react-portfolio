import React from 'react'
import example from "../assets/images/20241125_015003.jpg"


const LetsWorkTogether: React.FC = () => {
    return (
        <div className='w-[70vw] flex flex-col justify-center m-auto relative '>
            <div className='my-10'>
                <h1 className='text-9xl text-center'>LET'S WORK</h1>
                <h1 className='text-9xl text-center'> TOGETHER</h1>
            </div>
            <button className='my-10'>CONTACT NOW</button>
            <div className='flex justify-between items-center'>
                <div className=' text-center'>
                    <p>BASED IN MUMBAI,</p>
                    <p className='text-gray-600'>MAHARASHTRA</p>
                </div>
                <img src={example} className='w-[20vw] h-[70vh] rounded-lg object-cover' alt="" />
                <div className=' text-center'>
                    <p>FRONT-END DEVELOPER</p>
                </div>

            </div>

        </div>
    )
}

export default LetsWorkTogether