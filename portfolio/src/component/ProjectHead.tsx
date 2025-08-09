import React from 'react'
import { easeInOut, motion } from "framer-motion";


const ProjectHead = () => {
  return (
    <div>
    <div
                    style={{
                        position: 'absolute',
                        top: '391.3%',
                        left: '0',
                        right: '0',
                        height: '1px',
                        width:"96%",
                        margin:"auto",
                        //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                        backgroundColor: '#232023',
                    }}
                ></div>
                <div className=' relative flex justify-between sm:mt-35 '>
                    <p className='hidden sm:block'>02</p>
                    <p className='font-semibold' >//PROJECT</p>
                    <p className='text-gray-500'>2004</p>
                </div>
    
                <div className=' relative flex flex-col sm:flex sm:flex-row justify-between my-15 sm:items-end'>
                    <div style={{
    
                    }}>
                        <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // ✅ triggers only when in viewport
        transition={{ delay: 0.15, ease: easeInOut }}
        viewport={{ once: true, amount: 0.6 }} // adjust amount if needed
        className='sm:text-8xl text-2xl text-center sm:tracking-[3px] mx-1'
      >
         <h1 className='sm:text-9xl text-3xl font-semibold'>LATEST</h1>
      </motion.div>
       <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // ✅ triggers only when in viewport
        transition={{ delay: 0.5, ease: easeInOut }}
        viewport={{ once: true, amount: 0.6 }} // adjust amount if needed
        className='sm:text-8xl text-2xl text-center sm:tracking-[3px] mx-1'
      >
                          <h1 className='sm:text-9xl text-3xl font-semibold tracking-tight'>PROJECT</h1>
      </motion.div>
    
                       
    
                    </div>
                    <div className='text-[12px] sm:text-[17px] sm:my-0 my-1'>
                        <p>My creative spirit comes alive in</p>
                        <p>the digital realm.With nimble</p>
                        <p>fingers flying across the device.</p>
                    </div>
    
                </div>
                </div>
  )
}

export default ProjectHead