import './rounded-button.styles.css'

const RoundIcon = ({ linkto, children, className }) => {
    return (
        <a href={linkto} target="_blank" rel="noopener noreferrer" className={`bg-transparent group rounded-button p-[9px] sm:p-[12px] border-2 border-[#c54d20] text-[#c54d20] hover:text-[#c54d20] text-xl sm:text-2xl rounded-full inline-block ${className}`}>
            {children}
        </a>
    );
}

export default RoundIcon;