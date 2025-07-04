import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Career: React.FC = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-28 pb-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">Join Our Team</h1>
        <p className="mb-8 text-lg max-w-2xl text-center">
          We're expanding our team as part of our preincubation at Venture Lab. We're looking for passionate interns to join us on this exciting journey.
        </p>
        <button
          onClick={() => window.open('https://forms.gle/kD1pjcGA2oHecMy7A', '_blank', 'noopener noreferrer')}
          className="px-8 py-3 bg-aura-purple text-white rounded-lg font-semibold shadow-md hover:bg-aura-purple-dark transition text-lg"
        >
          Apply Now
        </button>
      </div>
      {/* New section: Career Info Cards */}
      <section className="py-16 bg-aura-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-aura-purple">Work and be yourself!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow bg-aura-purple">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-aura-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0zm6 4v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2a2 2 0 012-2h4a2 2 0 012 2z" /></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-white">Meet us</h3>
              <p className="text-white/70 text-center text-sm">Learn more about our team and culture</p>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow bg-aura-purple">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-aura-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M9 7h.01M15 7h.01" /></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-white">Your possibilities</h3>
              <p className="text-white/70 text-center text-sm">Career opportunities designed for you</p>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow bg-aura-purple">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-aura-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1H7a1 1 0 00-1 1v9m12 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-white">Open positions</h3>
              <p className="text-white/70 text-center text-sm">Apply and join our team</p>
            </div>
            {/* Card 4: Recruitment FAQs */}
            <button
              className="rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow bg-aura-purple focus:outline-none focus:ring-2 focus:ring-aura-green"
              onClick={() => setShowFAQ((prev) => !prev)}
              aria-expanded={showFAQ}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-aura-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-white">Recruitment FAQs</h3>
              <p className="text-white/70 text-center text-sm">Everything you wanted to know about us</p>
            </button>
          </div>
          {/* FAQ Section */}
          {showFAQ && (
            <div className="mt-10 max-w-2xl mx-auto bg-aura-purple rounded-xl p-8 shadow-lg text-white">
              <h4 className="text-2xl font-bold mb-4">Frequently Asked Questions</h4>
              <ul className="space-y-4">
                <li>
                  <strong>Q: Who can apply for internships?</strong>
                  <br />A: Anyone passionate about technology, wellness, and innovation is welcome to apply!
                </li>
                <li>
                  <strong>Q: Is this a paid internship?</strong>
                  <br />A: Yes, our internships are paid and offer valuable real-world experience.
                </li>
                <li>
                  <strong>Q: What is the duration of the internship?</strong>
                  <br />A: Most internships last 3-6 months, but we are flexible based on your availability.
                </li>
                <li>
                  <strong>Q: Can I work remotely?</strong>
                  <br />A: Yes, we offer remote and hybrid options for most roles.
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Career; 