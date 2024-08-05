const P = ({ children, className, ...otherprops}) => {
    return (
        <p {...otherprops} className={`whitespace-nowrap animate-cursor animate-typewriter1 overflow-hidden inline-block ${className}`}>{children}</p>
    )
}

export default P;