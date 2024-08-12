import './button.styles.css'

const Button = ({ children, className, ...otherProps }) => {
    return (
        <span {...otherProps} className={`button flex items-center gap-2 cursor-default text-white hover:text-white rounded-sm p-3 shadow-[5px_5px_0px_1px_rgba(0,0,0)] hover:scale-110 transition-[transform] border-2 border-black text-lg ${className}`}>
            {children}
        </span>
    );
}

export default Button;