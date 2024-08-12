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
        <span {...props} className={`grid place-items-center text-black border-2 border-transparent cursor-default hover:border-white px-1 md:px-2 py-1 md:py-0 rounded-xl hover ${index === name ? 'bg-white' : 'bg-transparent'}`}
            onClick={handleClick}
        >{children}</span>
    );
};

export default NavItem;