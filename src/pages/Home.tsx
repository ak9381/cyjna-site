import { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

// Foreground icons (SVGs)
import WebDevIcon from '../assets/svg_asset/Web-development.svg'
import CloudMigrationIcon from '../assets/svg_asset/Cloud-Migration.svg'
import AIMLIcon from '../assets/svg_asset/AI-Machine-Learning.svg'
import MLOpsIcon from '../assets/svg_asset/Machine-Learning-Operations.svg'
import DataAnalyticsIcon from '../assets/svg_asset/Data-Analytics.svg'
import CybersecurityIcon from '../assets/svg_asset/Cybersecurity.svg'

// Background images (PNGs)
import WebDevBG from '../assets/jpeg_assets/Web-dev.png'
import CloudMigrationBG from '../assets/jpeg_assets/cloud_migration.png'
import AIMLBG from '../assets/jpeg_assets/AIML.png'
import MLOpsBG from '../assets/jpeg_assets/MLOps.png'
import DataAnalyticsBG from '../assets/jpeg_assets/Data_Analytics.png'
import CybersecurityBG from '../assets/jpeg_assets/CyberSecurity.png'

const techWords = [
  'Web Development',
  'Cloud Migration',
  'AI & Machine Learning',
  'Machine Learning Operations',
  'Data Analytics',
  'Cybersecurity',
]

const icons = [
  WebDevIcon,
  CloudMigrationIcon,
  AIMLIcon,
  MLOpsIcon,
  DataAnalyticsIcon,
  CybersecurityIcon,
]

const backgrounds = [
  WebDevBG,
  CloudMigrationBG,
  AIMLBG,
  MLOpsBG,
  DataAnalyticsBG,
  CybersecurityBG,
]

function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techWords.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[100vh] overflow-hidden flex items-center justify-center px-6 py-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgrounds[index]}
          alt="background"
          className="w-full h-full object-cover blur-md opacity-30 scale-110 transition-all duration-1000"
        />
      </div>

      {/* Overlay to make text readable */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-sm"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center text-center gap-12">
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Empowering Businesses with
          </h2>
          <h3 className="text-3xl text-blue-400 font-semibold min-h-[60px]">
            <Typewriter
              words={[techWords[index]]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
        </div>

        <div className="relative w-[300px] h-[300px] overflow-hidden rounded-xl">
          {icons.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Tech Icon"
              className={`
                absolute inset-0 w-full h-full object-contain
                transition-all duration-1000 ease-in-out
                ${idx === index ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-110'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home;