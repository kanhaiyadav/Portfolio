import Button from "../button";
import './ProjectCard.styles.css';

const ProjectCard = ({ path, imgPath, title, description }) => {
    return (
        <div className="max-w-[350px] min-w-[290px] project-card flex-1 flex-col gap-5 bg-[tomato] p-5 box-content rounded-2xl shadow-[10px_10px_0px_1px_rgb(0,0,0)] border-4 border-black">
            <div className="w-full h-[179px] rounded-2xl overflow-hidden border-2 border-black">
                <img src={path} alt="todo_project" className="w-full" />
            </div>
            <div>
                <div className="flex items-center gap-2 mt-2">
                    <img src={imgPath} alt="icon" className="w-[40px] h-[40px] rounded-full shadow-[2px_2px_5px_2px_rgba(0,0,0,0.8)]" />
                    <h2 className="text-3xl font-semibold text-black">{title}</h2>
                </div>
                <div className="text-container max-h-[60px] overflow-hidden  mb-3 hover:max-h-full transition-all duration-300">
                    <p className="text-ellipsis-custom text-lg text-white font-Poppins">{description}</p>
                </div>
                <div className="flex gap-2 justify-evenly">
                    <Button><span>Features</span></Button>
                    <Button><span>Preview</span></Button>
                    <Button><span>Source</span></Button>
                </div>
            </div>

        </div>
    );
}

export default ProjectCard;