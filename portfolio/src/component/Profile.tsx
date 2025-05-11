import React from 'react'
import profilepic from "../assets/images/1000131015.png"

const Profile:React.FC = () => {
  return (
    <div className='relative w-full flex justify-center items-center bg-gradient-to-r from-red-900 via-slate-800 to-cyan-900 rounded-lg my-10'>
        <img src={profilepic} alt=""  className='h-[45vw] w-[45vw]'/>
    </div>
  )
}

export default Profile