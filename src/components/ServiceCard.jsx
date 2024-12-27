import React from 'react'
import { motion } from 'framer-motion'
import { Activity, ShieldCheck, Stethoscope } from 'lucide-react'

const iconComponents = {
  activity: Activity,
  'shield-check': ShieldCheck,
  stethoscope: Stethoscope,
}

export default function ServiceCard({ title, description, icon }) {
  const IconComponent = iconComponents[icon]

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-6">
        <IconComponent size={32} />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

