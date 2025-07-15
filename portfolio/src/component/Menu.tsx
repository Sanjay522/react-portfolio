import React from 'react'
import BottomData from './BottomData'


type Data = string

const Menu = () => {
    const data:Data[] = ["HOME","ABOUT","CONTACT","PROJECT"]
  return (
    <>
    <div className='h-[80svh] w-[100%] flex flex-col  items-center'>
        {data.map((item)=>(
            <p className='text-[8rem] leading-none tracking-wide  hover:text-gray-800'>{item}</p>
        ))}
    </div>
    <BottomData/>
    </>
  )
}

export default Menu