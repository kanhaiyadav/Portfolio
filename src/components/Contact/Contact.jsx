import ContactForm from "../ContactForm/ContactForm";
import Section from "../section.component";
import './Contact.styles.css';
import meetUp from '../../assets/meetup.svg';

const Contact = () => {
    return (
        <Section className={"bg-[url('/src/assets/flat-mountains.svg')] bg-cover h-screen flex items-center justify-center"}>
            <div className="main h-[80%] bg-[#ffffffe4] flex items-center justify-between rounded-2xl">
                <div className="h-full">
                    <img src={meetUp} alt="meet up" className="w-[100%] h-[100%]"/>
                </div>
                <ContactForm />
            </div>
        </Section>
    );
}

export default Contact;