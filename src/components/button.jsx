const Button = ({ children, className, downloadLink, name }) => {
    return (
        <a href={downloadLink} download={name} className={`cursor-default bg-[#aa00aa] text-white rounded-lg p-3 shadow-[5px_5px_0px_1px_rgba(0,0,0)] hover:bg-blue-600 hover:scale-110 transition-[transform] border-2 border-black text-lg ${className}`}>
            {children}
        </a>
    );
}

export default Button;