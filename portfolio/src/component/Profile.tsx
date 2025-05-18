import React from 'react'
import profilepic from "../assets/images/1000131015.png"

const Profile:React.FC = () => {
  return (
    <div className='top-65 sm:top-0 relative w-full sm:h-auto h-[50vh] flex justify-center items-center bg-gradient-to-r from-red-900 via-slate-800 to-cyan-900 rounded-lg my-10'>
        <img src={profilepic} alt=""  className='sm:h-[45vw] sm:w-[45vw]'/>
    </div>
  )
}

export default Profile