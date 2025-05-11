import React from 'react'

const Navbar:React.FC = () => {
    // const nav = []
  return (
    <div className='relative flex justify-between h-[15svh] text-2xl items-center'>
        <h1 className=''>Local</h1>
        <p className=''>Menu</p>
        <button className=' border-3 border-black py-2 px-10 rounded-full '>Conatact</button>

    </div>
  )
}

export default Navbar