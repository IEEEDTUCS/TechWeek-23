import EventCard from "./EventCard"
import logo from '../assets/logo.webp'
import dsai from "../assets/images/dsa.png"
import analogi from "../assets/images/analog.jpeg"
import mli from "../assets/images/ml.png"
import webi from "../assets/images/web.png"
import roboticsi from "../assets/images/robotics.png"
import datai from "../assets/images/data.webp"
import designi from "../assets/images/design.jpeg"
import basici from "../assets/images/basic.jpeg"
import androidi from "../assets/images/android.jpeg"
import Image from 'next/image'
const EventList = () => {
    return (
        <div className='text-white w-full bg-[#1B1B1B]' id='events'>
            <div className='flex flex-col items-center pt-10 '>
                <h2 className='text-5xl font-bold bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] inline-block text-transparent bg-clip-text font-prompt'>
                    Events
                </h2>
                <div className='h-2 w-10 bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] rounded-full mt-2 mb-5'>
                </div>
                <div className='text-xl px-8 pb-8 md:px-0 justify'>
                    With a wide range of workshops from Web Design to Robotics, Programming to data Analytics, there&apos;s something for everyone with a passion for technology.
                </div>
            </div>
            <div className='hidet h-screen w-4/5 mx-auto overflow-y-scroll snap-y snap-mandatory rounded-xl scrollbar-hide mb-20'>

                <div className='snap-start h-full w-full'>
                    <EventCard title="Basic Programming" img="/images/basic.jpeg" date="06 Nov 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Web Development" img="/images/web.png" date="04 Nov 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Basic Electronics" img="/images/analog.jpeg" date="07 Nov 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Android Development" img="/images/android.jpeg" date="09 Nov 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Data Analytics" img="/images/data.webp" date="07 Nov 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="ML/AI" img="/images/ml.png" date="08 Nov 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Data Structures and Algorithms" img="/images/dsa.png" date="06 Nov 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Graphic Design" img="/images/design.jpeg" date="08 Nov 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Robotics" img="/images/robotics.png" date="09 Nov 2023" link="" />
                </div>
            </div>
            <div className={` hidet2 grid-container mx-[20px] my-[10px] `} >
                <div className="item1 des">1</div>
                <div className="item2 des"
                    style={{
                        background: `url(${analogi})`,
                    }}
                >
                    <div className="card-main backbox card1 mx-[100px] ">
                        <div className="card-sub">
                            <div className="name boldname">
                                <div className="namesub">
                                    Basic Electronics
                                </div>
                            </div>
                            <div className="date">
                                <div className="datesub">
                                    07 Nov 2023
                                </div>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link1">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item3 des">3</div>
                <div className="item4 des2">
                    <div className={`imgcen text-center flex justify-center `}>
                        <Image src={logo} alt='logo' height={500} width={500} className="h-[500px] w-[500px]" />
                    </div>

                </div>
                <div className="item5 des" style={{
                    background: `url(${dsai})`,
                }}
                >
                    <div className="card-main backbox backbox" >
                        <div className="card-sub "

                        >
                            <div className="name boldname">
                                <div className="namesub ">
                                    DSA
                                </div>
                            </div>
                            <div className="date">
                                <div className="datesub">
                                    06 Nov 2023
                                </div>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link6">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item6 des"
                    style={{
                        background: `url(${mli})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <div className="namesub">
                                    AI/ML
                                </div>
                            </div>
                            <div className="date">
                                <div className="datesub">
                                    08 Nov 2023
                                </div>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link2">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item7 des"
                    style={{
                        background: `url(${roboticsi})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <div className="namesub">
                                    Robotics
                                </div>
                            </div>
                            <div className="date">
                                <div className="datesub">
                                    09 Nov 2023
                                </div>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link8">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item8 des"
                    style={{
                        background: `url(${webi})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <div className="namesub">
                                    Web Development
                                </div>
                            </div>
                            <div className="date">
                                <div className="datesub">
                                    04 Nov 2023
                                </div>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link3">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div></div>
                <div className="item9 des"
                    style={{
                        background: `url(${basici})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <div className="namesub">
                                    Basic <br />Programming
                                </div>
                            </div>
                            <div className="date">
                                <div className="datesub">
                                    06 Nov 2023
                                </div>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link7">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item10 des"
                    style={{
                        background: `url(${androidi})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <div className="namesub">
                                    Android<br />Development
                                </div>
                            </div>
                            <div className="date">
                                <div className="datesub">
                                    09 Nov 2023
                                </div>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link4">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div></div>
                <div className="item11 des">11</div>
                <div className="item12 des"
                    style={{
                        background: `url(${designi})`,
                    }}
                >

                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <div className="namesub">
                                    Graphics Design
                                </div>
                            </div>
                            <div className="date">
                                <div className="datesub">
                                    08 Nov 2023
                                </div>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link9">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div></div>
                <div className="item13 des"
                    style={{
                        background: `url(${datai})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <div className="namesub">
                                    Data Analytics
                                </div>
                            </div>
                            <div className="date">
                                <div className="datesub">
                                    07 Nov 2023
                                </div>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link5">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item14 des">14</div>
            </div>

        </div>
    )
}

export default EventList