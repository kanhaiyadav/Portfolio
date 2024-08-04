const Section = ({children, className }) => {
    return (
        <section className={` ${className}`} style={{
        }}>
            {children}
        </section>
    );
}

export default Section;