
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "neo-blur py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">AURAFLV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/reviews" className="nav-link">
            Reviews
          </Link>
          <Link to="/product/auraflv-3" className="nav-link">
            AuraFLV 3.0
          </Link>
          <Link to="/team" className="nav-link">
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
          <Link to="/cart" className="hover-scale text-white p-2 rounded-full hover:bg-aura-purple/10">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="neo-blur absolute top-full left-0 right-0 py-4 md:hidden animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link to="/" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/reviews" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </Link>
            <Link to="/product/auraflv-3" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>
              AuraFLV 3.0
            </Link>
            <Link to="/team" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>
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
            
            <Link to="/cart" className="flex items-center space-x-2 py-2" onClick={() => setIsMenuOpen(false)}>
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
