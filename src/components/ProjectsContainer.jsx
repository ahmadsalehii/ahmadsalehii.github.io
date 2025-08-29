import Header from "./Header";
import ProjectCard from "./ProjectCard";

function ProjectsContainer() {
  return (
    <div className="mx-auto max-w-6xl">
      <Header
        title={"Featured Work"}
        desciption={"Some of my recent projects"}
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          link={"https://todolist226.netlify.app"}
          technologies={[
            "HTML",
            "JavaScript",
            "TailwindCss",
            "MVC Architechtor",
          ]}
          title={"Todo List"}
          description={
            "An online todo list application to manage daily tasks efficiently with features like adding, editing, and deleting tasks."
          }
          animationDelay={"0"}
        >
          Todo List
        </ProjectCard>
      </div>
    </div>
  );
}

export default ProjectsContainer;
