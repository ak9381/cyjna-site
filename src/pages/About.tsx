import { FaBullseye, FaStar, FaCogs, FaLightbulb, FaUsers } from 'react-icons/fa';
import CyjnaLogoBg from '../assets/Cyjna_Logo_files/Cyjna Transparent background.png';

function About() {
  const cards = [
    {
      title: 'Mission',
      description:
        'To deliver meaningful, ethical, and accessible tech solutions that empower people and solve systemic problems.',
      icon: <FaBullseye size={40} className="text-blue-400" />,
    },
    {
      title: 'Values',
      description:
        'Innovation, accountability, and a shared commitment to making technology truly inclusive.',
      icon: <FaStar size={40} className="text-yellow-400" />,
    },
    {
      title: 'Expertise',
      description:
        'Building across cloud, SaaS, and AI/ML with scalable systems designed for public good and digital equity.',
      icon: <FaCogs size={40} className="text-green-400" />,
    },
    {
      title: 'Principles',
      description:
        'Clarity, empathy, and impact — every decision is guided by these values to create technology that serves.',
      icon: <FaLightbulb size={40} className="text-purple-400" />,
    },
    {
      title: 'Our Team',
      description:
        'We’re a collective of engineers and dreamers building tech that bridges opportunity gaps and drives inclusion.',
      icon: <FaUsers size={40} className="text-pink-400" />,
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen py-16 px-6 md:px-20 relative"
      style={{
        backgroundImage: `url(${CyjnaLogoBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '50%',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 to-[#1e293b]/80 z-0"></div>

      {/* Intro */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">
          We didn’t start CYJNA to be just another tech company.
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed">
          We come from environments where ambition thrived despite limited resources. We’ve worked across engineering, research, education, and civic systems — and we’ve seen how powerful technologies often miss the people who need them most.
        </p>
        <p className="text-gray-200 text-lg mt-4">
          CYJNA is a mission-driven collective that builds secure, scalable, and human-centered solutions for real-world impact.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {cards.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full max-w-sm h-64 bg-[#1f2937] rounded-xl shadow-md overflow-hidden transition duration-500 group flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Icon + Title (fade out on hover) */}
            <div className="transition-opacity duration-500 group-hover:opacity-0 flex flex-col items-center">
              {item.icon}
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            </div>

            {/* Description (fade in on hover) */}
            <p className="absolute px-6 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="relative z-10 mt-20 bg-gray-800 rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
        <p className="text-blue-300 text-lg italic">
          "Cyjna was instrumental in transforming our cloud infrastructure. Their expertise and dedication were evident throughout the process."
        </p>
      </div>
    </section>
  );
}

export default About;

