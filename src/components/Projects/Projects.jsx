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
            {
                data.name === "python" ? <WarningMessage /> : null
            }
            <ProjectDirectory data={data} />
        </section>
    );
}

export default Projects;