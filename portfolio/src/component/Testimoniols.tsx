import React from 'react'
import PersonsReview from './PersonsReview'
import TestimoniolsAnimation from './TestimoniolsAnimation'

const Testimoniols = () => {
  return (
    <div>
        <div className=' relative flex justify-between  '>
                    <p className='sm:block hidden'>011</p>
                    <p className='font-bold'>//TESTIMONIAL</p>
                    <p>VOICES</p>
                </div>  

                <div className='flex flex-col justify-center items-center text-3xl my-20 font-bold'>
                    <p>TRUSTED BY</p>
                    <p>INTERNATIONAL BRANDS</p>
                </div>
                <TestimoniolsAnimation/>
    </div>
  )
}

export default Testimoniols