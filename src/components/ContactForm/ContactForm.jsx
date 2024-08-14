import Input from "../Input/Input";
import Textarea from "../Textarea/Input";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from "./../button/button";
import { PiGithubLogoFill } from "react-icons/pi";
import RoundIcon from '../rounded-button/RoundIcons';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { ImStackoverflow } from 'react-icons/im';
// import { ReactComponent as Loader } from '/loader.svg';


const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [value, setValue] = useState({
        name: "",
        email: "",
        message: ""
    });
    const form = useRef();
    const reset = () => {
        setValue({
            name: "",
            email: "",
            message: ""
        });
    };
    const sendEmail = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setLoading(true);
        emailjs
            .sendForm('service_yag3epj', 'template_kt3b35t', form.current, {
                publicKey: 'wNCVxZcsSZIrBIYco',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    reset();
                    setLoading(false);
                    setSuccess(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setLoading(false);
                },
            );
    };
    const onChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            {
                submitted ?
                    <div className="relative shrink w-full sm:w-[40%] min-w-[370px] sm:min-w-[500px] h-full flex flex-col items-center gap-5 bg-[#14172a] p-10">
                        {
                            loading ?
                                <div className="flex flex-col items-center">
                                    <h1 className="font-Abril-Fatface"><span className="text-6xl sm:text-7xl text-[rgba(255,255,255,0.3)]">Please</span><span className="text-white font-Great-Vibes text-6xl sm:text-7xl">Wait</span></h1>
                                    <h2 className="text-white text-2xl">while your message is being sent...</h2>
                                    <div className="w-[150px] h-[150px] rounded-full">
                                        <img src="/loader.svg" alt="loader" className="h-full w-full" />
                                    </div>
                                </div>
                                :
                                <div className="flex flex-col items-center text-center">
                                    {
                                    success ?
                                    <>
                                    <h1 className="font-Abril-Fatface"><span className="text-6xl sm:text-7xl text-[rgba(255,255,255,0.3)]">Thank</span><span className="text-white font-Great-Vibes text-6xl sm:text-7xl">You</span></h1>
                                    <h2 className="text-green-500 text-2xl">Your message has been sent successfully!</h2>
                                    <p className="text-white text-lg">I will get back to you as soon as possible</p>
                                    <div className="w-[150px] h-[150px] mt-10 animate-imgBounce">
                                        <img src="/check.png" alt="success" className="w-full h-full" />
                                        </div>
                                    </>
                                            :
                                    <>
                                        <h1 className="font-Abril-Fatface"><span className="text-6xl sm:text-7xl text-[rgba(255,255,255,0.3)]">Pardon</span><span className="text-white font-Great-Vibes text-6xl sm:text-7xl">Me</span></h1>
                                        <h2 className="text-red-500 text-2xl">An error has occured!, try again later</h2>
                                        <div className="w-[150px] h-[150px] mt-10 animate-imgBounce">
                                            <img src="/error.png" alt="success" className="w-full h-full" />
                                        </div>
                                    </>
                                    }
                                </div>
                            
                        }
                    </div>
                    :
                    <form ref={form} onSubmit={sendEmail} className="relative shrink w-full sm:w-[40%] min-w-[370px] sm:min-w-[500px] h-full flex flex-col items-center gap-5 bg-[#14172a] p-10">
                        <h1 className="font-Abril-Fatface"><span className="text-6xl sm:text-7xl text-[rgba(255,255,255,0.3)]">Contact</span><span className="text-white font-Great-Vibes text-6xl sm:text-7xl">Me</span></h1>
                        <Input value={value.name} name='name' type='text' placeholder='Your Name' required onChange={onChange} />
                        <Input value={value.email} name='email' type='email' placeholder='Your email' required onChange={onChange} />
                        <Textarea value={value.message} name='message' placeholder='Your message here ...' onChange={onChange} />
                        <Button type="submit" className="flex text-lg items-center gap-2 bg-[#873a06] hover:bg-[#985c28] cursor-default">Send Message <IoSend /></Button>
                        <div className='button-container flex gap-10 mt-2'>
                            <RoundIcon linkto={'https://www.linkedin.com/in/kanhaiya2004yadav/'}><FaLinkedinIn /></RoundIcon>
                            <RoundIcon linkto={'https://github.com/kanishy'}><PiGithubLogoFill /></RoundIcon>
                            <RoundIcon linkto={'https://www.facebook.com/profile.php?id=61563497158287'}><FaFacebookF /></RoundIcon>
                            <RoundIcon linkto={'https://stackoverflow.com/users/22740986'}><ImStackoverflow /></RoundIcon>
                        </div>
                    </form>
            }
        </>
    );
};

export default ContactForm;