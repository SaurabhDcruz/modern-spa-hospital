import React from "react"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    text: "Dr. Smith is an exceptional doctor. Her care and attention to detail are unmatched.",
    author: "John Doe",
    role: "Patient for 5 years"
  },
  {
    id: 2,
    text: "I've never felt more comfortable with a physician. Dr. Smith truly listens to her patients.",
    author: "Jane Smith",
    role: "New Patient"
  },
  {
    id: 3,
    text: "The level of care at Dr. Smith's clinic is outstanding. I highly recommend her services.",
    author: "Bob Johnson",
    role: "Patient for 3 years"
  }
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative rounded-2xl w-full max-w-4xl mx-auto overflow-hidden h-80">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-xl absolute inset-0 flex flex-col justify-center"
        >
          <svg className="text-blue-500 w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-600 text-lg mb-6 italic">{testimonials[currentIndex].text}</p>
          <div>
            <p className="text-gray-800 font-semibold">{testimonials[currentIndex].author}</p>
            <p className="text-gray-500">{testimonials[currentIndex].role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

