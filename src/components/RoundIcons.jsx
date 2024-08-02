const RoundIcon = ({ linkto, children, className }) => {
    return (
        <a href={linkto} target="_blank" rel="noopener noreferrer" className={`p-2 border-2 rounded-full inline-block shadow-[3px_3px_0px_3px_rgba(0,0,0)] ${className}`}>
            {children}
        </a>
    );
}

export default RoundIcon;