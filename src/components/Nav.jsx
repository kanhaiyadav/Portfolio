const Nav = () => {
    return (
        <nav className="z-50 fixed translate-x-[-50%] left-2/4  py-3 px-1.5 rounded-2xl bg-[#FFD700] my-8 outline outline-offset-8 outline-4 outline-[#037b0b]">
            <ul className="list-none flex flex-row gap-5 text-white text-xl">
                <li>
                    <a href="#" className="text-white px-3 py-1.5 rounded-xl bg-[#037b0b]">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-white p-3 ">About</a>
                </li>
                <li>
                    <a href="/skills" className="text-white p-3 ">Skills</a>
                </li>
                <li>
                    <a href="/projects" className="text-white p-3 ">Projects</a>
                </li>
                <li>
                    <a href="/contact" className="text-white p-3 ">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;