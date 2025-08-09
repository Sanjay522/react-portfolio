import React from 'react'
import FloatingImages from './FloatAnimation'

const VoiceOfSanjay: React.FC = () => {
    return (
        <div className=''>
            <div
                style={{
                    position: 'absolute',
                    top: '690%',
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
                <div className=' relative flex justify-between  '>
                    <p className='hidden sm:block'>04</p>
                    <p className='font-bold'>//VOICE OF SANJAY</p>
                    <p>SINCE 2024</p>
                </div>
                <div className='sm:text-5xl text-2xl text-center my-[35vh] font-bold'>
                    <p>A LOS ANGELES-BASED INDEPENDENT FRONTEND DEVELOPER,</p>
                    <p>SPECIALIZING IN HELPING BUSINESS AND INDIVIDUALS TURN IDEAS INTO </p>
                    <p>SEAMLESS,HIGH-IMPACT DIGITAL EXPERIENCE THROUGH MODERN WEB TECHNOLOGIES.</p>
                </div>
                {/* <FloatingImages/> */}
            </div>


        </div>
    )
}

export default VoiceOfSanjay