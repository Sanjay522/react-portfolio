import { div, p } from 'framer-motion/client';
import React from 'react'

type Stats = {
    number:string,
    name:string
}



const Stats: React.FC = () => {
  const  stats:Stats[] = [
    {
        number: "60+",
        name: "GLOBAL CLIENTS"
    },
    {
        number: "15+",
        name: "PROJECTS COMPLETED"
    },
    {
        number: "4+",
        name: "YEARS OF EXPERIENCE"
    },
     {
        number: "4+",
        name: "YEARS OF EXPERIENCE"
    }
];
    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    top: '964%',
                    left: '0',
                    right: '0',
                    height: '1.5px',
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>
            <div>
                <div className=' relative flex justify-between  '>
                    <p className='hidden sm:block'>05</p>
                    <p>//STATS</p>
                    <p>FUN FACT</p>
                </div>
                <div className= ' relative bg-checkered grid grid-cols-2 gap-5 sm:grid-cols-4 w-full place-items-center border-[#B2BEB5] border-y my-20  '>
                    {stats.map((item,index)=>(
                        <div key={index} className='relative p-5'> 
                        <p className='sm:text-9xl text-7xl'>{item.number}</p>
                        <p className='text-gray-600 text-[12px] sm:text[16px]'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stats