import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectDirectory = ({ data }) => {
    const { projects } = data;
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))
            }
        </div>
    )
};

export default ProjectDirectory;