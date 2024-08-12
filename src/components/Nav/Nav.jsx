import { useState } from "react";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-scroll";
import { IoHome } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Nav = () => {
    const [index, setIndex] = useState('');
    return (
        <nav className="z-50 fixed top-[-10px] translate-x-[-50%] left-2/4  py-2 px-1.5 rounded-2xl my-8 outline outline-offset-4 outline-[3px] outline-[#037b0b]"
            style={{
                background: 'linear-gradient(to right, #11998e, #38ef7d)'
            }}
        >
            <div className="list-none flex flex-row gap-5 text-white text-lg">
                <Link to="home" smooth duration={800}><NavItem index={index} setIndex={setIndex} name='home'><span className="hidden md:flex">Home</span> <IoHome className="md:hidden text-3xl"/></NavItem></Link>
                <Link to="about" smooth duration={800}><NavItem index={index} setIndex={setIndex} name='about'><span className="hidden md:flex">About</span> <FaIdCard className="md:hidden text-3xl"/></NavItem></Link>
                <Link to="skills" smooth duration={800}><NavItem index={index} setIndex={setIndex} name='skills'><span className="hidden md:flex">Skills</span><img src="/experience.png" alt="experience" className="w-8 md:hidden" /></NavItem></Link>
                <Link to="projects" smooth duration={800}><NavItem index={index} setIndex={setIndex} name='projects'><span className="hidden md:flex">Projects</span><img src="/start-up.png" alt="projects" className="w-8 md:hidden" /></NavItem></Link>
                <Link to="contact" smooth duration={800}><NavItem index={index} setIndex={setIndex} name='contact'><span className="hidden md:flex">Contact</span><MdEmail className="md:hidden text-3xl"/></NavItem></Link>
            </div>
        </nav> className="hidden md:flex"
    );
};

export default Nav;