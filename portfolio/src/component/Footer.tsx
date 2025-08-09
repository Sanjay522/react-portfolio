import React from 'react'

const Footer: React.FC = () => {
    return (
        <div>
            <div className="relative  flex items-center justify-center ">
                 <h1 className='  leading-[1] tracking-tight text-[360px] font-semibold   sm:leading-[0.8]'
                >SANJAY</h1>

                {/* <h1 className="  "
                 style={{
                    fontSize: '25vw',
                    lineHeight: '1.15',
                    letterSpacing: '30px',
                    fontStretch: 'expanded'
                }} >SANJAY</h1> */}
                
            </div>
            <div className='sm:flex sm:flex-row flex flex-col sm:justify-between justify-center items-center text-2xl font-semibold tracking-tight'>
                <button className='sm:pl-15 py-1'>© Sanjay Gupta</button>
                <button className='sm:pr-30 py-1'>BACK TO TOP</button>

            </div>
        </div>
    )
}

export default Footer