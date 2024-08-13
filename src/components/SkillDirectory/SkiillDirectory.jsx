import SkillCard from "../SkillCard/SkillCard";
import './SkillDirectory.styles.css';

const SkillDirectory = ({ skill }) => {
    const { title, icon, Skills } = skill;
    return (
        <div className="scroll-wrapper w-[70%] h-[80%] overflow-auto flex items-center justify-center">
            <h2 className="absolute left-0 text-3xl text-white font-Poppins rotate-[-90deg] whitespace-nowrap p-2 underline underline-offset-8 decoration-[#c54d20] decoration-4 w-[300px] text-center overflow-hidden text-ellipsis">{title}</h2>
            <div className="flex justify-center items-center flex-wrap gap-8">
                {
                    Skills.map((skill, index) => (
                        <SkillCard key={index} imgPath={skill.imgPath} name={skill.name} progress={skill.progress} imgStyle={skill.imgStyle} />
                    ))
                }
            </div>
            {/* <p className="absolute left-0 text-3xl text-white font-Poppins rotate-[-90deg] whitespace-nowrap p-2 border-b-4 border-[#c54d20]">hello</p> */}
        </div>
    )
}

export default SkillDirectory;