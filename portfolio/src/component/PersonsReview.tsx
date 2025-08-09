import React from 'react'


const PersonsReview = ({ name, designation, profileImage, icon, description }) => {
    return (
        <div className='border rounded-2xl w-[35vw] p-5 border-[#232023] bg-black'>
            <div className='flex justify-between items-center'>
                <img src={profileImage} alt="" className='h-15 w-15 object-cover rounded-sm' />
                <div className='w-[20vw]'>
                    <p className='text-2xl font-bold'>{name}</p>
                    <p className='text-gray-500'>{designation}</p>
                </div>
                <img src={icon} alt="" />
            </div>
            <div className='border border-[#232023] rounded-2xl p-5 mt-5 text-2xl bg-checkered w-[30vw] font-bold '>
                <p className="line-clamp-5 whitespace-pre-line break-all ">
                    {description}
                </p>
            </div>



        </div>
    )
}

export default PersonsReview