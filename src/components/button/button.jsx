import './button.styles.css'

const Button = ({ children, className, ...otherProps }) => {
    return (
        <button {...otherProps} className={`button bg-[#531e2c] hover:bg-[#642d19] hover:border-black flex items-center gap-2 cursor-default outline-white text-white hover:text-white rounded-sm p-3 shadow-[5px_5px_0px_1px_rgba(0,0,0)] hover:scale-110 transition-[transform] border-2 border-black text-lg ${className}`}>
            {children}
        </button>
    );
}

export default Button;