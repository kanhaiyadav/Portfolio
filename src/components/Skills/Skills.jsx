import SkillDirectory from "../SkillDirectory/SkiillDirectory";
import './Skills.styles.css';
import { webDev, programmingLanguages, tools } from './SkillData';
import { FaAngleDoubleDown } from "react-icons/fa";
import { useState } from "react";

const Skills = () => {
    const skills = [webDev, programmingLanguages, tools];
    const [count, setCount] = useState(0);
    return (
        <section id="skills" className="relative overflow-hidden w-screen bg-no-repeat flex flex-col items-center gap-10 justify-center  pr-10 pl-10 pb-4 pt-4"
            style={{
                background: 'linear-gradient(#00101c, #642d19)'
            }}
        >
            <h1 className="text-4xl md:text-5xl  ml-10 text-white font-Poppins">My Skillset</h1>
            <div className="w-[60%] h-1 flex justify-between  gap-3">
                {
                    skills.map((skill, index) => (
                        <span key={index} className={`flex-1 w-[5px] rounded-full ${index == count % 3 ? 'bg-[#c54d20]' : 'bg-white'}`}
                            onClick={() => setCount(index)}
                        ></span>
                    ))
                }
            </div>
            <SkillDirectory skill={skills[count % 3]} />
                
            <span className="h-10 w-10 text-3xl text-white hover:scale-110 hover:bg-white hover:text-black transition duration-300 active:scale-90 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)] rounded-full p-2 box-content"
                onClick={() => setCount((prev) => {
                    return prev + 1;
                })}
            ><FaAngleDoubleDown className="w-full h-full" /></span>
        </section>
    );
}

export default Skills;