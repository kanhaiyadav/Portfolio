const Button = ({ children, className, downloadLink, name }) => {
    return (
        <a href={downloadLink} download={name} className={`cursor-default bg-[#aa00aa] text-white p-3 rounded-xl shadow-[2px_2px_0px_2px_rgba(0,0,0)] hover:bg-blue-600 hover:scale-110 transition-[transform] ${className}`}>
            {children}
        </a>
    );
}

export default Button;