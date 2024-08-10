import ProjectCard from "../ProjectCard/ProjectCard";
import './project-directory.css';
// import { RiPlaneLine } from "react-icons/ri";

const ProjectDirectory = ({ data, className, ...otherProps }) => {
    const { projects } = data;
    return (
        <div className={`project-directory w-full p-10 ${className}`} {...otherProps}>
            <div id="timeline">
                <div className="timestops" id="t1"></div>
                <div className="timestops" id="t2"></div>
                <div className="timestops" id="t3"></div>
                <div id="airplane"><img src="/airplane (1).png" alt="" /></div>
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