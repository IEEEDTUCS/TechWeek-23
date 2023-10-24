import image from "../assets/images/v222.png"
import Image from 'next/image'
const Events = () => {
    return (
        <div className='w-full bg-[#1B1B1B] text-[#fbf7f7] flex items-center justify-center' id='about'>
            <div className='flex bg-[#414141] rounded-lg items-center justify-center w-full mx-4 gap-2 h-full flex-row md:flex-row border-white border-1 border-solid border1 pt-[8vh] mmd:flex-col-reverse mt-10'>
                <div className='flex w-full md:w-1/2 justify-center items-center'>
                    <Image src={image} alt="aboutimg" className='w-[600px]' />
                </div>
                <div className='flex flex-col w-full md:w-2/5 mx-auto justify-center items-center md:items-start'>
                    <h2>
                        <span className='text-4xl md:text-5xl font-bold bg-gradient-to-tl from-[#3c82cc] to-[#58e6ff] inline-block text-transparent bg-clip-text font-Inter text-[50px] textual msm:text-[30px]'>
                            About TechWeek
                        </span>
                    </h2>
                    <div className='h-2 w-10 bg-gradient-to-tl from-[#3c82cc] to-[#58e6ff] rounded-full my-5'>
                    </div>
                    <div className='text-[#BECACA] pt-1 text-xl px-10 md:px-0 py-10 md:py-0 msm:text-[15px]'>
                        TechWeek is the annual workshop galore organised by IEEE DTU which offers budding engineers an insight into the various new and upcoming technologies. Workshops organized during TechWeek introduce technologies to students and intent to stimulate their interest in cutting edge technologies of today. <br />
                        TechWeek is a true knowledge fair for all those who have in them a craving to learn, with workshops ranging from web-designing to robotics, from programming to Graphic designing.
                        <br /><b>You don&apos;t need to be an IEEE DTU member to attend. Free for all !</b>
                    </div>
                    <div className='text-[#BECACA] pt-1 text-xl py-8 px-10 md:px-0 md:py-0'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
