import { useEffect } from "react";

const NavItem = ({ children, index, setIndex, name, ...props }) => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIndex(name);
                }
            });
        }, {
            threshold: 0.5,
        });

        observer.observe(document.getElementById(name));
    }, [name, setIndex]);

    const handleClick = () => {
        setIndex(name);
        // document.getElementById(name).scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <span {...props} className={`text-white border-2 border-transparent cursor-default hover:border-[#037b0b] px-2 rounded-xl hover ${index === name ? 'bg-[#037b0b]' : 'bg-transparent'}`}
            onClick={handleClick}
        >{children}</span>
    );
};

export default NavItem;