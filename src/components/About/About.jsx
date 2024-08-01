import './About.styles.css';
import aboutBackground from "../../assets/flat-mountains.svg";

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen relative" style={{
            background: `url(${aboutBackground})`,
        }}>
            <div className="custom-shape-divider-top-1722478922">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <h1 className="text-4xl font-bold">About</h1>
            <p className="text-xl">I am a full stack developer</p>
        </div>
    );
};

export default About;