import './About.styles.css';
import Button from '../button';
import { PiGithubLogoFill } from "react-icons/pi";
import RoundIcon from '../RoundIcons';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { ImStackoverflow } from 'react-icons/im';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section id='about' className="overflow-x-hidden min-w-screen bg-no-repeat bg-[url('/src/assets/stacked-waves-haikei.svg')] bg-cover flex flex-col items-center justify-center min-h-screen relative bg-position p-10">
            <div className='max-w-[1100px]'>
                <h1 className="text-white font-Poppins"
                    style={{
                        fontSize: 'clamp(50px, 6vw, 100px)',
                    }}
                >So who am i?</h1>
                <div className='flex flex-col gap-3 font-Open-sans'>
                    <p className="text-[15px] md:text-lg lg:text-xl text-white">
                        Hello! I’m Kanhaiya Yadav, a passionate Full Stack Web Developer currently pursuing 
                        <span className='font-bold text-[#FFD700]'> B.Tech in Computer Science and Engineering</span>, specializing in data science. Expected to
                        graduate in 2026, I am deeply immersed in the world of web development, particularly
                        with the <span className='font-bold text-[#FFD700]'> MERN (MongoDB, Express.js, React, Node.js)</span> stack.</p>
                    <p className="text-[15px] md:text-lg lg:text-xl text-white">
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
                        <Button downloadLink={'/Kanhaiya Resume v4.pdf'} name={"Kanhaiya's resume"} className='text-white cursor-default hover:text-white'>My Resume</Button>
                        <Link to='contact' smooth duration={600}><Button>Contact Me</Button></Link>
                    </div>
                    <div className='flex gap-10'>
                        <RoundIcon linkto={'https://www.linkedin.com/in/kanhaiya2004yadav/'} className="hover:scale-110 bg-[#0077B5] group"><FaLinkedinIn className='text-3xl text-white group-hover:text-white' /></RoundIcon>
                        <RoundIcon linkto={'https://github.com/kanishy'} className="hover:scale-110 bg-white"><PiGithubLogoFill className='text-3xl text-black' /></RoundIcon>
                        <RoundIcon linkto={'https://www.facebook.com/profile.php?id=61563497158287'} className="hover:scale-110 bg-[#1877F2]"><FaFacebookF className='text-3xl text-white' /></RoundIcon>
                        <RoundIcon linkto={'https://stackoverflow.com/users/22740986'} className="group hover:scale-110 bg-white"><ImStackoverflow className='text-3xl text-[#F58025]' /></RoundIcon>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;
