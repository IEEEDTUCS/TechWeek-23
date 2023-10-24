import Image from 'next/image'
const EventCard = (props) => {
  return (
    <div className='relative h-full w-full bg-fixed flex flex-col justify-between'
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='flex flex-col'>
        <h2 className='w-full md:text-8xl text-4xl py-5 text-center font-extrabold font-spaceMono text-black mix-blend-lighten bg-[#ffffff] rounded-t-lg'>
          {props.title}
        </h2>
        <h3 className='text-center font-semibold font-prompt w-full md:text-5xl text-xl text-black mix-blend-lighten bg-[#ffffff]'>
          {props.date}
        </h3>
      </div>
      <div className='flex items-center w-full justify-center py-16'>
        <a
          href={props.link}
          target='_blank'
          rel='noreferrer'
          className='md:text-5xl px-10 rounded-2xl text-2xl text-center font-semibold font-prompt text-black mix-blend-lighten bg-[#ffffff] py-5 transistion transform hover:scale-110 duration-150 cursor-pointer'
        >
          Join Group
        </a>
      </div>
    </div>
  )
}

export default EventCard