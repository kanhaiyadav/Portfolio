import './About.styles.css';
import aboutBackground from "../../assets/flat-mountains.svg";
import Section from '../section.component';
import Button from '../button';

const About = () => {
    return (
        <Section path={aboutBackground} className="flex flex-col items-center justify-center h-screen relative">
            <div className="custom-shape-divider-top-1722478922">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className='w-[70%]'>
                <h1 className="text-7xl text-white font-Poppins">So who am i?</h1>
                <div>
                    <p className="text-xl text-white">
                        Hello! I’m Kanhaiya Yadav, a passionate Full Stack Web Developer currently pursuing a
                        <span className='font-bold text-yellow-200'> B.Tech in Computer Science</span> and Engineering, specializing in data science. Expected to
                        graduate in 2026, I am deeply immersed in the world of web development, particularly
                        with the <span className='font-bold text-yellow-200'> MERN (MongoDB, Express.js, React, Node.js)</span> stack.</p>
                    <p className="text-xl text-white">
                        I thrive on the excitement of learning new technologies and pushing the boundaries of
                        my skills. My journey into web development has been driven by a love for creating seam
                        less, user-friendly applications that make a difference. From building dynamic,
                        responsive frontends to designing robust, scalable backends, I enjoy every aspect of the
                        development process.</p>
                    <p className="text-xl text-white">

                    </p>
                    <p className="text-xl text-white">
                        </p>
                    <p className="text-xl text-white">
                        I am excited about the future of web development and look forward to contributing to
                        innovative projects that make a positive impact. Let's build something amazing together
                        !</p>
                </div>
                <Button>My Resume</Button>
                <Button>Contact Me</Button>
            </div>

        </Section>
    );
};

export default About;
