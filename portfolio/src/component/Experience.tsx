import React from 'react'

type Experience = {
    companyName: string
    designation: string
    date: string
    description: string

}

const Experience: React.FC = () => {

    const experience: Experience[] = [{
        companyName: "F60",
        designation: "FRONT-END DEVELOPER INTERN",
        date: "MAY 2025 - JULY 2025",
        description: "Bringing creativity, technical expertise, and a passion for design to every project"
    },

    {
        companyName: "FREELANCE",
        designation: "FRONT-END WEB DEVELOPER",
        date: "2024-PRESENT",
        description: "Bringing creativity, technical expertise, and a passion for design to every project"
    },


    ]

    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    top: '864.7%',
                    left: '0',
                    right: '0',
                    height: '1px',
                    width:"96%",
                    margin:"auto",
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#232023',
                }}
            ></div>
            <div className='relative'>
                <div className=' relative flex justify-between py-10 '>
                    <p className='sm:block hidden'>07</p>
                    <p className='font-bold'>//EXPERIENCE</p>
                    <p>2024-PRESENT</p>
                </div>
                <div className='sm:mt-20 sm:mb-30 '>
                    <p className='text-3xl sm:my-0 mb-10 font-bold'>EXPERIENCE</p>

                    <div className=' flex flex-col justify-end items-end '>

                        {experience.map((item, index) => (
                            <div className={` bg-checkered grid grid-cols-2  sm:grid-rows-3 py-3  items-end  justify-end border-t border-[#232023] sm:w-[60vw] ${index == experience.length - 1 ? "border-y " : ""} `} key={index} >
                                <p className='text-2xl  font-bold'>{item.companyName}</p>
                                <p className='col-start-1 row-start-2 sm:text-[15px] text-[14px] my-2 font-bold'>{item.designation}</p>
                                <p className='col-start-2 row-start-2 text-end sm:text-[18px] text-[14px]' >{item.date}</p>
                                <p className='text-[#4D4D5C] col-start-1 row-start-3 pr-2 sm:text-[18px] text-[14px]'>{item.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            {/* <div>image animated gallary</div> */}

        </div>
    )
}

export default Experience