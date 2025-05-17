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
                    top: '1110%',
                    left: '0',
                    right: '0',
                    height: '1.5px',
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>
            <div className='relative'>
                <div className=' relative flex justify-between py-8 '>
                    <p>08</p>
                    <p>//TOOL STACK</p>
                    <p>2024-PRESENT</p>
                </div>

<div className='mt-20 mb-30'>

                    <p className='text-3xl'>TOOL STACK</p>

                    <div className=' flex flex-col justify-end items-end '>

                        {tool.map((item, index) => (
                            <div className={` bg-checkered grid grid-cols-2  grid-rows-3 py-3  items-end  justify-end border-t border-gray-600 w-[60vw] ${index == tool.length - 1 ? "border-y " : ""} `} key={index} >
                                <p className='text-2xl py-1'>{item.language}</p>
                                <p className='col-start-1 row-start-2'>{item.languagetitle}</p>
                                <p className='col-start-2 row-start-2 text-end' >{item.efficiency}</p>
                                <p className='text-gray-600 col-start-1 row-start-3 pr-2'>{item.languagedescription}</p>
                            </div>
                        ))}

                    </div>
                    </div>
                </div>

            </div>
            )
}

            export default ToolStack