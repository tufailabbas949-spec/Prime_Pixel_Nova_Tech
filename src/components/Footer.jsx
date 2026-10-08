import React from 'react'
import imagelogo from "../assets/ppntNewlogo.png"
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {

    const  navigate = useNavigate()
  return (
    
  <footer className="bg-[#0B1120] text-white">
  <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

    {/* Top Footer */}
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-white">
            <img
              src={imagelogo}
              alt="PPNT Logo"
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold tracking-wide">
            PPNT
          </h2>
        </div>

        <p className="max-w-xs text-sm leading-6 text-gray-400">
          We build modern websites and digital solutions that
          help businesses grow online.
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium transition hover:bg-blue-700" onClick={()=>{
                 navigate('/contact')
              window.scrollTo({ top: 0, behavior: "smooth" }) }
        }>
          Start a Project
        </button>
      </div>

      {/* Company */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
          Company
        </h3>

        <ul className="space-y-3 text-sm text-gray-400">
          <li>
            <a href="/" className="transition hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="transition hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="/services" className="transition hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="transition hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
          Services
        </h3>

        <ul className="space-y-3 text-sm text-gray-400">
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Business Websites</li>
          <li>Web Applications</li>
          <li>Digital Solutions</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
      
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
          Let's Connect 
        </h3>
     
        <p className="mb-4 text-sm leading-6 text-gray-400">
          Have an idea or need a website for your business?
          Let's build something together.
        </p>

        <a
          href="mailto:primepixelnovatech@gmail.com"
          className="text-sm text-blue-400 transition hover:text-blue-300"
        >
        primepixelnovatech@gmail.com
        </a>

  {/* Phone */}
  <a
    href="tel:+919352529855"
    className="mt-3 block text-sm text-gray-400 transition hover:text-white"
  >
    +91 9352529855
  </a>
 <a
    href="tel:+919509939643"
    className="mt-3 block text-sm text-gray-400 transition hover:text-white"
  >
    +91 9509939643
  </a>
  {/* WhatsApp */}
  <a
    href="https://wa.me/919352529855?text=Hello%20PPNT%2C%20I%20want%20to%20discuss%20a%20website%20project."
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-block text-sm text-green-400 transition hover:text-green-300"
  >
    Chat on WhatsApp
  </a>



        {/* Social Links */}
        <div className="mt-5 flex gap-3">
          <a
             href="https://www.instagram.com/prime_pixel_nova_tech/" target='_blank'
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sm text-gray-400 transition hover:bg-blue-600 hover:text-white"
          >
            IG
          </a>

          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sm text-gray-400 transition hover:bg-blue-600 hover:text-white"
          >
            IN
          </a>

          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sm text-gray-400 transition hover:bg-blue-600 hover:text-white"
          >
            GH
          </a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="my-10 h-px bg-white/10"></div>

    {/* Bottom Footer */}
    <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} Prime Pixal Nova Tech . All rights reserved.
      </p>

      <div className="flex gap-6">
        <Link to="/privacypolicy" className="transition hover:text-white">
          Privacy Policy
        </Link>

        <Link to="/privacypolicy" className="transition hover:text-white">
          Terms & Conditions
        </Link>
      </div>
    </div>

  </div>
</footer>
)}

export default Footer