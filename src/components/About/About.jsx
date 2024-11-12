import './About.styles.css';
import Button from '../button/button';
import { PiGithubLogoFill } from "react-icons/pi";
import RoundIcon from '../rounded-button/RoundIcons';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { ImStackoverflow } from 'react-icons/im';

const About = () => {
    return (
        <section id='about' className="overflow-x-hidden min-w-screen bg-no-repeat bg-[url('/stacked-waves-haikei.svg')] bg-cover flex flex-col items-center justify-center md:min-h-screen relative bg-position p-10">
            <div className='max-w-[1100px]'>
                <h1 className="text-white font-Poppins text-[40px] sm:text-[50px]"
                    style={{
                        fontSize: 'clamp(40px, 6vw, 100px)',
                    }}
                >So who am i?</h1>
                <div className='flex flex-col gap-3 font-Open-sans'>
                    <p className="text-[15px] md:text-lg lg:text-xl text-white">
                        Hello! I’m Kanhaiya Yadav, a passionate Full Stack Web Developer currently pursuing
                        <span className='font-bold text-[#c54d20]'> B.Tech in Computer Science and Engineering</span>, specializing in data science. Expected to
                        graduate in 2026, I am deeply immersed in the world of web development, particularly
                        with the <span className='font-bold text-[#c54d20]'> MERN (MongoDB, Express.js, React, Node.js)</span> stack.</p>
                    <p className="hidden sm:block text-[15px] md:text-lg lg:text-xl text-white">
                        I thrive on the excitement of learning new technologies and pushing the boundaries of
                        my skills. My journey into web development has been driven by a love for creating seam
                        less, user-friendly applications that make a difference. From building dynamic,
                        responsive frontends to designing robust, scalable backends, I enjoy every aspect of the
                        development process.</p>
                    <p className="text-[15px] md:text-lg lg:text-xl text-white">
                        I am excited about the future of web development and look forward to contributing to
                        innovative projects that make a positive impact. Let&apos;s build something amazing together
                        !</p>
                </div>

                <div className='flex flex-col md:flex-row gap-10 justify-between items-center mt-5'>
                    <div className='flex items-center gap-5'>
                        <a href={'/My-Resume.pdf'} download={"Kanhaiya's resume"} ><Button>My Resume</Button></a>
                        <Button
                            onClick={() => {
                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >Contact Me</Button>
                    </div>
                    <div className='button-container flex gap-10'>
                        <RoundIcon linkto={'https://www.linkedin.com/in/kanhaiya2004yadav/'}><FaLinkedinIn/></RoundIcon>
                        <RoundIcon linkto={'https://github.com/kanhaiyadav'}><PiGithubLogoFill/></RoundIcon>
                        <RoundIcon linkto={'https://www.facebook.com/profile.php?id=61563497158287'}><FaFacebookF/></RoundIcon>
                        <RoundIcon linkto={'https://stackoverflow.com/users/22740986'}><ImStackoverflow/></RoundIcon>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;
