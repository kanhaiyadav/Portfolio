
import { useEffect } from "react";
import ProjectDirectory from "../ProjectDirectory/ProjectDirectory";

const Projects = () => {
    useEffect(() => {
        const projectsDom = document.getElementsByClassName('project-card');
        projectsDom[0].style.marginTop = '0px';
    }, []);
    return (
        <section id="projects" className={"relative min-h-screen flex flex-col gap-5 items-center  justify-center p-10 pt-4 bg-cover bg-[#ffefd6]"}
            style={{
                background: 'linear-gradient(#642d19, #00101c)'
            }}
        >
            <h1 className="text-4xl md:text-5xl mb-8 text-white font-Poppins">My Projects</h1>
            <ProjectDirectory className='m-2' />
        </section>
    );
}

export default Projects;