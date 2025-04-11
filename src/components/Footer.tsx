import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsContactOpen(false);
  };

  return (
    <footer className="bg-aura-darkBlack relative overflow-hidden pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aura-purple/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(126,105,171,0.05),transparent_40%)]"></div>
      
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <img 
          src="/images/logo.png" 
          alt="AuraFlo Background Logo" 
          className="w-[600px] h-[600px] object-contain brightness-200 contrast-125 animate-float"
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aura-purple/20 to-aura-green/20 p-2 ring-2 ring-aura-purple/30">
                <img src="/images/logo.png" alt="AuraFlo Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-gradient">AURAFLO</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Transforming yoga practice through innovative technology and mindful design. Experience the future of wellness.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/product/auraflo-1" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  AuraFlo 1.0
                </Link>
              </li>
              <li>
                <Link to="/product/auraflo-2" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  AuraFlo 2.0
                </Link>
              </li>
              <li>
                <Link to="/product/auraflo-3" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  AuraFlo 3.0
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  Support & FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="glass p-6 rounded-xl hover:scale-105 hover:bg-aura-purple/5 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 text-aura-purple shrink-0 mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground group-hover:text-white transition-colors duration-300">
                  Thapar University <br />Patiala, 147001
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-aura-purple shrink-0 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground group-hover:text-white transition-colors duration-300">+91 **********</span>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 text-aura-purple shrink-0 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground group-hover:text-white transition-colors duration-300">info@auraflo.com</span>
              </li>
            </ul>
            <button
              onClick={() => setIsContactOpen(true)}
              className="w-full px-4 py-2 bg-aura-purple/20 text-aura-purple rounded-lg hover:bg-aura-purple/30 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
        
        {/* Contact Form Modal */}
        {isContactOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-aura-darkBlack rounded-xl p-8 max-w-md w-full mx-4 glass hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="text-muted-foreground hover:text-white hover:scale-110 transition-all duration-300"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-aura-darkBlack border border-aura-purple/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aura-purple/50 hover:border-aura-purple/40 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-aura-darkBlack border border-aura-purple/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aura-purple/50 hover:border-aura-purple/40 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 bg-aura-darkBlack border border-aura-purple/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aura-purple/50 hover:border-aura-purple/40 transition-colors duration-300 h-32"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-aura-purple/20 text-aura-purple rounded-lg hover:bg-aura-purple/30 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        )}
        
        {/* Footer Bottom */}
        <div className="border-t border-aura-purple/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} AuraFlo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy-policy" 
              className="text-muted-foreground hover:text-aura-purple transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-muted-foreground hover:text-aura-purple transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link 
              to="/sitemap" 
              className="text-muted-foreground hover:text-aura-purple transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
