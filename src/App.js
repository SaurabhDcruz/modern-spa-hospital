import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/animations';
import Header from './components/Header'
import ServiceCard from './components/ServiceCard'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import './App.css';
import { HeroSection } from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />

        <motion.section
          id="about"
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">About Dr. Smith</h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <img
                  src="./DataResult.png"
                  alt="Dr. Jane Smith"
                  className="rounded-lg shadow-2xl"
                  width={800}
                  height={600}
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Dr. Jane Smith is a board-certified physician with over 15 years of experience in internal medicine. 
                  She is dedicated to providing personalized, compassionate care to all her patients, 
                  focusing on preventive health and chronic disease management.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  With a patient-centered approach, Dr. Smith ensures that each individual receives 
                  the attention and care they deserve. Her expertise spans a wide range of medical 
                  conditions, allowing her to offer comprehensive healthcare solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="services"
          className="py-20 bg-blue-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Primary Care" 
                description="Comprehensive health care services for patients of all ages, focusing on prevention, diagnosis, and treatment of various medical conditions."
                icon="stethoscope"
              />
              <ServiceCard 
                title="Preventive Health" 
                description="Proactive health screenings, vaccinations, and lifestyle counseling to help you maintain optimal health and prevent potential health issues."
                icon="shield-check"
              />
              <ServiceCard 
                title="Chronic Disease Management" 
                description="Personalized care plans and ongoing support for patients with long-term health conditions such as diabetes, hypertension, and heart disease."
                icon="activity"
              />
            </div>
          </div>
        </motion.section>

        <section id="testimonials" className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Patient Testimonials</h2>
            <Carousel />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
