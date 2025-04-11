import CyjnaLogoBg from '../assets/Cyjna_Logo_files/Cyjna Transparent background.png';

function Contact() {
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
      <div className="flex flex-col items-center justify-center w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-2">Looking to step up your business</h1>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xzzeobgp"
          method="POST"
          className="bg-gray-800 text-white rounded-xl shadow-xl p-8 w-full max-w-2xl mx-auto"
        >
          <p className="text-center text-lg font-semibold mb-6 text-white">Let’s Talk</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-300 rounded px-4 py-2 w-full text-black bg-white"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              className="border border-gray-300 rounded px-4 py-2 w-full text-black bg-white"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            className="border border-gray-300 rounded px-4 py-2 w-full mb-4 text-black bg-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message Here"
            className="border border-gray-300 rounded px-4 py-2 w-full h-32 mb-6 text-black bg-white"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 w-full"
          >
            SUBMIT NOW
          </button>
        </form>

        {/* Contact Info Boxes */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl text-center">
          <div className="bg-gray-100 py-6 px-4 rounded-xl shadow">
            <p className="text-red-600 text-2xl mb-2">📞</p>
            <h3 className="text-gray-700 font-semibold">Phone Number</h3>
            <p className="text-sm text-gray-600">+1 (201) 238-8544</p>
          </div>
          <div className="bg-gray-100 py-6 px-4 rounded-xl shadow">
            <p className="text-red-600 text-2xl mb-2">📧</p>
            <h3 className="text-gray-700 font-semibold">Email Address</h3>
            <p className="text-sm text-gray-600">akashkraju@cyjna.com</p>
          </div>
          <div className="bg-gray-100 py-6 px-4 rounded-xl shadow">
            <p className="text-red-600 text-2xl mb-2">📍</p>
            <h3 className="text-gray-700 font-semibold">Office Address</h3>
            <p className="text-sm text-gray-600">Austin, TX, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;