const Section = ({children, className }) => {
    return (
        <section className={`overflow-x-hidden w-screen bg-no-repeat ${className}`} style={{
        }}>
            {children}
        </section>
    );
}

export default Section;