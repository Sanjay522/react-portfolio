import React from 'react'
import { motion } from 'framer-motion'
import profileImage from "../assets/images/profileImage.avif"
import icon from "../assets/images/sampleImage.svg"
import PersonsReview from './PersonsReview'


const TestimoniolsAnimation = () => {
    const animateReview1 = [{
        img:profileImage,
        icon:icon,
        name:"SANJAY GUPTA",
        designation:"FRONT-END DEVVELOPER",
        description:"With grey user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all  automated and accessible in one place.",
    },
{
        img:profileImage,
        icon:icon,
        name:"SANJAY GUPTA",
        designation:"FRONT-END DEVVELOPER",
        description:"With grey user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all  automated and accessible in one place.",
    },
{
        img:profileImage,
        icon:icon,
        name:"SANJAY GUPTA",
        designation:"FRONT-END DEVVELOPER",
        description:"With grey user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all  automated and accessible in one place.",
    },
{
        img:profileImage,
        icon:icon,
        name:"SANJAY GUPTA",
        designation:"FRONT-END DEVVELOPER",
        description:"With grey user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all  automated and accessible in one place.",
    },{
        img:profileImage,
        icon:icon,
        name:"SANJAY GUPTA",
        designation:"FRONT-END DEVVELOPER",
        description:"With grey user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all  automated and accessible in one place.",
    }]
const animateReview2 = [{
        img:profileImage,
        icon:icon,
       name:"SANJAY GUPTA",
        designation:"FRONT-END DEVVELOPER",
        description:"With grey user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all  automated and accessible in one place.",
    },
{
        img:profileImage,
        icon:icon,
        name:"SANJAY GUPTA",
        designation:"FRONT-END DEVVELOPER",
        description:"With grey user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all  automated and accessible in one place.",
    },
{
        img:profileImage,
        icon:icon,
        name:"SANJAY GUPTA",
        designation:"FRONT-END DEVVELOPER",
        description:"With grey user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all  automated and accessible in one place.",
    },
{
        img:profileImage,
        icon:icon,
        name:"SANJAY GUPTA",
        designation:"FRONT-END DEVVELOPER",
        description:"With grey user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all  automated and accessible in one place.",
    },
{
        img:profileImage,
        icon:icon,
        name:"SANJAY GUPTA",
        designation:"FRONT-END DEVVELOPER",
        description:"With grey user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all  automated and accessible in one place.",
    }]
  return (
    <><div
        style={{
          position: "absolute",
          top: "1018.5%",
          left: "0",
          right: "0",
          height: "1px",
          width: "95%",
          margin: "auto",
          backgroundColor: "#232023",
        }}
      ></div>
<div className="overflow-hidden relative whitespace-nowrap w-full bg-checkered py-5 my-10 z-0">
  
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#131212] to-transparent z-10"></div>
  <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#131212] to-transparent z-10"></div>


      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        {[...animateReview1, ...animateReview1].map(({name,description,designation,img,icon,}) => (
          <PersonsReview name={name} description={description} designation={designation} icon={icon} profileImage={img}/>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-8 my-5"
        animate={{
          x: [-1000, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        {[...animateReview2, ...animateReview2].map(({name,description,designation,img,icon,}) => (
          <PersonsReview name={name} description={description} designation={designation} icon={icon} profileImage={img}/>
        ))}
      </motion.div>
    </div> 
        </>

     )
}

export default TestimoniolsAnimation