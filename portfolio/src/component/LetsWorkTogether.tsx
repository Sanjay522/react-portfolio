import React from 'react'
import example from "../assets/images/20241125_015003.jpg"


const LetsWorkTogether: React.FC = () => {
    return (
        <div className='sm:w-[70vw] sm:flex flex flex-col sm:justify-center sm:m-auto relative items-center mt-10 '>
            <div className='sm:my-10 my-5'>
                <h1 className='sm:text-9xl text-center text-5xl font-bold'>LET'S WORK</h1>
                <h1 className='sm:text-9xl text-center text-5xl font-bold'> TOGETHER</h1>
            </div>
            <button className='my-10 border-2 rounded-full px-5 py-2  font-bold'>CONTACT NOW</button>
            <div className="flex justify-between items-center w-full sm:w-[70vw]">
  <div className="hidden sm:block text-center">
    <p className='font-bold'>BASED IN MUMBAI,</p>
    <p className="text-gray-600">MAHARASHTRA</p>
  </div>
  <img
    src={example}
    className="sm:w-[20vw] sm:h-[70vh] h-[50vh] rounded-lg object-cover"
    alt=""
  />
  <div className="hidden sm:block text-center">
    <p className='font-bold'>FRONT-END DEVELOPER</p>
  </div>
</div>
            <div className='text-2xl text-center sm:my-10  my-8 font-bold'>
                <p>BASED IN INDIA, I AM AN INNOVATIVE DEVELOPER AND DESINER. MY </p>
                <p>PASSION FOR MINIMALIST AESTHETICS,ELEGANT TYPOGRAPHY, AND</p>
                <p>INTUITIVE DESIGN EVIDENT IN MY WORK.</p>
            </div>
            <div className='text-2xl sm:flex sm:flex-row flex flex-col  justify-center items-center font-bold'>
                <button className='p-5 hover:underline'>FACEBOOK 🡭</button>
                <button className='p-5 hover:underline'>LINKEDIN 🡭</button>
                <button className='p-5 hover:underline'>INSTAGRAM 🡭</button>
            </div>

        </div>
    )
}

export default LetsWorkTogether