
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "neo-blur py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center hover-scale">
          <span className="text-2xl font-bold text-gradient">AURAFLV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'text-aura-purple after:w-full' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/reviews" 
            className={`nav-link ${isActive('/reviews') ? 'text-aura-purple after:w-full' : ''}`}
          >
            Reviews
          </Link>
          <Link 
            to="/product/auraflv-3" 
            className={`nav-link ${isActive('/product/auraflv-3') ? 'text-aura-purple after:w-full' : ''}`}
          >
            AuraFLV 3.0
          </Link>
          <Link 
            to="/team" 
            className={`nav-link ${isActive('/team') ? 'text-aura-purple after:w-full' : ''}`}
          >
            Our Team
          </Link>
        </nav>

        {/* Search and Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-1.5 pl-10 pr-4 rounded-full text-sm neo-blur w-36 focus:w-48 transition-all duration-300 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          </div>
          <Link to="/cart" className="relative hover-scale text-white p-2 rounded-full hover:bg-aura-purple/10 transition-all duration-300">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-aura-purple text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-aura-purple/10 rounded-full transition-colors duration-300" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="animate-fade-in" /> : <Menu className="animate-fade-in" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="neo-blur absolute top-full left-0 right-0 py-4 md:hidden animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`nav-link block py-2 ${isActive('/') ? 'text-aura-purple' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/reviews" 
              className={`nav-link block py-2 ${isActive('/reviews') ? 'text-aura-purple' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              to="/product/auraflv-3" 
              className={`nav-link block py-2 ${isActive('/product/auraflv-3') ? 'text-aura-purple' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              AuraFLV 3.0
            </Link>
            <Link 
              to="/team" 
              className={`nav-link block py-2 ${isActive('/team') ? 'text-aura-purple' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 rounded-full neo-blur focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
            
            <Link to="/cart" className="flex items-center space-x-2 py-2 hover:text-aura-purple transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
