import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>EduMeet is your ultimate learning platform, 
            offering expert-led courses that you can access anytime, anywhere. Expand your knowledge,
             enhance your skills, and grow at your own pace with high-quality educational content 
             designed for your success! </p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contatc us</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Join to our page</h2>
          <p className='text-sm text-white/80'>The latest news, resources,send to your inbox weekly</p>
          <div className='flex items-center gap-2 pt-5'>
            <input type="email" placeholder='Enter your email' className='border border-gray-500/3 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h=9 rounded px-2 text-sm'/>
            <button className='bg-blue-600 w-24 h-9 text-white rounded'>Join</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer