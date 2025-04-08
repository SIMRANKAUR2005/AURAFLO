import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-aura-darkBlack relative overflow-hidden pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aura-purple/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(126,105,171,0.05),transparent_40%)]"></div>
      
      {/* Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-96 h-96">
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aura-purple/20 to-aura-green/20 p-2 ring-2 ring-aura-purple/30">
                <img src={logo} alt="AuraFlo Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-gradient">AURAFLO</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Transforming yoga practice through innovative technology and mindful design. Experience the future of wellness.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/aurafloo.ai?igsh=MXU5emE4dG1xc2Fhdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/auraflo/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:info@auraflo.com" 
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
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
          <div className="glass p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-aura-purple shrink-0 mr-3 mt-0.5" />
                <span className="text-muted-foreground">
                  Thapar University <br />Patiala, 147001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-aura-purple shrink-0 mr-3" />
                <span className="text-muted-foreground">+91 **********</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-aura-purple shrink-0 mr-3" />
                <a href="mailto:info@auraflo.com" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                  info@auraflo.com
                </a>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aura-purple/20 hover:bg-aura-purple/30 transition-colors duration-300 text-sm"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-aura-purple/10">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AuraFlo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
