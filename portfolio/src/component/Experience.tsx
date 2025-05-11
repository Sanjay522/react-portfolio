import React from 'react'

type Experience = {
    companyName:string
    designation:string,
    date: string,
    description:string

}

const Experience: React.FC = () => {

    const experience:Experience[]=[{
        companyName:"FREELANCE",
    designation:"FRONT-END WEB DEVELOPER",
    date: "2024-PRESENT",
    description:"Bringing creativity, technical expertise, and a passion for design to every project"
    },
    
    {companyName:"FREELANCE",
    designation:"FRONT-END WEB DEVELOPER",
    date: "2024-PRESENT",
    description:"Bringing creativity, technical expertise, and a passion for design to every project"
    },

    {companyName:"FREELANCE",
    designation:"FRONT-END WEB DEVELOPER",
    date: "2024-PRESENT",
    description:"Bringing creativity, technical expertise, and a passion for design to every project"
    },
]

    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    top: '1020%',
                    left: '0',
                    right: '0',
                    height: '1.5px',
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>
            <div className='relative'>
                <div className=' relative flex justify-between py-8 '>
                    <p>07</p>
                    <p>//EXPERIENCE</p>
                    <p>2024-PRESENT</p>
                </div>
                <p className='text-3xl'>EXPERIENCE</p>

                <div className=' flex flex-col justify-end items-end '>

                    {experience.map((item,index)=>(
 <div className={` bg-checkered grid grid-cols-2  grid-rows-3 py-3  items-end  justify-end border-t border-gray-600 w-[60vw] ${index == experience.length-1?"border-y ":""} `} key={index} >
 <p className='text-2xl py-1'>{item.companyName}</p>
 <p className='col-start-1 row-start-2'>{item.designation}</p>
 <p className='col-start-2 row-start-2 text-end' >{item.date}</p>
 <p className='text-gray-600 col-start-1 row-start-3 pr-2'>{item.description}</p>
</div>
                    ))}
                   
                </div>
            </div>

        </div>
    )
}

export default Experience