import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-aura-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
          <div className="prose prose-invert">
            <p className="mb-4">
              AuraFlo is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Conformance Status</h2>
            <p className="mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We aim to conform to WCAG 2.1 Level AA standards.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Feedback</h2>
            <p className="mb-4">
              We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Phone: +91 **********</li>
              <li>Email: info@auraflo.com</li>
              <li>Address: Thapar University, Patiala, 147001</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility; 