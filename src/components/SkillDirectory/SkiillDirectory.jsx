import SkillCard from "../SkillCard/SkillCard";
import './SkillDirectory.styles.css';

const SkillDirectory = ({ skill }) => {
    const { title, icon, Skills } = skill;
    const repeatedSkills = [...Skills, ...Skills, ...Skills];
    return (
        <div className="flex flex-0 h gap-5 items-center border-white w-full overflow-hidden">
            <div className="flex-0 h-[160px] bg-[#ff9040] w-[130px] md:w-[200px] shadow-[2px_2px_5px_2px_rgba(0,0,0,0.5)] rounded-3xl flex flex-col items-center justify-center text-center">
                <div className="">
                    <img src={icon} alt={title} className="h-[70px]" />
                </div>
                <h2 className="text-lg md:text-2xl font-semibold font-Open-sans text-[ghostwhite] mb-1">{title}</h2>
            </div>
            <div className="flex-1 shadow-[inset_0_0_15px_5px_rgba(0,0,0,0.8)] bg-[#ad7100] hide-x-scrollbar hide-x-scrollbar overflow-scroll p-5 rounded-[15px]">
                <div className="scroll-wrapper flex gap-8 items-center pr-5">
                    {
                        repeatedSkills.map((skill, index) => (
                            <SkillCard key={index} imgPath={skill.imgPath} name={skill.name} progress={skill.progress} exp={skill.exp} style={skill.style} imgStyle={skill.imgStyle} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillDirectory;