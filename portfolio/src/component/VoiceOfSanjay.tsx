import React from 'react'

const VoiceOfSanjay: React.FC = () => {
    return (
        <div className=''>
            <div
                style={{
                    position: 'absolute',
                    top: '864%',
                    left: '0',
                    right: '0',
                    height: '1.5px',
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>
            <div className='relative'>
                <div className=' relative flex justify-between  '>
                    <p className='hidden sm:block'>04</p>
                    <p>//VOICE OF SANJAY</p>
                    <p>SINCE 2024</p>
                </div>
                <div className='sm:text-5xl text-2xl text-center my-[35vh]'>
                    <p>A Los Angeles-based independent frontend developer,</p>
                    <p>specializing in helping businesses and individuals turn their ideas into </p>
                    <p>seamless,high-impact digital experiences through modern web technologies.</p>
                </div>
            </div>


        </div>
    )
}

export default VoiceOfSanjay