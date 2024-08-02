import SkillCard from "../SkillCard/SkillCard";

const SkillDirectory = ({ skill }) => {
    const { title, Skills } = skill;
    return (
        <div>
            <h1>{title}</h1>
            <div className="flex gap-8 pb-3 hide-x-scrollbar overflow-scroll w-screen pr-8 pl-2">
                {
                    Skills.map((skill, index) => (
                        <SkillCard key={index} imgPath={skill.imgPath} name={skill.name} progress={skill.progress} exp={skill.exp} style={skill.style} imgStyle={skill.imgStyle} />
                    ))
                }
            </div>
        </div>
    )
}

export default SkillDirectory;