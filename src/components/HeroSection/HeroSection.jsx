import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from './../.././utils/animations';

export const HeroSection = () => {
  return (
    <>
      <motion.section
        id='home'
        className='h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden relative'
        initial='hidden'
        animate='visible'
        variants={fadeIn}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            className='absolute inset-0 bg-cover bg-center'
            style={{ backgroundImage: "url('./herobg.jpeg')" }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        </div>
        <div className='relative z-10 text-center max-w-4xl mx-auto px-4'>
          <motion.h1
            className='text-5xl md:text-7xl font-bold mb-6'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Dr. Jane Smith
          </motion.h1>
          <motion.p
            className='text-xl md:text-2xl mb-8'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Providing Compassionate Care for Your Health
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href='#about'
              className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300'
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
