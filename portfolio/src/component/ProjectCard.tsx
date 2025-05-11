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
      <div className={`relative h-[${height}] w-[${width}]`}>
        <div className="overflow-hidden rounded-lg group">
          <img
            src={image}
            alt={title}
            className="rounded-lg h-full w-full object-cover scale-100 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-between my-2 px-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full ${
                  i <= progressIndex ? "bg-black" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
          <div>
            <h1 className="text-2xl">{title}</h1>
            <p className="text-gray-500">{description}</p>
          </div>
          <p className="text-2xl">➜</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  