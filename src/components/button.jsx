const Button = ({ children, className }) => {
    return (
        <button className={`bg-[#aa00aa] text-white p-3 rounded-xl mt-5 mr-5 shadow-[2px_2px_0px_2px_rgba(0,0,0)] hover:bg-blue-600 hover:scale-110 transition-[transform] ${className}`}>
            {children}
        </button>
    );
}

export default Button;