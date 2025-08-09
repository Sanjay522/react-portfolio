import React from 'react'
import { motion } from 'framer-motion'

const logos = ['HTML', 'CSS', 'JAVA SCRIPT', 'REACT', 'REDUX','FRAMER','GIT',]

const InfiniteScroll:React.FC = () => {
  return (<>

    <div className="overflow-hidden relative whitespace-nowrap w-full bg-checkered py-5  my-10 z-0">
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#131212] to-transparent z-10"></div>
  <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#131212] to-transparent z-10"></div>


      <motion.div
        className="flex gap-8"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="h-[70px] min-w-[120px] sm:min-w-[200px] sm:h-[150px] border border-[#232023] bg-black  sm:text-2xl sm:font-semibold flex items-center justify-center rounded-lg shadow-lg"
          >
            {logo}
            
          </div>
        ))}
      </motion.div>
    </div>

    </>
  )

}

export default InfiniteScroll
