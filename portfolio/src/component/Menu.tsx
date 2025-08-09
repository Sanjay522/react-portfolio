import React from 'react'
import BottomData from './BottomData'
import Navbar from './Navbar'


type Data = string

const Menu = () => {
    const data:Data[] = ["HOME","ABOUT","CONTACT","PROJECT"]
  return (
   <>
  <div className="w-[90vw] mx-auto">
    <Navbar />
  </div>
  <div className="h-[80svh] w-[90vw] mx-auto flex flex-col items-center">
    {data.map((item) => (
      <p className="text-[8rem] font-bold leading-none tracking-wide hover:text-gray-800">
        {item}
      </p>
    ))}
  </div>
  <BottomData />
</>
  )
}

export default Menu