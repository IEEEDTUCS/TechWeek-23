import logo from "../assets/logo.webp"
import logoIEEE from "../assets/ieeelogo.png"
import ScrollToTop from "react-scroll-up";
import Image from 'next/image'
const Navbar = () => {
    return (
        <>
            <ScrollToTop showUnder={160}>
                <div >
                    <svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1"
                        viewBox="0 0 330 330" space="preserve" className="bg-[white] p-[5px] rounded-[100%]  shadow-[rgba(0, 162, 255,1)] shadow-xl">
                        <path id="XMLID_21_" d="M213.107,41.894l-37.5-37.5c-5.857-5.858-15.355-5.858-21.213,0l-37.5,37.5
	c-4.29,4.29-5.573,10.742-3.252,16.347c2.322,5.605,7.792,9.26,13.858,9.26H150V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15
	V67.5h22.5c6.067,0,11.537-3.655,13.858-9.26C218.68,52.635,217.397,46.184,213.107,41.894z"/>
                    </svg>
                </div>
            </ScrollToTop>
            <div className='flex flex-row flex-nowrap w-full items-center justify-between bg-[#1B1B1B] z-10 text-[#fbf7f7] fixed top-0 ssm:my-[0px]'>
                <a href="#" className='flex ' >
                    <div className="h-[50px] bg-red-200 ">
                        {/* <Image src={logoIEEE}
            objectFit="cover"
            quality={100} alt="logo-IEEE" className='  ' /> */}
                    </div>
                    <div className=" h-[100px] ">
                        <Image src={logo} alt="logo" height={100} width={100} className='h-[100px] w-[100px] ssm:h-[70px] ssm:w-[70px] ' />
                    </div>
                </a>
                <div className='flex flex-row flex-nowrap items-center justify-center gap-4 md:px-14 mx-[20px] ssm:mx-[4px] md:w-auto ssm:text-sm'>
                    <a aria-label="About" href='#about' className='duration-[400ms] text-[#BECACA] text-lg font-bold py-2 hover:text-[#08D4F8] hover:scale-[1.05] ssm:text-sm'>
                        About
                    </a>
                    <a aria-label="Events" href='#events' className='hover:scale-[1.05] duration-[400ms] text-[#BECACA] text-lg font-bold py-2 hover:text-[#08D4F8] ssm:text-sm'>
                        Events
                    </a>
                    <a aria-label="Contact Us" href='#footer' className='text-lg duration-[400ms] font-bold py-2 text-[#08D4F8] border-2 border-[#08D4F8] transition transform hover:scale-110 hover:bg-[#08D4F8] hover:text-[#1B1B1B] duration-150 px-2 md:px-5 my-5 md:my-0 rounded-lg ssm:text-sm ssm:my-[0px]'>
                        Contact Us
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar
