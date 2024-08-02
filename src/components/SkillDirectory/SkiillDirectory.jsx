import SkillCard from "../SkillCard/SkillCard";

const SkillDirectory = ({ skill }) => {
    const { title, icon, Skills } = skill;
    return (
        <div className="flex gap-5 items-center border-white ml-5 ">
            <div className="h-full w-[200px] shadow-[2px_2px_5px_2px_rgba(0,0,0,0.5)] rounded-3xl flex flex-col items-center justify-center text-center">
                <div className="">
                    <img src={icon} alt={title}className="h-[70px]"/>
                </div>
                <h2 className="text-2xl font-semibold font-Open-sans text-[ghostwhite] mb-1">{title}</h2> 
            </div>
            <div className=" shadow-[inset_0_0_15px_5px_rgba(0,0,0,0.8)] flex gap-8 items-center hide-x-scrollbar overflow-scroll w-[83vw] p-5 rounded-[15px]">
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