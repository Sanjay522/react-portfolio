import {  motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  progressIndex: number;
  height: string;
  width: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  progressIndex,
  height,
  width,
}) => {
  return (
    <div className={`relative sm:h-[${height}] sm:w-[${width}] h-[${height}] w-[${width}] `}>
      <div className=" relative overflow-hidden rounded-lg group">
        <img
          src={image}
          alt={title}
          className="rounded-lg h-full w-full object-cover scale-100 group-hover:scale-110 transition-transform duration-300"
        />
  {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 pointer-events-none"></div> */}
      </div>
      <div className="flex justify-between my-2 px-2">
        <div className="hidden sm:flex gap-1  ">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 sm:h-3 sm:w-3 rounded-full ${i <= progressIndex ? "bg-white" : "bg-[#232023]"
                }`}
            ></span>
          ))}
        </div>
        <div>
          <h1 className="sm:text-2xl text-[15px] font-semibold tracking-tight">{title}</h1>
          <p className="text-gray-500 sm:text-[15px] text-[10px]">{description}</p>
        </div>
        {/* <motion.p
className="sm:text-2xl text-[15px]"      whileHover={{
        x: 10, // moves 10px to the right
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
➜    </motion.p> */}


 <motion.p
      className="relative inline-block text-white text-xl"
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { color: "#fff" },
        hover: { color: "#60a5fa" }, // Tailwind blue-400
      }}
    >
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] bg-blue-400 w-full"
        initial={{ scaleX: 0 }}
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ originX: 0 }}
      />
➜    </motion.p>
        {/* <Motion.p className="sm:text-2xl text-[15px]">➜</p> */}
      </div>
    </div>










  );
};

export default ProjectCard;
