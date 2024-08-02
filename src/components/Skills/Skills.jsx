import Section from "../section.component";
import SkillDirectory from "../SkillDirectory/SkiillDirectory";
import './Skills.styles.css';
import {webDev, programmingLanguages, tools} from './SkillData';

const Skills = () => {
    return (
        <Section className="bg-[url('/src/assets/layered-waves-haikei.svg')] bg-cover flex flex-col gap-10 items-start justify-center h-screen bg-position overflow-x-hidden">
            <h1 className="text-6xl ml-10 text-white font-Poppins">My Skillset</h1>
            <SkillDirectory skill={webDev} />
            <SkillDirectory skill={programmingLanguages} />
            <SkillDirectory skill={tools} />
        </Section>
    );
}

export default Skills;