import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import TechnologyCard from "./TechnologyCard";
import todoListImg from "../assets/images/todo-list.png";

function ProjectCard({
  link,
  technologies,
  title,
  description,
  animationDelay,
}) {
  const { elementRef, hasAnimated } = useAnimateOnScroll();

  return (
    <>
      <div
        ref={elementRef}
        className={`group transform overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
          hasAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: `${animationDelay}` }}
      >
        <div className="relative overflow-hidden">
          <img
            src={todoListImg}
            alt={title}
            className="h-[218px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          ></img>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={link}
              target="_blank"
              className="rounded-full bg-white/90 p-2 transition-colors duration-200 hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link h-4 w-4 text-gray-700"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-6">
          <a href={link} target="_blank">
            <h3 className="font-OpenSans mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-400">
              {title}
            </h3>
          </a>
          <p className="font-nunito mb-4 leading-relaxed text-gray-300">
            {description}
          </p>
          <div className="flex items-center font-medium text-red-200 transition-colors duration-300 group-hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-code mr-2 h-4 w-4"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => {
              return (
                <TechnologyCard key={technology}>{technology}</TechnologyCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
