const Nav = () => {
    return (
        <nav className="z-50 fixed top-[-10px] translate-x-[-50%] left-2/4  py-2 px-1.5 rounded-2xl bg-[#FFD700] my-8 outline outline-offset-4 outline-[3px] outline-[#037b0b]">
            <ul className="list-none flex flex-row gap-5 text-white text-lg">
                <li>
                    <a href="#" className="text-white px-2 py-1 rounded-xl bg-[#037b0b]">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-white px-2 py-1 ">About</a>
                </li>
                <li>
                    <a href="/skills" className="text-white px-2 py-1 ">Skills</a>
                </li>
                <li>
                    <a href="/projects" className="text-white px-2 py-1 ">Projects</a>
                </li>
                <li>
                    <a href="/contact" className="text-white px-2 py-1 ">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;