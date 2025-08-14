import React, { useState } from 'react'
import { motion } from "framer-motion";


const Navhead = () => {
  const [isOpen,setIsOpen] = useState(false)

  return (
<motion.div
    initial={{ y: -150, opacity: 0, zIndex:10 }}
    animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    className='relative flex justify-between h-[15svh]  items-center    '
  >
<button onClick={()=>setIsOpen} className="px-4 py-2 bg-gray-200 rounded-md">
      {isOpen ? <h1>CANCEL</h1> : <h1>MENU</h1>}
    </button>        <p className=''></p>
        <button  className='py-0.5 px-2 border-2 border-black sm:border-3  sm:py-2 sm:px-10 rounded-full '>Conatact</button>
</motion.div>  )
}

export default Navhead