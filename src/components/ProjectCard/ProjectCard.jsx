import Button from "../button";
// import { FaEye } from "react-icons/fa6";

const ProjectCard = () => {
    return (
        <div className="max-w-[350px] min-w-[290px] project-card flex-1 flex-col gap-5 bg-[tomato] p-5 box-content rounded-2xl shadow-[10px_10px_0px_1px_rgb(0,0,0)] border-4 border-black">
            <div className="w-full rounded-2xl overflow-hidden border-2 border-black">
                <img src="/src/assets/todoApp.png" alt="todo_project" className="w-full"/>
            </div>
            <div>
                <h2 className="text-3xl font-semibold text-black">Todo App</h2>
                <p className="text-lg text-white font-Poppins mb-5">A simple todo app to keep track of your daily tasks.</p>
                <div className="flex gap-2 justify-evenly">
                    <Button>Features</Button>
                    <Button><span>Preview</span></Button>
                    <Button>Source</Button>
                </div>
            </div>
            
        </div>
    );
}

export default ProjectCard;