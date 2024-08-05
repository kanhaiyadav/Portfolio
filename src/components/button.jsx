const Button = ({ children, className, ...otherProps }) => {
    return (
        <span {...otherProps} className={`flex items-center gap-2 cursor-default text-white hover:text-white rounded-lg p-3 shadow-[5px_5px_0px_1px_rgba(0,0,0)] hover:scale-110 transition-[transform] border-2 border-black text-lg ${className}`}>
            {children}
        </span>
    );
}

export default Button;