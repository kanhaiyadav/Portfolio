import ContactForm from "../ContactForm/ContactForm";
import './Contact.styles.css';
import meetUp from '/meetup.svg';
import Button from "../button/button";

const Contact = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText('kanhaiya2004yadav@gmail.com')
            .then(() => {
                alert('Email copied to clipboard');
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
    };
    return (
        <section id="contact" className={"overflow-hidden min-w-screen bg-no-repeat bg-[url('/low-poly-grid-haikei.svg')] bg-cover h-auto sm:h-screen"}>
            <div className="main h-full">
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;