import ContactForm from "../ContactForm/ContactForm";
import './Contact.styles.css';


const Contact = () => {
    return (
        <section id="contact" className={"overflow-hidden min-w-screen bg-no-repeat bg-[url('/low-poly-grid-haikei.svg')] bg-cover h-auto sm:h-screen"}>
            <div className="main h-full">
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;