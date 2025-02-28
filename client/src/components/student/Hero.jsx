import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'


const Hero = () => {

  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100//70'>
        <h1 className='text-3xl md:text-5xl font-bold text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Empover your future with the courses designed to <span className='text-blue-600'> fit your choice.</span>
        <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0'/></h1>

        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Explore expert-led courses, enhance your skills, and learn at your own pace. 
            With a seamless experience and secure access, EduMeet makes education easier 
            and more engaging. Start your journey today!
        </p>

        <p className='md:hidden hidden text-gray-500 max-w-2xl mx-auto'>
            Access expert-led courses, learn at your own pace, and elevate your skills effortlessly. Start your journey today!
        </p>

        <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
            Access expert-led courses, learn freely, and boost your skills. Start today!
        </p>
        <SearchBar />
    </div>
  )
}

export default Hero