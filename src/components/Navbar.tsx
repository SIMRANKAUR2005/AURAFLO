import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Search data
  const searchableItems = [
    { title: "AuraFlo 1.0", type: "product", link: "/product/auraflo-1", description: "Precision Sensing Technology" },
    { title: "AuraFlo 2.0", type: "product", link: "/product/auraflo-2", description: "Visual Insight Technology" },
    { title: "AuraFlo 3.0", type: "product", link: "/product/auraflo-3", description: "Intelligent Coaching System" },
    { title: "Our Products", type: "page", link: "/products", description: "View all our products" },
    { title: "Reviews", type: "page", link: "/reviews", description: "Customer reviews and testimonials" },
    { title: "Our Team", type: "page", link: "/team", description: "Meet our team" },
    { title: "Contact Us", type: "page", link: "/contact-us", description: "Get in touch with us" }
  ];

  // Filter suggestions based on search query
  const suggestions = searchQuery
    ? searchableItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or first suggestion
      if (suggestions.length > 0) {
        navigate(suggestions[0].link);
        setSearchQuery("");
        setShowSuggestions(false);
      }
    }
  };

  const handleSuggestionClick = (link: string) => {
    navigate(link);
    setSearchQuery("");
    setShowSuggestions(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-aura-black/80 backdrop-blur-lg' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aura-purple/20 to-aura-green/20 p-1.5 ring-2 ring-aura-purple/30 hover:ring-aura-purple/60 hover:from-aura-purple/30 hover:to-aura-green/30 transition-all duration-300">
            <img 
              src="/images/logo.png"
              alt="AuraFlo Logo" 
              className="w-full h-full object-contain brightness-150"
              onError={(e) => {
                console.error('Failed to load logo');
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          <span className="text-2xl font-bold text-gradient">AURAFLO</span>
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
            to="/products" 
            className={`nav-link ${isActive('/products') ? 'text-aura-purple after:w-full' : ''}`}
          >
            Our Products
          </Link>
          <Link 
            to="/reviews" 
            className={`nav-link ${isActive('/reviews') ? 'text-aura-purple after:w-full' : ''}`}
          >
            Reviews
          </Link>
          <Link 
            to="/product/auraflo-3" 
            className={`nav-link ${isActive('/product/auraflo-3') ? 'text-aura-purple after:w-full' : ''}`}
          >
            AuraFlo 3.0
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
          <div className="relative search-container">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="py-1.5 pl-10 pr-4 rounded-full text-sm neo-blur w-36 focus:w-48 transition-all duration-300 focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </form>

            {/* Search Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute mt-2 w-64 max-h-96 overflow-y-auto rounded-lg neo-blur backdrop-blur-lg border border-aura-purple/20">
                <div className="p-2">
                  {suggestions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(item.link)}
                      className="w-full text-left px-4 py-2 rounded hover:bg-aura-purple/20 transition-colors duration-300"
                    >
                      <div className="flex items-start">
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
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
              to="/products" 
              className={`nav-link block py-2 ${isActive('/products') ? 'text-aura-purple' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Our Products
            </Link>
            <Link 
              to="/reviews" 
              className={`nav-link block py-2 ${isActive('/reviews') ? 'text-aura-purple' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              to="/product/auraflo-3" 
              className={`nav-link block py-2 ${isActive('/product/auraflo-3') ? 'text-aura-purple' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              AuraFlo 3.0
            </Link>
            <Link 
              to="/team" 
              className={`nav-link block py-2 ${isActive('/team') ? 'text-aura-purple' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link block py-2 ${isActive('/contact') ? 'text-aura-purple' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Link>
            
            <div className="relative mt-2">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full py-2 pl-10 pr-4 rounded-full neo-blur focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              </form>

              {/* Mobile Search Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute mt-2 w-full max-h-96 overflow-y-auto rounded-lg neo-blur backdrop-blur-lg border border-aura-purple/20">
                  <div className="p-2">
                    {suggestions.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          handleSuggestionClick(item.link);
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 rounded hover:bg-aura-purple/20 transition-colors duration-300"
                      >
                        <div className="flex items-start">
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/cart" className="flex items-center space-x-2 py-2 hover:text-aura-purple transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
