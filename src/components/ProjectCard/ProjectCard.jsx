import { useState, useEffect, useRef } from "react";
import './ProjectCard.styles.css';
import { FaEye } from 'react-icons/fa';
import { LuCode2 } from "react-icons/lu";
import Technology from "../technology";

const ProjectCard = ({ project }) => {
    const { path, imgPath, title, description, preview, source, technologies } = project;
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
    console.log(title);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // observer.disconnect();
                }
                else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
            }
        );

        const reference = divRef.current;

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (reference) {
                observer.unobserve(reference);
            }
        };
    }, []);
    return (
        <div ref={divRef} className={`fade-in ${isVisible ? 'visible' : ''} project-card flex flex-col flex-1 gap-5 bg-[#fe6263] p-5 box-content rounded-3xl shadow-[10px_10px_0px_1px_rgb(0,0,0)] border-[3px] border-black max-w-[600px] max-h-[380px] overflow-auto even:ml-auto`}>
            <div className="flex gap-5 w-full">
                <div className={`shrink-0 w-[260px] h-[160px] rounded-2xl overflow-hidden border-2 border-black group`}
                    style={{
                        backgroundImage: `url(${path})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="hidden group-hover:flex items-center justify-center gap-2 w-full h-full bg-[#00000089]">
                        <a className={`text-black hover:text-black text-3xl bg-white rounded-full p-2`} href={preview} target="_blank" rel="noreferrer"><FaEye /></a>
                        <a className={`text-black hover:text-black text-3xl bg-white rounded-full p-2`} href={source} target="_blank" rel="noreferrer"><LuCode2 /></a>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden p-1 shadow-[1px_1px_4px_2px_rgba(0,0,0,0.9)]">
                            <img src={imgPath} alt="icon" className="h-full rounded-full" />
                        </div>
                        <h2 className="text-3xl font-semibold text-black">{title}</h2>
                    </div>
                    <div className="text-container max-h-[110px] overflow-hidden  mb-3 hover:max-h-full transition-all duration-300">
                        <p className="text-ellipsis-custom text-lg text-white font-Poppins">{description}</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-1 gap-2 flex-wrap">
                {
                    technologies.map((tech, index) => (
                        <Technology key={index}>{tech}</Technology>
                    ))
                }
            </div>
        </div>
    );
}

export default ProjectCard;