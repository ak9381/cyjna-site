import { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import cyjnaLogo from './assets/cyjna_logo.jpeg'
import WebDev from './assets/svg_asset/Web-development.svg'
import CloudMigration from './assets/svg_asset/Cloud-Migration.svg'
import AIML from './assets/svg_asset/AI-Machine-Learning.svg'
import MLOps from './assets/svg_asset/Machine-Learning-Operations.svg'
import DataAnalytics from './assets/svg_asset/Data-Analytics.svg'
import Cybersecurity from './assets/svg_asset/Cybersecurity.svg'
import './index.pcss'

const techWords = [
  'Web Development',
  'Cloud Migration',
  'AI & Machine Learning',
  'Machine Learning Operations',
  'Data Analytics',
  'Cybersecurity',
]

const images = [
  WebDev,
  CloudMigration,
  AIML,
  MLOps,
  DataAnalytics,
  Cybersecurity,
]

function App() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left: Logo + Title */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={cyjnaLogo}
              alt="Cyjna Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-2xl text-gray-900">CYJNA</span>
          </a>

          {/* Right: Navigation */}
          <nav>
            <ul className="flex space-x-6 list-none m-0 p-0">
              <li>
                <a href="#about" className="text-gray-700 hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#foundation" className="text-gray-700 hover:text-blue-500">
                  Cyjna Foundation
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-700 hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-blue-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 text-center py-24 px-6">
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Empowering Businesses with
          </h2>
          <h3 className="text-3xl text-blue-600 font-semibold">
            <Typewriter
              words={techWords}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
        </div>

        <div className="relative w-[300px] h-[300px] overflow-hidden rounded-xl">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Tech"
              className={`
                absolute inset-0 w-full h-full object-contain
                transition-all duration-1000 ease-in-out
                ${idx === activeImage ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-110'}
              `}
            />
          ))}
        </div>
      </section>

      {/* Placeholder Sections */}
      <section id="about" className="min-h-[300px] flex items-center justify-center text-2xl">
        About Us - Coming Soon
      </section>
      <section id="foundation" className="min-h-[300px] flex items-center justify-center text-2xl">
        Cyjna Foundation - Coming Soon
      </section>
      <section id="projects" className="min-h-[300px] flex items-center justify-center text-2xl">
        Projects - Coming Soon
      </section>
      <section id="contact" className="min-h-[300px] flex items-center justify-center text-2xl">
        Contact Us - Coming Soon
      </section>
    </div>
  )
}

export default App