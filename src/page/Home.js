import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='w-[80%] h-[70%] bg-gray-200/70 backdrop-blur-sm mx-auto my-auto py-7 px-12 rounded-xl border-gray-100 shadow-2xl'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home