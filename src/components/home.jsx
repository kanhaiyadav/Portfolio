import P from "./AnimatedText"
// import homebackground from "../assets/Colored Shapes2.svg"
import myImage from "../assets/me4.png"
import myImage2 from "../assets/me5.png"

const Home = () => {
    return (
        <section id="home" className="overflow-x-hidden min-w-screen bg-no-repeat bg-[url('/src/assets/Colored-Shapes2.svg')] bg-fixed h-screen bg-cover flex flex-row items-center justify-center gap-[100px]">
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

            <div className='drop-shadow-2xl animate-imgBounce group'>
                <div className='w-80 h-80 object-cover overflow-hidden box-content rounded-2xl'>
                    <img src={myImage} alt="kanhaiya" className='group-hover:hidden' />
                    <img src={myImage2} alt="kanhaiya" className='' />
                </div>
            </div>
            <div className="bg-[url('/src/assets/layered-waves-haikei2.svg')] bg-cover w-full absolute bottom-0 h-[70px]"></div>

        </section>
    )
}

export default Home;