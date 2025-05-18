import React from 'react'
import example from "../assets/images/20241125_015003.jpg"
import ProjectCard from './ProjectCard';




const projects = [
    {
        title: 'Cricket Score',
        description: 'Project',
        image: example,
        progressIndex: 0,
        height: '70vh',
        width: '45vw',
    },
    {
        title: 'Text Extractor',
        description: 'Project',
        image: example,
        progressIndex: 1,
        height: '48vh',
        width: '30vw',
    },
    {
        title: 'Text Extractor',
        description: 'Project',
        image: example,
        progressIndex: 2,
        height: '60vh',
        width: '50vw',
    },
    {
        title: 'Text Extractor',
        description: 'Project',
        image: example,
        progressIndex: 3,
        height: '50vh',
        width: '30vw',
    },
    {
        title: 'Cricket Score',
        description: 'Project',
        image: example,
        progressIndex: 4,
        height: '70vh',
        width: '45vw',
    },
];

const Project: React.FC = () => {
    return (
        <div className=''>
            <div
                style={{
                    position: 'absolute',
                    top: '360.5%',
                    left: '0',
                    right: '0',
                    height: '1.5px',
                    //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                    backgroundColor: '#B2BEB5',
                }}
            ></div>
            <div className=' relative flex justify-between sm:mt-35 '>
                <p className='hidden sm:block'>02</p>
                <p >//PROJECT</p>
                <p>2004</p>
            </div>

            <div className=' relative flex flex-col sm:flex sm:flex-row justify-between my-15 sm:items-end'>
                <div style={{

                }}>
                    <h1 className='sm:text-9xl text-3xl'>LATEST</h1>
                    <h1 className='sm:text-9xl text-3xl'>PROJECT</h1>

                </div>
                <div className='text-[15px] sm:text-[25px] sm:my-0 my-1'>
                    <p>My creative spirit comes alive in</p>
                    <p>the digital realm.With nimble</p>
                    <p>fingers flying across the device.</p>
                </div>

            </div>
            <div className='sm:block hidden space-y-20'>
                <div className='flex justify-between items-end'>
                    {
                        projects.slice(0, 2).map((p, i) => (
                            <ProjectCard key={i} {...p} />
                        ))
                    }
                </div>
                <div className='flex justify-center'>
                    {projects.slice(2, 3).map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>

                <div className='flex justify-between py-20 items-end'>
                    {projects.slice(3, 5).map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </div>


            <div className='sm:hidden block '>
                <div className='flex flex-col justify-between items-end'>
                    {
                        projects.map((item, index) => (
                            <ProjectCard key={index} image={item.image} title={item.title}
                                description={item.description}
                                progressIndex={item.progressIndex}
                                height={'30vh'}
                                width={"w-full"} />
                        ))
                    }
                </div>

            </div>




            {/* <div className=''>
                <div className='flex justify-between items-end  w-full'>
                    <div className=' relative h-[70vh] w-[45vw]'>
                        <div className='overflow-hidden rounded-lg'>
                            <img src={example} alt="" className='rounded-lg scale-100 h-[60vh] w-auto
                            object-cover
                                      hover:scale-110 duration-300 over ' />

                        </div>

                        <div className='flex justify-between my-2 px-2'>
                            <div className='flex gap-1'>
                                <span className='h-3 w-3 rounded-full bg-black'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                            </div>
                            <div>
                                <h1 className='text-2xl'>Cricket score</h1>
                                <p className='text-gray-500'>Project</p>
                            </div>
                            <p className='text-2xl'>➜</p>
                        </div>

                    </div>
                    <div className=' relative h-[50vh] w-[30vw]'>
                        <div className='overflow-hidden rounded-lg'>
                            <img src={example} alt="" className='rounded-lg scale-100 h-[40vh]
                    hover:scale-110 duration-300 over ' />

                        </div>

                        <div className='flex justify-between my-2 px-2'>
                            <div className='flex gap-1'>
                                <span className='h-3 w-3 rounded-full bg-black'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                            </div>
                            <div>
                                <h1 className='text-2xl'>Text Extracter</h1>
                                <p className='text-gray-500'>Project</p>
                            </div>
                            <p className='text-2xl'>➜</p>
                        </div>
                    </div>

                </div>

                <div className='flex justify-center my-20'>
                    <div className=' relative h-[60vh] w-[50vw]'>
                        <div className='overflow-hidden rounded-lg'>
                            <img src={example} alt="" className='rounded-lg scale-100 h-[60vh] w-auto
                            object-cover
                    hover:scale-110 duration-300 over ' />

                        </div>

                        <div className='flex justify-between my-2 px-2'>
                            <div className='flex gap-1'>
                                <span className='h-3 w-3 rounded-full bg-black'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                            </div>
                            <div>
                                <h1 className='text-2xl'>Text Extracter</h1>
                                <p className='text-gray-500'>Project</p>
                            </div>
                            <p className='text-2xl'>➜</p>
                        </div>
                    </div>

                </div>


                <div className='flex justify-between items-end  w-full py-10'>
                    
                    <div className=' relative h-[50vh] w-[30vw]'>
                        <div className='overflow-hidden rounded-lg'>
                            <img src={example} alt="" className='rounded-lg scale-100 h-[40vh]
                    hover:scale-110 duration-300 over ' />

                        </div>

                        <div className='flex justify-between my-2 px-2'>
                            <div className='flex gap-1'>
                                <span className='h-3 w-3 rounded-full bg-black'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                            </div>
                            <div>
                                <h1 className='text-2xl'>Text Extracter</h1>
                                <p className='text-gray-500'>Project</p>
                            </div>
                            <p className='text-2xl'>➜</p>
                        </div>
                    </div>

                    <div className=' relative h-[70vh] w-[45vw]'>
                        <div className='overflow-hidden rounded-lg'>
                            <img src={example} alt="" className='rounded-lg scale-100 h-[60vh] w-auto
                            object-cover
                                      hover:scale-110 duration-300 over ' />

                        </div>

                        <div className='flex justify-between my-2 px-2'>
                            <div className='flex gap-1'>
                                <span className='h-3 w-3 rounded-full bg-black'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                                <span className='h-3 w-3 rounded-full bg-gray-500'></span>
                            </div>
                            <div>
                                <h1 className='text-2xl'>Cricket score</h1>
                                <p className='text-gray-500'>Project</p>
                            </div>
                            <p className='text-2xl'>➜</p>
                        </div>

                    </div>

                </div>

            </div> */}

        </div>
    )
}

export default Project