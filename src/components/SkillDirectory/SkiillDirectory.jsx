import SkillCard from "../SkillCard/SkillCard";
import './SkillDirectory.styles.css';
import { FaAngleDoubleDown } from "react-icons/fa";
import { webDev, programmingLanguages, tools } from './SkillData';
import { useState } from "react";


const SkillDirectory = () => {
    const AllSkills = [webDev, programmingLanguages, tools];
    const [count, setCount] = useState(0);
    const skill = AllSkills[count % 3]
    const { title, Skills } = skill;
    return (
        <>
            <div className="flex-1 overflow-auto flex flex-col items-center gap-5 p-4">
                <div className="flex items-center gap-5">
                    <h1 className="pb-4 text-xl sm:text-3xl font-Playwrite1 md:text-4xl text-[#c54d20] whitespace-nowrap">{title}</h1>
                    <span className="h-6 w-6 sm:h-8 sm:w-8 text-white hover:scale-110 hover:bg-white hover:text-black transition duration-300 active:scale-90 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)] rounded-full p-2 box-content"
                        onClick={() => setCount((prev) => {
                            return prev + 1;
                        })}
                    >
                        <FaAngleDoubleDown className="w-full h-full" />
                    </span>
                </div>

                <div className="skill-directory pt-4 pb-10 flex justify-center items-center flex-wrap gap-8 w-[320px] sm:w-[600px] md:w-[750px] lg:w-[1000px] min-h-[300px] max-h-[400px] sm:max-h-[500px] sm:h-[500px] md:h-[440px] overflow-auto">
                    {
                        Skills.map((skill, index) => (
                            <SkillCard key={index} imgPath={skill.imgPath} name={skill.name} progress={skill.progress} imgStyle={skill.imgStyle} />
                        ))
                    }
                </div>
            </div>
            <div className="h-1 flex justify-between  gap-3">
                {
                    AllSkills.map((skill, index) => (
                        <span key={index} className={`flex-1 cursor-pointer w-[10px] rounded-full ${index == count % 3 ? 'bg-[#c54d20]' : 'bg-white'}`}
                            onClick={() => setCount(index)}
                        ></span>
                    ))
                }
            </div>
        </>
    )
}

export default SkillDirectory;