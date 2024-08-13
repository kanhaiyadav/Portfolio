import './rounded-button.styles.css'

const RoundIcon = ({ linkto, children, className }) => {
    return (
        <a href={linkto} target="_blank" rel="noopener noreferrer" className={`group rounded-button p-2 border-2 rounded-full inline-block ${className}`}>
            {children}
        </a>
    );
}

export default RoundIcon;