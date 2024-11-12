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
        <nav className="z-50 fixed top-[-10px] translate-x-[-50%] left-2/4  lg:py-2 py-1 lg:px-1.5 px-1 rounded-2xl my-8 outline outline-offset-4 lg:outline-[3px] outline-[2px] outline-white"
            style={{
                background: 'linear-gradient(to right, #c54d20, yellow)'
            }}
        >
            <div className="list-none flex flex-row gap-5 text-black text-lg">
                <NavItem index={index} setIndex={setIndex} name='home'>
                    <IoHome className={`inline-block lg:inline-block md:hidden sm:text-2xl text-lg`} 
                        style={{
                            display: `${index === 'home' ? 'inline-block' : ''}`
                        }}
                    />
                    <span className={`hidden md:inline-block font-semibold sm:text-lg text-sm`}
                        style={{
                            display: `${index === 'home' ? 'inline-block' : ''}`
                        }}
                    >Home</span>
                </NavItem>

                <NavItem index={index} setIndex={setIndex} name='about'>
                    <FaIdCard className={`inline-block lg:inline-block md:hidden sm:text-2xl text-lg`} 
                        style={{
                            display: `${index === 'about' ? 'inline-block' : ''}`
                        }}
                    />
                    <span className={`hidden md:inline-block font-semibold sm:text-lg text-sm`}
                        style={{
                            display: `${index === 'about' ? 'inline-block' : ''}`
                        }}
                    >About</span>
                </NavItem>

                <NavItem index={index} setIndex={setIndex} name='skills'>
                    <BsTools className={`inline-block lg:inline-block md:hidden sm:text-2xl text-lg`} 
                        style={{
                            display: `${index === 'skills' ? 'inline-block' : ''}`
                        }}
                    />
                    <span className={`hidden md:inline-block font-semibold sm:text-lg text-sm`}
                        style={{
                            display: `${index === 'skills' ? 'inline-block' : ''}`
                        }}
                    >Skills</span>
                </NavItem>

                <NavItem index={index} setIndex={setIndex} name='projects'>
                    <FaLaptopCode className={`inline-block lg:inline-block md:hidden sm:text-2xl text-lg $`} 
                        style={{
                            display: `${index === 'projects' ? 'inline-block' : ''}`
                        }}
                    />
                    <span className={`hidden md:inline-block font-semibold sm:text-lg text-sm`}
                        style={{
                            display: `${index === 'projects' ? 'inline-block' : ''}`
                        }}
                    >Projects</span>
                </NavItem>

                <NavItem index={index} setIndex={setIndex} name='contact'>
                    <MdEmail className={`inline-block lg:inline-block md:hidden sm:text-2xl text-lg `} 
                        style={{
                            display: `${index === 'contact' ? 'inline-block' : ''}`
                        }}
                    />
                    <span className={`hidden md:inline-block font-semibold sm:text-lg text-sm`}
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