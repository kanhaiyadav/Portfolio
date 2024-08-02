import { useState } from "react";
import { web, python } from "./ProjectData";
import ProjectDirectory from "../ProjectDirectory/ProjectDirectory";

const Projects = () => {
    const [data, setData] = useState(web);
    return (
        <section className={"min-h-screen flex flex-col gap-10 items-center  p-10"} style={{
            background: 'linear-gradient(#ff7700 0%, #ffd800 100%)'
        }}>
            <nav>
                <span className="text-3xl text-black mr-5 ml-5 cursor-default" onClick={() => { setData(web) }}
                    style={
                        data.name === "web" ? {
                            fontWeight: '700',
                            textDecoration: 'underline'
                        } : null
                    }
                >Web</span>
                <span className="text-3xl text-black mr-5 ml-5 cursor-default" onClick={() => { setData(python) }}
                    style={
                        data.name === "python" ? {
                            fontWeight: '700',
                            textDecoration: 'underline'
                        } : null
                    }
                >Python</span>
            </nav>
            <ProjectDirectory data={data} />
        </section>
    );
}

export default Projects;