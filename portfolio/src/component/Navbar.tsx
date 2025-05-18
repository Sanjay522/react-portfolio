import React from 'react'

const Navbar:React.FC = () => {
    // const nav = []
  return (
    <div className='relative flex justify-between h-[15svh] sm:text-2xl items-center'>
        <h1 className=''>Local</h1>
        <p className='pl-7'>Menu</p>
        <button className='py-0.5 px-2 border-2 border-black sm:border-3 border-black sm:py-2 sm:px-10 rounded-full '>Conatact</button>

    </div>
  )
}

export default Navbar