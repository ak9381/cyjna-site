import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Foundation from './pages/Foundation'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-gray-900 font-sans">
      {/* Top Strip */}
      <div className="bg-[#1e293b] text-white text-sm py-2 px-4 flex justify-between items-center">
        {/* Left: Email and Phone */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <span className="text-red-400">✉</span>
            connect@cyjna.com
          </span>
          <span className="flex items-center gap-1">
            <span className="text-green-400">☎</span>
            201-238-8544
          </span>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex gap-4 text-white text-base">
          <a href="#" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left: Logo and Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Cyjna_SVG_file.svg"
              alt="Cyjna Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-2xl text-gray-900">CYJNA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 list-none m-0 p-0">
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue-500">About Us</Link>
              </li>
              <li>
                <Link to="/foundation" className="text-gray-700 hover:text-blue-500">Cyjna Foundation</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>About Us</Link>
              </li>
              <li>
                <Link to="/foundation" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Cyjna Foundation</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App