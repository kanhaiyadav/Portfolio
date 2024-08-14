import { useState } from "react";
import NavItem from "../NavItem/NavItem";
// import { Link } from "react-scroll";
import { IoHome } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BsTools } from "react-icons/bs";

const Nav = () => {
    const [index, setIndex] = useState('');
    return (
        <nav className="z-50 fixed top-[-10px] translate-x-[-50%] left-2/4  py-2 px-1.5 rounded-2xl my-8 outline outline-offset-4 outline-[3px] outline-white"
            style={{
                background: 'linear-gradient(to right, #c54d20, yellow)'
            }}
        >
            <div className="list-none flex flex-row gap-5 text-black text-lg">
                <NavItem index={index} setIndex={setIndex} name='home'>
                    <IoHome className={`inline-block lg:inline-block md:hidden text-2xl`} 
                        style={{
                            display: `${index === 'home' ? 'inline-block' : ''}`
                        }}
                    />
                    <span className={`hidden md:inline-block font-semibold`}
                        style={{
                            display: `${index === 'home' ? 'inline-block' : ''}`
                        }}
                    >Home</span>
                </NavItem>

                <NavItem index={index} setIndex={setIndex} name='about'>
                    <FaIdCard className={`inline-block lg:inline-block md:hidden text-2xl`} 
                        style={{
                            display: `${index === 'about' ? 'inline-block' : ''}`
                        }}
                    />
                    <span className={`hidden md:inline-block font-semibold`}
                        style={{
                            display: `${index === 'about' ? 'inline-block' : ''}`
                        }}
                    >About</span>
                </NavItem>

                <NavItem index={index} setIndex={setIndex} name='skills'>
                    <BsTools className={`inline-block lg:inline-block md:hidden text-2xl`} 
                        style={{
                            display: `${index === 'skills' ? 'inline-block' : ''}`
                        }}
                    />
                    <span className={`hidden md:inline-block font-semibold`}
                        style={{
                            display: `${index === 'skills' ? 'inline-block' : ''}`
                        }}
                    >Skills</span>
                </NavItem>

                <NavItem index={index} setIndex={setIndex} name='projects'>
                    <FaLaptopCode className={`inline-block lg:inline-block md:hidden text-2xl $`} 
                        style={{
                            display: `${index === 'projects' ? 'inline-block' : ''}`
                        }}
                    />
                    <span className={`hidden md:inline-block font-semibold`}
                        style={{
                            display: `${index === 'projects' ? 'inline-block' : ''}`
                        }}
                    >Projects</span>
                </NavItem>

                <NavItem index={index} setIndex={setIndex} name='contact'>
                    <MdEmail className={`inline-block lg:inline-block md:hidden text-2xl `} 
                        style={{
                            display: `${index === 'contact' ? 'inline-block' : ''}`
                        }}
                    />
                    <span className={`hidden md:inline-block font-semibold`}
                        style={{
                            display: `${index === 'contact' ? 'inline-block' : ''}`
                        }}
                    >Contact</span>
                </NavItem>
            </div>
        </nav>
    );
};

export default Nav;