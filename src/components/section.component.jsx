const Section = ({children, className }) => {
    return (
        <section className={`w-full bg-no-repeat ${className}`} style={{
        }}>
            {children}
        </section>
    );
}

export default Section;