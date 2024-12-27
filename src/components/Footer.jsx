import React from "react"
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Dr. Smith's Clinic</h3>
            <p className="text-gray-400">Providing compassionate care since 2005</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p className="text-gray-400">123 Medical Drive, Healthville, HV 12345</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
            <p className="text-gray-400">Email: info@drsmithclinic.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Hours</h3>
            <p className="text-gray-400">Monday - Friday: 9am - 5pm</p>
            <p className="text-gray-400">Saturday: 10am - 2pm</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 Dr. Smith's Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

