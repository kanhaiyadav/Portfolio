import SkillDirectory from "../SkillDirectory/SkiillDirectory";
import './Skills.styles.css';


const Skills = () => {
    return (
        <section id="skills" className="relative overflow-hidden sm:h-screen w-screen bg-no-repeat flex flex-col items-center gap-10 justify-center  pr-10 pl-10 pb-4 pt-4"
            style={{
                background: 'linear-gradient(#00101c, #642d19)'
            }}
        >
            <h1 className="text-4xl md:text-5xl  ml-10 text-white font-Poppins">My Skillset</h1>
            <SkillDirectory/>
        </section>
    );
}

export default Skills;