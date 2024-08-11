import P from "./AnimatedText"
// import homebackground from "../assets/Colored Shapes2.svg"

import myImage from "/me4.png"
import myImage2 from "/me5.png"

const Home = () => {
    return (
        <section id="home" className="relative overflow-x-hidden min-w-screen bg-no-repeat bg-[url('/Colored-Shapes2.svg')] bg-center bg-fixed min-h-screen bg-cover flex flex-row items-center justify-center  p-2xl">
            <div className="flex flex-col-reverse min-[680px]:flex-row items-center justify-center md:border-blue-500"
                style={{
                    gap: 'clamp(20px, 8vw, 150px)',
                }}
            >
                <div className='text-center'>
                    <div className='inline-block'>
                        <P className={'animate-typewriter1 text-black text-xl'}>Hi everyone, my name is</P>
                    </div>
                    <h1 className='m-4 animate-bounce font-Rowdies text-black' style={{fontSize: 'clamp(50px, 4.7vw, 100px)'}}>Kanhaiya <br /> Yadav</h1>
                    <div className='inline-block'>
                        <P className={'animate-typewriter2 w-0 text-[#47cd7d] font-bold text-xl'}>I am a Passionate</P>
                    </div>
                    <br />
                    <div className='inline-block'>
                        <P className={'animate-typewriter3 w-0 text-[#47cd7d] font-bold'}
                            style={{
                                fontSize: 'clamp(20px, 2.7vw, 50px)',
                            }}
                        >Full Stack Web Developer</P>
                    </div>
                </div>

                <div className='drop-shadow-2xl animate-imgBounce group object-cover overflow-hidden box-content rounded-2xl shadow-[8px_8px_0px_2px_rgba(0,0,0,1)]'
                    style={{
                        width: 'clamp(250px,22vw, 500px)',
                        height: 'clamp(250px, 22vw, 500px)',
                    }}
                >
                        <img src={myImage} alt="kanhaiya" className='group-hover:hidden' />
                        <img src={myImage2} alt="kanhaiya" className='' />
                </div>
            </div>
            <div className="bg-[url('/layered-waves-haikei2.svg')] bg-cover w-full absolute bottom-0 h-[70px]"></div>
        </section>
    )
}

export default Home;