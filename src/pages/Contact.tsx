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
          <p className="text-gray-300 text-sm max-w-xl mx-auto mt-4">
            By submitting this form, you agree to receive text messages from CYJNA regarding your inquiry.
            Message and data rates may apply. Reply STOP to opt-out at any time. View our full Privacy Policy below
          </p>
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

          {/* Consent */}
          <div className="flex items-start mb-6">
            <input type="checkbox" name="smsConsent" required className="mr-2 mt-1" />
            <label className="text-sm text-gray-300">
              I consent to receive SMS updates from CYJNA regarding my inquiry. Message and data rates may apply.
            </label>
          </div>

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
            <p className="text-sm text-gray-600">+1 (512) 272-9637</p>
          </div>
          <div className="bg-gray-100 py-6 px-4 rounded-xl shadow">
            <p className="text-red-600 text-2xl mb-2">📧</p>
            <h3 className="text-gray-700 font-semibold">Email Address</h3>
            <p className="text-sm text-gray-600">connect@cyjna.com</p>
          </div>
          <div className="bg-gray-100 py-6 px-4 rounded-xl shadow">
            <p className="text-red-600 text-2xl mb-2">📍</p>
            <h3 className="text-gray-700 font-semibold">Office Address</h3>
            <p className="text-sm text-gray-600">Austin, TX, USA</p>
          </div>
        </div>
      </div>

      {/* Privacy Policy */}
      <div id="privacy-policy" className="mt-16 max-w-5xl mx-auto text-sm text-gray-400 leading-relaxed">
        <h2 className="text-lg font-semibold text-white mb-2">Privacy Policy</h2>
        <p>
          At <strong>CYJNA</strong>, we are committed to protecting your privacy and ensuring the security of your personal information.
          This policy outlines how we collect, use, and safeguard the information you share with us.
        </p>
        <p className="mt-4">
          <strong>1. Information We Collect:</strong> When you fill out our contact form, we may collect your name,
          email address, phone number, and any additional info you provide.
        </p>
        <p className="mt-2">
          <strong>2. How We Use Your Information:</strong> To respond to inquiries, deliver requested services, and follow up via SMS or email (only with consent).
          We do not share or sell this information.
        </p>
        <p className="mt-2">
          <strong>3. SMS Consent:</strong> By submitting the form, you agree to receive text messages related to your inquiry. Reply “STOP” to opt out.
          Msg & data rates may apply.
        </p>
        <p className="mt-2">
          <strong>4. Data Security:</strong> Your data is securely stored and accessed only by authorized CYJNA personnel.
        </p>
        <p className="mt-2">
          <strong>5. Access & Deletion:</strong> To access or delete your data, email us at <a href="mailto:connect@cyjna.com" className="text-blue-300">connect@cyjna.com</a> or call <a href="tel:+15122729637" className="text-blue-300">+1 (512) 272-9637</a>.
        </p>
        <p className="mt-2">
          <strong>6. Updates:</strong> This policy may change. Please revisit periodically. <em>Last updated April 2025.</em>
        </p>
      </div>
    </section>
  );
}

export default Contact;