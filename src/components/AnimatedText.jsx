const P = ({ children, className, ...otherprops}) => {
    return (
        <p {...otherprops} className={`whitespace-nowrap animate-cursor animate-typewriter1 text-2xl overflow-hidden inline-block ${className}`}>{children}</p>
    )
}

export default P;