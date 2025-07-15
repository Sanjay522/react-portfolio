import React from 'react'
import { motion } from "framer-motion";


const Navhead = () => {
  return (
<motion.div
    initial={{ y: -150, opacity: 0, zIndex:10 }}
    animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    className='relative flex justify-between h-[15svh] sm:text-2xl items-center  '
  >
        <h1 className=''>Local</h1>
        <p className='pl-7'>Menu</p>
        <button  className='py-0.5 px-2 border-2 border-black sm:border-3  sm:py-2 sm:px-10 rounded-full '>Conatact</button>
</motion.div>  )
}

export default Navhead