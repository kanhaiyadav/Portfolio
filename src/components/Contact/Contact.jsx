import ContactForm from "../ContactForm/ContactForm";
import './Contact.styles.css';
import meetUp from '/meetup.svg';
import Button from "../button";

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
        <section id="contact" className={"overflow-hidden min-w-screen bg-no-repeat bg-[url('/flat-mountains.svg')] bg-cover h-screen flex items-center justify-center pt-10 pb-10"}>
            <div className="main h-[90%] w-[80%] min-[880px]:bg-[#ffffffe4] flex items-center justify-center min-880px:justify-between rounded-2xl mt-20">
                <div className="flex-1 justify-center gap-5 items-center h-full flex-col hidden min-[880px]:flex pt-5 pb-5">
                    <h2 className="flex-0 font-Playwrite1 text-2xl text-black">Let&apos;s have a chat</h2>
                    <div className="w-[75%] min-w-[300px] max-w-[450px]">
                        <img src={meetUp} alt="meet up" className="w-full" />
                    </div>
                    <Button
                        onClick={handleCopy}
                        className={"bg-[#ff0000] hover:bg-[tomato]"}
                    >Copy Email</Button>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;