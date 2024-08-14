import ContactForm from "../ContactForm/ContactForm";
import './Contact.styles.css';


const Contact = () => {
    return (
        <section id="contact" className={"overflow-hidden flex items-center justify-center min-w-screen bg-no-repeat bg-[url('/low-poly-grid-haikei.svg')] bg-cover sm:h-screen"}>
            <div className="main h-[80%] sm:relative top-5 w-screen sm:w-auto">
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;