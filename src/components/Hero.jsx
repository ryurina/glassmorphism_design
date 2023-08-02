import React from 'react'
import HeroImg from '../assets/home.png'
import {IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoGithub} from 'react-icons/io'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className='grid grid-cols-3 items-center justify-center py-7 px-5 gap-3'>
        <div className='space-y-5'>
            <motion.h1
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 2 }}
            className='text-slate-900/90 font-extrabold text-2xl'>
                Become More Than a Simple Human
            </motion.h1>
            <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 2 }}
            className='text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur eaque veniam modi. Magnam iusto temporibus aliquid, illo necessitatibus cupiditate!</motion.p>
            <div className='flex items-center justify-evenly'>
                <motion.button
                initial={{ scale:0 }}
                animate={{ scale:1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                className='text-xs bg-blue-800 text-gray-100 hover:bg-blue-700 py-2 px-3 rounded-xl'>Upgrade</motion.button>
                <motion.button
                initial={{ scale:0 }}
                animate={{ scale:1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                className='text-xs bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-3 rounded-xl'>Pricing</motion.button>
            </div>
            <br />
            <div className='flex items-center justify-evenly text-xl text-blue-500'>
                <IoLogoInstagram className='hover:text-blue-400 hover:cursor-pointer'/>
                <IoLogoLinkedin className='hover:text-blue-400 hover:cursor-pointer'/>
                <IoLogoTwitter className='hover:text-blue-400 hover:cursor-pointer'/>
                <IoLogoGithub className='hover:text-blue-400 hover:cursor-pointer'/>
            </div>
        </div>
        <motion.div
        initial={{ scale:0.99 }}
        animate={{ scale:1.01 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        className='w-full col-span-2 flex justify-center items-end' >
            <img src={HeroImg} alt="DeusProject" className='w-full drop-shadow-lg'/>
        </motion.div>
    </div>
  )
}

export default Hero