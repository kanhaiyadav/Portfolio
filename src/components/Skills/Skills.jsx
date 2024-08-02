import Section from "../section.component";
import SkillCard from "../SkillCard/SkillCard";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import react from "../../assets/react.png";
import express from "../../assets/Express.png";
import nodejs from "../../assets/nodejs.png";
import tailwind from "../../assets/tailwind.jpg";
import python from "../../assets/python.png";
import cpp from '../../assets/c-.png';
import C from '../../assets/C.png';
import js from '../../assets/js.png';
import mongodb from '../../assets/mongodb.png';
import mySql from '../../assets/mySql.png';
import social from '../../assets/social.png';
import postman from '../../assets/Postman.png';
import './Skills.styles.css';

const Skills = () => {
    return (
        <Section className="bg-[url('/src/assets/layered-waves-haikei.svg')] bg-cover flex flex-col gap-10 items-start justify-center h-screen bg-position overflow-x-hidden">
            <div>
                <h1>Web Development</h1>
                <div className="flex gap-8 pb-3 hide-x-scrollbar overflow-scroll w-screen pr-8 pl-2">
                    <SkillCard imgPath={react} name="React" progress={85} exp={1} style={{ '--card-color': 'blue' }} />
                    <SkillCard imgPath={nodejs} name="NodeJS" progress={75} exp={1} style={{ '--card-color': 'blue' }} imgStyle={{
                        backgroundColor: 'white',
                        borderRadius: '20px'
                    }} />
                    <SkillCard imgPath={mySql} name="MySql" progress={80} exp={1} style={{ '--card-color': 'blue' }} imgStyle={{ backgroundColor: 'white', borderRadius: '20px' }} />
                    <SkillCard imgPath={mongodb} name="MongoDB" progress={60} exp={1} style={{ '--card-color': 'blue' }} />
                    <SkillCard imgPath={express} name="EXPRESS" progress={70} exp={1} style={{ '--card-color': 'blue' }} />
                    <SkillCard imgPath={tailwind} name="Tailwind" progress={60} exp={0.2} style={{ '--card-color': 'blue' }} />
                    <SkillCard imgPath={html} name="HTML" progress={80} exp={2} style={{ '--card-color': 'blue' }} />
                    <SkillCard imgPath={css} name="CSS" progress={93} exp={2} style={{ '--card-color': 'blue' }} />
                    <div>
                    </div>
                </div>
            </div>
            <div>
                <h1>Programming Languages</h1>
                <div className="flex gap-8 pb-3 hide-x-scrollbar overflow-scroll w-screen pr-8 pl-2">
                    <SkillCard imgPath={python} name="Python" progress={90} exp={2} style={{ '--card-color': '#a300a3' }} />
                    <SkillCard imgPath={cpp} name="C++" progress={90} exp={2} style={{ '--card-color': '#a300a3' }} />
                    <SkillCard imgPath={C} name="C" progress={95} exp={3} style={{ '--card-color': '#a300a3' }} />
                    <SkillCard imgPath={js} name="JavaScript" progress={65} exp={1} style={{ '--card-color': '#a300a3' }} />
                </div>

            </div>
            <div>
                <h1>Tools</h1>
                <div className="flex gap-8 pb-3 hide-x-scrollbar overflow-scroll w-screen pr-8 pl-2">
                    <SkillCard imgPath={social} name="Git" progress={70} exp={2} style={{ '--card-color': '#1f8b2a' }} />
                    <SkillCard imgPath={postman} name="Postman" progress={73} exp={2} style={{ '--card-color': '#1f8b2a' }} />
                </div>
            </div>
        </Section>
    );
}

export default Skills;