import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-aura-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Support & Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/support" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                    Support & FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/accessories" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/accessibility" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap; 