import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <section className={"min-h-screen flex items-center justify-center p-10"} style={{
            background: 'linear-gradient(#ff7700 0%, #ffd800 100%)'
        }}>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
}

export default Projects;