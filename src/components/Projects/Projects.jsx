
import ProjectDirectory from "../ProjectDirectory/ProjectDirectory";

const Projects = () => {
    return (
        <section id="projects" className={"relative min-h-screen flex flex-col gap-10 items-center  justify-center p-10 pt-4 bg-cover bg-[#ffefd6]"}
            style={{
                background: 'linear-gradient(#642d19, #00101c)'
            }}
        >
            <h1 className="text-4xl md:text-5xl  ml-10 text-white font-Poppins">My Projects</h1>
            <ProjectDirectory className='m-10' />
        </section>
    );
}

export default Projects;