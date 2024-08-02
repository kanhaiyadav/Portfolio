import ProjectCard from "../ProjectCard/ProjectCard"

const ProjectDirectory = ({ data }) => {
    const {projects} = data;
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} path={project.path} imgPath={project.imgPath} title={project.title} description={project.description} />
                ))
            }
        </div>
    )
};

export default ProjectDirectory;