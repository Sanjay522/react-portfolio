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
      <div className={`relative sm:h-[${height}] sm:w-[${width}] h-[${height}] w-[${width}]`}>
        <div className="overflow-hidden rounded-lg group">
          <img
            src={image}
            alt={title}
            className="rounded-lg h-full w-full object-cover scale-100 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-between my-2 px-2">
          <div className="hidden sm:flex gap-1  ">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 sm:h-3 sm:w-3 rounded-full ${
                  i <= progressIndex ? "bg-black" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
          <div>
            <h1 className="sm:text-2xl text-[15px]">{title}</h1>
            <p className="text-gray-500 sm:text-[15px] text-[10px]">{description}</p>
          </div>
          <p className="sm:text-2xl text-[15px]">➜</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  