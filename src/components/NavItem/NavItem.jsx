const NavItem = ({ children, index, setIndex, name, ...props }) => {
    console.log('start');
    console.log(name, index, name === index);
    console.log('end');
    return (
        <span {...props} className={`text-white border-2 border-transparent cursor-default hover:border-[#037b0b] px-2 rounded-xl hover ${index === name ? 'bg-[#037b0b]' : 'bg-transparent'}`}
            onClick={() => {
                setIndex(name)
                console.log(name);
            }
            }
        >{children}</span>
    );
};

export default NavItem;