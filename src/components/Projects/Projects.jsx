import { useState, useEffect, useRef } from "react";
import { web, python } from "./ProjectData";
import ProjectDirectory from "../ProjectDirectory/ProjectDirectory";

const WarningMessage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
                // else {
                //     setIsVisible(false);
                // }
            },
            {
                threshold: 1,
            }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);
    return (
        <div className="inline-block">
        <i ref={divRef} className={`${isVisible ? 'animate-typewriter5' : ''} whitespace-nowrap animate-typewriter1 text-white overflow-hidden inline-block`}>Okay, please don&apos;t laugh too hard 😅, but these are some basic Python projects I whipped up when I first learned to code 🐍. Think of them as my programming training wheels 🚲!</i>
        </div>
    )
};

const Projects = () => {
    const [data, setData] = useState(web);
    return (
        <section id="projects" className={"relative min-h-screen flex flex-col gap-10 items-center  justify-center pt-10 pb-10 bg-cover bg-[#ffefd6]"}
        >
            <nav className="z-100 bg-[#ff7700] absolute w-full h-[70px] pt-5 pl-5 top-0 border-black border-b-2 flex gap-5 overflow-visible">
                <span className="h-[50px] p-5 pb-3 pt-2 rounded-t-lg text-3xl text-black cursor-default" onClick={() => { setData(web) }}
                    style={
                        data.name === "web" ? {
                            fontWeight: '700',
                            backgroundColor: '#ffefd6',
                            border: '2px solid black',
                            borderBottom: 'none'
                        } : null
                    }
                >Web</span>
                <span className="h-[50px] p-5 pb-3 pt-2 rounded-t-lg text-3xl text-black cursor-default " onClick={() => { setData(python) }}
                    style={
                        data.name === "python" ? {
                            fontWeight: '700',
                            backgroundColor: '#ffefd6',
                            border: '2px solid black',
                            borderBottom: 'none'
                        } : null
                    }
                >Python</span>
            </nav>
            {
                data.name === "python" ? <WarningMessage /> : null
            }
            <ProjectDirectory data={data} className='m-10'/>
        </section>
    );
}

export default Projects;