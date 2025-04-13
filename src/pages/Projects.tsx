import { useState } from 'react';
import { motion } from 'framer-motion';
import CyjnaLogoBg from '../assets/Cyjna_Logo_files/Cyjna Transparent background.png';
import amazonLogo from '../assets/Projects_logos/amazonLogo.jpg';
import barclaysLogo from '../assets/Projects_logos/Barclays-Logo.jpg';
import nyuLogo from '../assets/Projects_logos/nyu_logo.jpg';
import oracleLogo from '../assets/Projects_logos/Oracle-Logo.jpg';

interface Project {
  name: string;
  description: string;
  logo?: string;
}

interface ProjectSection {
  id: string;
  label: string;
  color: string;
  line: string;
  projects: Project[];
}

const projectSections: ProjectSection[] = [
  {
    id: 'current',
    label: 'Current Projects',
    color: 'bg-white',
    line: 'bg-green-400',
    projects: [
      { name: 'AI Literacy Platform', description: 'An AI-powered tool improving literacy in underserved communities.' },
      { name: 'GovCloud Modernization', description: 'Digitizing public sector infrastructure with scalable cloud.' }
    ]
  },
  {
    id: 'completed',
    label: 'Completed Projects',
    color: 'bg-white',
    line: 'bg-blue-400',
    projects: [
      {
        name: 'Amazon Ads Intelligence Platform',
        description:
          'Amazon Ads required a smarter way for advertisers to understand and optimize their campaign performance. CYJNA developed a scalable pipeline using AWS services like S3, Lambda, and Athena to collect, transform, and present campaign insights in near real-time. Additionally, AI models were incorporated to identify anomalies and automatically flag underperforming ads. This platform enabled more strategic ad placement, reduced wastage, and improved advertiser trust.',
        logo: amazonLogo,
      },
      {
        name: 'Barclays Secure Data Exchange for Compliance',
        description:
          'Barclays partnered with CYJNA to build a cloud-native platform for compliance reporting. Leveraging AWS GovCloud, we enabled secure, encrypted transmission of financial compliance reports to regulators. The system featured end-to-end audit logging, role-based access control, and real-time status tracking. This cut manual processing by 60%, met GDPR/SOX compliance, and laid the foundation for transparent government-facing data pipelines.',
        logo: barclaysLogo,
      },
      {
        name: 'NYU AI-Driven Research Automation',
        description:
          'CYJNA collaborated with New York University to build an AI/ML-powered data infrastructure that could automate simulation pipelines and accelerate academic research. We developed intelligent job scheduling systems integrated with Kubernetes, deployed serverless APIs for faster data retrieval, and created real-time dashboards using React and D3.js. This platform is now used by researchers to streamline experiments, analyze insights, and publish with greater efficiency.',
        logo: nyuLogo,
      },
      {
        name: 'Oracle Cross-Region Cloud Storage Optimization',
        description:
          'CYJNA supported Oracle Cloud Infrastructure (OCI) in designing a cross-regional media storage layer. The solution enabled seamless, low-latency access to critical datasets across global regions by implementing smart caching, accelerated file hydration, and region-aware routing. With security, scalability, and fault tolerance at its core, this solution empowered Oracle to optimize internal workflows while meeting data sovereignty and access mandates important for government entities.',
        logo: oracleLogo,
      },
    ]
  },
  {
    id: 'upcoming',
    label: 'Upcoming Projects',
    color: 'bg-white',
    line: 'bg-purple-400',
    projects: [
      { name: 'Civic Tech Assistant', description: 'Conversational AI to simplify access to public services.' },
      { name: 'Zero-Carbon Infra', description: 'Building carbon-aware serverless systems for NGOs.' }
    ]
  }
];

function Projects() {
  const [activeSection, setActiveSection] = useState<string>('current');
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

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
      <div className="relative flex gap-24 items-start w-full max-w-7xl z-10">
        {/* Vertical Section Navigation */}
        <ul className="space-y-12 relative text-left text-2xl">
          {projectSections.map((s, sectionIdx) => (
            <li key={s.id}>
              <div
                className="cursor-pointer font-bold hover:opacity-80"
                onMouseEnter={() => setActiveSection(s.id)}
              >
                {s.label}
              </div>
              {activeSection === s.id && (
                <motion.div
                  layoutId="sectionLine"
                  className={`absolute left-56 top-[${sectionIdx * 90}px] h-0.5 w-64 ${s.line}`}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              {/* Subprojects */}
              {activeSection === s.id && (
                <ul className="ml-4 mt-3 space-y-2 text-xl">
                  {s.projects.map((p, projIdx) => (
                    <li
                      key={projIdx}
                      className="cursor-pointer text-gray-300 hover:text-white"
                      onMouseEnter={() => setHoveredProject(p)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      → {p.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Project Content */}
        <motion.div
          key={hoveredProject ? hoveredProject.name : 'default'}
          className="relative ml-10 max-w-2xl min-h-[300px] rounded-xl shadow-2xl bg-gray-100 text-gray-800 flex flex-col items-center justify-center px-10 py-16 text-2xl font-medium text-center transition-all duration-500"
        >
          {hoveredProject?.logo && (
            <img
              src={hoveredProject.logo}
              alt="project-logo"
              className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none"
            />
          )}
          <div className="relative z-10 space-y-6">
            {hoveredProject ? (
              <>
                <img src={hoveredProject.logo} alt="Project Logo Top" className="w-24 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">{hoveredProject.name}</h3>
                <p className="text-lg leading-loose text-gray-700">{hoveredProject.description}</p>
              </>
            ) : (
              <p className="text-gray-500 text-xl">Hover over a project</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;


