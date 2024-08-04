import { useState } from "react";
import NavItem from "../NavItem/NavItem";

const Nav = () => {
    const [index, setIndex] = useState('home');
    return (
        <nav className="z-50 fixed top-[-10px] translate-x-[-50%] left-2/4  py-2 px-1.5 rounded-2xl my-8 outline outline-offset-4 outline-[3px] outline-[#037b0b]"
            style={{
                background: 'linear-gradient(to right, #11998e, #38ef7d)'
            }}
        >
            <div className="list-none flex flex-row gap-5 text-white text-lg">
                <NavItem index={index} setIndex={setIndex} name='home'>Home</NavItem>
                <NavItem index={index} setIndex={setIndex} name='about'>About</NavItem>
                <NavItem index={index} setIndex={setIndex} name='skills'>Skills</NavItem>
                <NavItem index={index} setIndex={setIndex} name='projects'>Projects</NavItem>
                <NavItem index={index} setIndex={setIndex} name='contact'>Contact</NavItem>
            </div>
        </nav>
    );
};

export default Nav;