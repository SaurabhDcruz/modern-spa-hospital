import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

export default function Header () {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all hover:bg-opacity-100 duration-300 ${
        scrolled ? 'bg-white bg-opacity-90 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href='#'
              className={`text-2xl font-bold ${
                scrolled ? 'text-blue-600' : 'text-white'
              }`}
            >
              Dr. Smith's Clinic
            </a>
          </motion.div>
          <nav className='hidden md:flex space-x-6'>
            {['Home', 'About', 'Services', 'Testimonials'].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className={`${
                    scrolled
                      ? 'text-gray-600 hover:text-blue-600'
                      : 'text-white hover:text-blue-200'
                  } transition duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </nav>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? 'text-gray-600' : 'text-white'
              } hover:text-blue-600`}
            >
              <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                {isOpen ? <X /> : <Menu />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden bg-white'
          >
            <div className='container mx-auto px-4 py-2'>
              {['Home', 'About', 'Services', 'Testimonials'].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className={`${
                      scrolled
                        ? 'text-gray-600 hover:text-blue-600'
                        : 'text-gray-600 hover:text-blue-200'
                    } transition duration-300`}
                    onClick={()=>setTimeout(()=>{setIsOpen(!isOpen)},700)}
                  >
                    <div className='py-3 px-2 hover:shadow-md transition-all duration-300 rounded-md'>{item}</div>
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
