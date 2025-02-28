import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import CallTOAction from '../../components/student/CallTOAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center text-center space-y-7'>
        <Hero />
        <Companies />
        <CourseSection />
        <TestimonialsSection />
        <CallTOAction />
        <Footer />
    </div>
  )
}

export default Home