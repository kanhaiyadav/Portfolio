import SkillCard from "../SkillCard/SkillCard";
import './SkillDirectory.styles.css';

const SkillDirectory = ({ skill }) => {
    const { title, Skills } = skill;
    return (
        <div className="flex-1 overflow-auto flex items-center">
            <div className="pt-10 pb-10 flex justify-center items-center flex-wrap gap-8 w-[500px] sm:w-[600px] md:w-[800px] lg:w-[1000px]">
                {
                    Skills.map((skill, index) => (
                        <SkillCard key={index} imgPath={skill.imgPath} name={skill.name} progress={skill.progress} imgStyle={skill.imgStyle} />
                    ))
                }
            </div>
        </div>
    )
}

export default SkillDirectory;