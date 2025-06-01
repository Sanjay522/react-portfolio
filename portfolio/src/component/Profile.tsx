import React from 'react'
import profilepic from "../assets/images/1000131015.png"
import { easeIn, motion } from 'framer-motion'

const Profile:React.FC = () => {
  return (
    <motion.div
    initial={{y:100,opacity:1}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.6,ease:easeIn}}
    >
    <div className='top-65 sm:top-0 relative w-full sm:h-auto h-[50vh] flex justify-center items-center bg-gradient-to-r from-red-900 via-slate-800 to-cyan-900 rounded-lg my-10'>
        <img src={profilepic} alt=""  className='sm:h-[45vw] sm:w-[45vw]'/>
    </div>
    </motion.div>
  )
}

export default Profile