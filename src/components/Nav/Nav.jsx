import { useState } from "react";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-scroll";

const Nav = () => {
    const [index, setIndex] = useState('home');
    return (
        <nav className="z-50 fixed top-[-10px] translate-x-[-50%] left-2/4  py-2 px-1.5 rounded-2xl my-8 outline outline-offset-4 outline-[3px] outline-[#037b0b]"
            style={{
                background: 'linear-gradient(to right, #11998e, #38ef7d)'
            }}
        >
            <div className="list-none flex flex-row gap-5 text-white text-lg">
                <Link to="home" smooth duration={800}><NavItem index={index} setIndex={setIndex} name='home'>Home</NavItem></Link>
                <Link to="about" smooth duration={800}><NavItem index={index} setIndex={setIndex} name='about'>About</NavItem></Link>
                <Link to="skills" smooth duration={800}><NavItem index={index} setIndex={setIndex} name='skills'>Skills</NavItem></Link>
                <Link to="projects" smooth duration={800}><NavItem index={index} setIndex={setIndex} name='projects'>Projects</NavItem></Link>
                <Link to="contact" smooth duration={800}><NavItem index={index} setIndex={setIndex} name='contact'>Contact</NavItem></Link>
            </div>
        </nav>
    );
};

export default Nav;