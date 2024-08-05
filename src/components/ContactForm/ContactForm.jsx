import Input from "../Input/Input";
import Textarea from "../Textarea/Input";
import Button from '../button';
import { IoSend } from "react-icons/io5";


const ContactForm = () => {
    return (
        <form className="max-w-[500px] h-full flex flex-col items-center gap-5 bg-[#5644b8] rounded-2xl p-10">
            <h1 className="font-Abril-Fatface"><span className="text-7xl text-[rgba(255,255,255,0.3)]">Contact</span><span className="text-red-500 font-Great-Vibes text-7xl">Me</span></h1>
            <Input type='text' placeholder='Your Name' required/>
            <Input type='email' placeholder='Your email' required/>
            <Textarea placeholder='Your message here ...' />
            <Button>Send Message <IoSend /></Button>
        </form>
    );
};

export default ContactForm;