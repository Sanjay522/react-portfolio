import React from 'react'

type Tool = {
    language: string
    languagetitle: string
    efficiency: string
    languagedescription: string

}

const ToolStack: React.FC = () => {

    const tool: Tool[] = [
        {
            language: "JAVA SCRIPT",
            languagetitle: "PROGRAMMING LANGUAGE",
            efficiency: "80%",
            languagedescription: "java script is great programming language for website and all"
        }

    ]
    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    top: '957%',
                    left: '0',
                    right: '0',
                    height: '1px',
                    width:"96%",
                    margin:"auto",
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#232023',
                }}
            ></div>
            <div className='relative '>
                <div className=' relative flex justify-between  '>
                    <p className='sm:block hidden'>08</p>
                    <p className='font-bold'>//TOOL STACK</p>
                    <p>2024-PRESENT</p>
                </div>

                <div className='sm:mt-20 sm:mb-30'>

                    <p className='text-3xl sm:my-0 mb-10 font-bold'>TOOL STACK</p>

                    <div className=' flex flex-col justify-end items-end '>

                        {tool.map((item, index) => (
                            <div className={` bg-checkered grid grid-cols-2  sm:grid-rows-3 py-3  items-end  justify-end border-t border-[#232023] sm:w-[60vw] ${index == tool.length - 1 ? "border-y " : ""} `} key={index} >
                                <p className='text-2xl font-bold'>{item.language}</p>
                                <p className='col-start-1 row-start-2 sm:text-[15px] text-[14px] font-bold my-1'>{item.languagetitle}</p>
                                <p className='col-start-2 row-start-2 text-end sm:text-[18px] text-[14px]' >{item.efficiency}</p>
                                <p className='text-[#4D4D5C] col-start-1 row-start-3 pr-2 sm:text-[18px] text-[14px]'>{item.languagedescription}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ToolStack