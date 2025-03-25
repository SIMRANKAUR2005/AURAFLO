import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-aura-darkBlack relative overflow-hidden pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aura-purple/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(126,105,171,0.05),transparent_40%)]"></div>
      
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
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
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
                <span className="text-muted-foreground">info@auraflo.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-aura-purple/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AuraFlo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-aura-purple transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-aura-purple transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-aura-purple transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
