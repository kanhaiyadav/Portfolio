import ProjectCard from "../ProjectCard/ProjectCard";
import './project-directory.css';
// import { RiPlaneLine } from "react-icons/ri";

const ProjectDirectory = ({ data, className, ...otherProps }) => {
    const { projects } = data;
    return (
        <div className={`relative project-directory xl:w-full pl-0 xl:pl-10 pr-20 xl:pr-10 border-2 border-green-500 ${className}`} {...otherProps}>
            <div id="timeline" className="absolute top-[130px] bottom-[130px] left-[96%] xl:left-[50%] xl:translate-x-[-50%]">
                <div className="absolute top-0 bottom-0 flex flex-col gap-[237px]">
                    {
                        projects.map((project, index) => (
                            <div key={index} className="timeline-dot w-5 h-5 rounded-full bg-[#fe6263]"></div>
                        ))
                    }
                </div>
                <div id="airplane" className="sticky top-[300px] w-10"><img src="/airplane (1).png" alt="" className="w-full"/></div>
            </div>
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))
            }
        </div>
    )
};

export default ProjectDirectory;