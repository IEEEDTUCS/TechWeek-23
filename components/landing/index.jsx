import image from "../assets/images/landing.svg"
import Image from 'next/image'
const Landing = () => {
    return (
        <div className='mt-[20px] md:h-screen w-screen  md:w-auto flex md:flex-row mmd:flex-col-reverse items-center justify-center bg-[#1B1B1B] text-[#fbf7f7]  md:flex-row font-inter '>
            <div className='flex flex-col items-center md:items-start justify-center md:mx-auto gap-2 md:px-12 ml-[15px]  '>
                <div className='flex flex-col '>
                    <h1 className='text-6xl font-bold bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] inline-block text-transparent bg-clip-text px-4 md:px-0  '>TechWeek &apos;23</h1>
                    <h2 className='text-4xl font-bold font-prompt px-4'>By IEEE-DTU</h2>
                    <div className='flex flex-col  md:items-start px-4 mt-3  '>
                        <h3 className='text-2xl font-thin font-prompt  '>Tech Up Your Skills</h3>
                        <div className='text-[#BECACA] pt-1 text-justify'>
                            TechWeek by IEEE DTU is the annual workshop event for aspiring engineers to get a glimpse into the latest and upcoming technologies. Join us and become a tech trailblazer!
                        </div>
                    </div>
                </div>
                <div className='bg-[#08D4F8] text-[#1B1B1B] font-bold font-prompt text-xl px-4 w-8/12 rounded-lg py-1 transform transition duration-500 hover:scale-110 hover:bg-transparent border-2 border-[#08D4F8] hover:text-[#08D4F8] mt-4'>
                    <a aria-label="Register Now →" href='https://www.google.com' target='_blank' rel='noreferrer'>
                        <button className='w-full flex justify-center items-center my-1 md:mb-0 px-0 text-[22px]'>
                            Register Now →
                        </button>
                    </a>
                </div>
            </div>
            <div className='flex w-full md:w-1/2 justify-center items-center z-1 mt-24 md:mt-0 mb-20 md:mb-0 mmd:mb-10'>
                <Image src={image} alt="landingsvg" className='h-[70vh] w-[70vh] mmd:h-[50vh]  ' />
            </div>
        </div>
    )
}

export default Landing
