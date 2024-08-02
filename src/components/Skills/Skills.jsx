// import SkillCard from "../SkillCard/SkillCard";
// import html from "../../assets/html.png";
// import css from "../../assets/css.png";
// import react from "../../assets/react.png";
// import express from "../../assets/Express.png";
// import nodejs from "../../assets/nodejs.png";
// import tailwind from "../../assets/tailwind.jpg";
// import python from "../../assets/python.png";
// import cpp from '../../assets/c-.png';
// import C from '../../assets/C.png';
// import js from '../../assets/js.png';
// import mongodb from '../../assets/mongodb.png';
// import mySql from '../../assets/mySql.png';
// import social from '../../assets/social.png';
// import postman from '../../assets/Postman.png';
import Section from "../section.component";
import SkillDirectory from "../SkillDirectory/SkiillDirectory";
import './Skills.styles.css';
import {webDev, programmingLanguages, tools} from './SkillData';

const Skills = () => {
    return (
        <Section className="bg-[url('/src/assets/layered-waves-haikei.svg')] bg-cover flex flex-col gap-10 items-start justify-center h-screen bg-position overflow-x-hidden">
            <SkillDirectory skill={webDev} />
            <SkillDirectory skill={programmingLanguages} />
            <SkillDirectory skill={tools} />
        </Section>
    );
}

export default Skills;