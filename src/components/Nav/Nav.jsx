import { useState } from "react";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-scroll";
import { IoHome } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Nav = () => {
    const [index, setIndex] = useState('');
    return (
        <nav className="z-50 fixed top-[-10px] translate-x-[-50%] left-2/4  py-2 px-1.5 rounded-2xl my-8 outline outline-offset-4 outline-[3px] outline-white"
            style={{
                background: 'linear-gradient(to right, #c54d20, yellow)'
            }}
        >
            <div className="list-none flex flex-row gap-5 text-black text-lg">
                <Link to="home" smooth duration={800}>
                    <NavItem index={index} setIndex={setIndex} name='home'>
                        <span className="hidden md:inline-block">Home</span>
                        <IoHome className="inline-block md:hidden text-2xl" />
                    </NavItem>
                </Link>

                <Link to="about" smooth duration={800}>
                    <NavItem index={index} setIndex={setIndex} name='about'>
                        <span className="hidden md:inline-block">About</span>
                        <FaIdCard className="inline-block md:hidden text-2xl" />
                    </NavItem>
                </Link>

                <Link to="skills" smooth duration={800}>
                    <NavItem index={index} setIndex={setIndex} name='skills'>
                        <span className="hidden md:inline-block">Skills</span>
                        <img src="/logical-thinking.png" alt="experience" className="inline-block w-6 h-6 md:hidden" />
                    </NavItem>
                </Link>

                <Link to="projects" smooth duration={800}>
                    <NavItem index={index} setIndex={setIndex} name='projects'>
                        <span className="hidden md:inline-block">Projects</span>
                        <img src="/programming-code-signs.png" alt="projects" className="inline-block w-6 h-6 md:hidden" />
                    </NavItem>
                </Link>

                <Link to="contact" smooth duration={800}>
                    <NavItem index={index} setIndex={setIndex} name='contact'>
                        <span className="hidden md:inline-block">Contact</span>
                        <MdEmail className="inline-block md:hidden text-2xl" />
                    </NavItem>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;