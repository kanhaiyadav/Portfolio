import { useState, useEffect, useRef } from "react";
import Button from "../button";
import './ProjectCard.styles.css';

const ProjectCard = ({ project }) => {
    const { path, imgPath, title, description, preview, source } = project;
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);

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
        <div ref={divRef} className={`fade-in ${isVisible ? 'visible' : ''} max-w-[350px] min-w-[290px] project-card flex-1 flex-col gap-5 bg-[tomato] p-5 box-content rounded-2xl shadow-[10px_10px_0px_1px_rgb(0,0,0)] border-4 border-black`}>
            <div className="w-full h-[179px] rounded-2xl overflow-hidden border-2 border-black">
                <img src={path} alt="todo_project" className="w-full" />
            </div>
            <div>
                <div className="flex items-center gap-2 mt-2">
                    <div className="w-[40px] h-[40px] rounded-full p-1 shadow-[1px_1px_4px_2px_rgba(0,0,0,0.9)]">
                        <img src={imgPath} alt="icon" className="w-full h-full" />
                    </div>
                    <h2 className="text-3xl font-semibold text-black">{title}</h2>
                </div>
                <div className="text-container max-h-[60px] overflow-hidden  mb-3 hover:max-h-full transition-all duration-300">
                    <p className="text-ellipsis-custom text-lg text-white font-Poppins">{description}</p>
                </div>
                <div className="flex gap-2 justify-evenly">
                    <Button><span>Features</span></Button>
                    <Button downloadLink={preview}><span>Preview</span></Button>
                    <Button downloadLink={source}><span>Source</span></Button>
                </div>
            </div>

        </div>
    );
}

export default ProjectCard;