'use client'
import React from 'react'
import { motion } from 'framer-motion'

const logos = ['Manila.', 'Basel', 'Theo', 'Oslo.', 'Cairo']

const InfiniteScroll:React.FC = () => {
  return (<>

    <div className="overflow-hidden relative whitespace-nowrap w-full bg-checkered py-5 my-10">

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
            className="min-w-[200px] h-[150px] border border-gray-600 bg-white  text-2xl font-semibold flex items-center justify-center rounded-lg shadow-lg"
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
