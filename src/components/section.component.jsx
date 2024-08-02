const Section = ({children, className }) => {
    return (
        <section className={`overflow-x-hidden min-w-screen bg-no-repeat ${className}`} style={{
        }}>
            {children}
        </section>
    );
}

export default Section;