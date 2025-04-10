import OurStoryImg from '../assets/AboutUs/ourstory.jpeg';
import MissionImg from '../assets/AboutUs/Mission.jpg';
import ValuesImg from '../assets/AboutUs/ourvalues.jpg';
import ExpertiseImg from '../assets/AboutUs/expertise.jpeg';

function About() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Our Story */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Our story</h2>
          <p className="text-gray-300">
            At CYJNA, we are driven by a commitment to <span className="font-semibold text-white">precision, innovation, and collaboration</span>.
            We strive to transform challenges into opportunities through technology.
          </p>
        </div>
        <div>
          <img src={OurStoryImg} alt="Our Story" className="w-full max-w-sm mx-auto" />
        </div>

        {/* Mission */}
        <div>
          <img src={MissionImg} alt="Mission" className="w-full max-w-sm mx-auto" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">Mission</h2>
          <p className="text-gray-300">
            <span className="font-semibold text-white">To empower businesses</span> with impactful solutions that drive lasting success.
          </p>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Our Values</h2>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Innovation, accountability,</span> and a shared purpose guide everything we do.
          </p>
        </div>
        <div>
          <img src={ValuesImg} alt="Values" className="w-full max-w-sm mx-auto" />
        </div>

        {/* Expertise */}
        <div>
          <img src={ExpertiseImg} alt="Expertise" className="w-full max-w-sm mx-auto" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">Our Expertise</h2>
          <p className="text-gray-300">
            Clients rely on our expertise across <span className="font-semibold text-white">SaaS, cloud migration, and AI / ML operations</span>.
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-20 bg-gray-800 rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
        <p className="text-blue-300 text-lg italic">
          "Cyjna was instrumental in transforming our cloud infrastructure. Their expertise and dedication were evident throughout the process."
        </p>
      </div>
    </section>
  );
}

export default About;
