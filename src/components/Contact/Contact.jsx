import ContactForm from "../ContactForm/ContactForm";
import './Contact.styles.css';
import meetUp from '../../assets/meetup.svg';

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
        <section id="contact" className={"overflow-x-hidden min-w-screen bg-no-repeat bg-[url('/src/assets/flat-mountains.svg')] bg-cover h-screen flex items-center justify-center p-10"}>
            <div className="main h-[80%] w-[80%] md:bg-[#ffffffe4] flex items-center justify-between rounded-2xl mt-20">
                <div className="relative flex-1 h-full min-h-[600px] hidden md:block"
                    style={{
                        width: 'clamp(250px, 8vw, 800px)',
                    }}
                >
                    <h2 className="absolute left-[20%] top-[18%] font-Playwrite1 text-xl text-black lg:hidden">Let&apos;s have a chat</h2>
                    <img src={meetUp} alt="meet up" className="h-full" />
                    <p className="absolute left-[28%] bottom-[13%] text-xl text-white bg-blue-600 rounded-lg p-3 lg:hidden active:scale-95 cursor-default border-2 border-black"
                        onClick={handleCopy}
                    >Copy Email</p>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;