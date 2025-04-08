import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-aura-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert">
            <p className="mb-4">
              Welcome to AuraFlo. By accessing our website and using our services, you agree to be bound by these Terms of Service.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
            <p className="mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality of our services are owned by AuraFlo and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              AuraFlo shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email: info@auraflo.com</li>
              <li>Phone: +91 **********</li>
              <li>Address: Thapar University, Patiala, 147001</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms; 