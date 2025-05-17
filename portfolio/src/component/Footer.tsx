import React from 'react'

const Footer: React.FC = () => {
    return (
        <div>
            <div className="relative  flex items-center justify-center">
                <h1 className="text-[400px] leading-none text-center  font-bold" style={{
                    fontSize: '21vw',
                    lineHeight: '1.15',
                    letterSpacing: '60px',
                    fontStretch: 'expanded'
                }} >SANJAY</h1>
            </div>
            <div className='flex justify-between text-2xl'>
                <button className='pl-15'>© Sanjay Gupta</button>
                <button className='pr-30'>BACK TO TOP</button>

            </div>
        </div>
    )
}

export default Footer