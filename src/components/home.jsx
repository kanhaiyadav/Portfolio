import Section from "./section.component"
import P from "./AnimatedText"
// import homebackground from "../assets/Colored Shapes2.svg"
import myImage from "../assets/myImage.jpg"

const Home = () => {
    return (
        <Section className="bg-[url('/src/assets/Colored-Shapes2.svg')] bg-fixed h-screen bg-cover flex flex-row items-center justify-center gap-[100px]">
            <div className='text-center'>
                <div className='inline-block'>
                    <P className={'animate-typewriter1 text-black'}>Hi everyone, my name is</P>
                </div>  
                <h1 className='m-4 animate-bounce font-Rowdies text-7xl text-black'>Kanhaiya <br /> Yadav</h1>
                <div className='inline-block'>
                    <P className={'animate-typewriter2 w-0 text-[#47cd7d] font-bold'}>I am a Passionate</P>
                </div>
                <br />
                <div className='inline-block'>
                    <P className={'animate-typewriter3 w-0 text-[#47cd7d] font-bold text-3xl'}>Full Stack Web Developer</P>
                </div>
            </div>

            <div className='border-[20px] border-white bg-white rounded-3xl animate-imgBounce'>
                <div className='w-80 h-80 object-cover rounded-3xl overflow-hidden box-content '>
                    <img src={myImage} alt="kanhaiya" className='' />
                </div>
            </div>
            <div className="bg-[url('/src/assets/layered-waves-haikei2.svg')] bg-cover w-full absolute bottom-0 h-[70px]"></div>

        </Section>
    )
}

export default Home;