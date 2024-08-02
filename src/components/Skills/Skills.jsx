import Section from "../section.component";
import SkillCard from "../SkillCard/SkillCard";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import react from "../../assets/react.png";
import express from "../../assets/Express.png";
import nodejs from "../../assets/nodejs.png";
import './Skills.styles.css';

const Skills = () => {
    return (
        <Section className="bg-[url('/src/assets/layered-waves-haikei.svg')] bg-cover flex flex-col gap-10 items-start justify-center h-screen bg-position">
            <div>
                <h1>Web Development</h1>
                <div className="flex gap-8">
                    <SkillCard imgPath={react} name="React" progress={85} exp={1} style={{ '--card-color': 'blue' }} />
                    <SkillCard imgPath={nodejs} name="NodeJS" progress={75} exp={1} style={{ '--card-color': 'blue' }} imgStyle={{
                        backgroundColor: 'white',
                        borderRadius: '20px'
                    }}/>
                    <SkillCard imgPath={express} name="EXPRESS" progress={70} exp={1} style={{ '--card-color': 'blue' }} />
                    <SkillCard imgPath={html} name="HTML" progress={80} exp={2} style={{ '--card-color': 'blue' }}/>
                    <SkillCard imgPath={css} name="CSS" progress={93} exp={2} style={{ '--card-color': 'blue' }} />
                    <div>
                    </div>
                </div>
            </div>
            <div>
                <h1>Coding</h1>
                <div className="flex gap-8">
                    <SkillCard imgPath={html} name="HTML" progress={90} exp={2} style={{ '--card-color': '#a300a3' }}/>
                    <SkillCard imgPath={css} name="CSS" progress={93} exp={2} style={{ '--card-color': '#a300a3' }}/>
                </div>
            </div>
            <div>
                <h1>Tools</h1>
                <div className="flex gap-8">
                    <SkillCard imgPath={html} name="HTML" progress={90} exp={2} style={{ '--card-color': '#1f8b2a' }}/>
                    <SkillCard imgPath={css} name="CSS" progress={93} exp={2} style={{ '--card-color': '#1f8b2a' }}/>
                </div>
            </div>
        </Section>
    );
}

export default Skills;