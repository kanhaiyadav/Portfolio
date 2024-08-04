import ContactForm from "../ContactForm/ContactForm";
import './Contact.styles.css';
import meetUp from '../../assets/meetup.svg';

const Contact = () => {
    return (
        <section id="contact" className={"overflow-x-hidden min-w-screen bg-no-repeat bg-[url('/src/assets/flat-mountains.svg')] bg-cover h-screen flex items-center justify-center"}>
            <div className="main h-[80%] bg-[#ffffffe4] flex items-center justify-between rounded-2xl mt-20">
                <div className="h-full">
                    <img src={meetUp} alt="meet up" className="w-[100%] h-[100%]"/>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;