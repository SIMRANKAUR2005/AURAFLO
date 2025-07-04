import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { searchIndex } from "../data/searchIndex";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<typeof searchIndex>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update wishlist count when component mounts and when location changes
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistCount(wishlist.length);
  }, [location]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSuggestions([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = searchIndex.filter(item => {
      const searchableText = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase();
      return searchableText.includes(query);
    });
    setFilteredSuggestions(filtered);
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (item: typeof searchIndex[0]) => {
    setSearchQuery(item.title);
    setShowSuggestions(false);
    navigate(item.path);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page or handle search
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-aura-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aura-purple/20 to-aura-green/20 p-2 ring-2 ring-aura-purple/30">
            <img 
              src="/images/logo.png" 
              alt="AuraFlo Logo" 
              className="w-full h-full object-contain brightness-125 contrast-125"
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
          <Link
            to="/career"
            className={`nav-link ${isActive('/career') ? 'text-aura-purple after:w-full' : ''}`}
          >
            Career
          </Link>
        </nav>

        {/* Search, Wishlist and Cart */}
        <div className="flex items-center space-x-2">
          {/* Desktop Search */}
          <form onSubmit={handleSearchSubmit} className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search products, features, reviews..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              className="w-64 py-2 pl-10 pr-4 rounded-full neo-blur focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            
            {/* Desktop Search Suggestions */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-aura-black/90 backdrop-blur-md rounded-lg shadow-lg py-2 z-50">
                {filteredSuggestions.map((item, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-aura-purple/20 transition-colors duration-200"
                    onClick={() => handleSuggestionClick(item)}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </form>
          
          <Link 
            to="/wishlist" 
            className="relative hover-scale text-white p-2 rounded-full hover:bg-aura-purple/10 transition-all duration-300"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-aura-purple text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative hover-scale text-white p-2 rounded-full hover:bg-aura-purple/10 transition-all duration-300">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-aura-purple text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-aura-black/90 backdrop-blur-md p-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`py-2 ${isActive('/') ? 'text-aura-purple' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`py-2 ${isActive('/products') ? 'text-aura-purple' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Products
            </Link>
            <Link 
              to="/reviews" 
              className={`py-2 ${isActive('/reviews') ? 'text-aura-purple' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              to="/product/auraflo-3" 
              className={`py-2 ${isActive('/product/auraflo-3') ? 'text-aura-purple' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              AuraFlo 3.0
            </Link>
            <Link 
              to="/team" 
              className={`py-2 ${isActive('/team') ? 'text-aura-purple' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products, features, reviews..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                className="w-full py-2 pl-10 pr-4 rounded-full neo-blur focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              
              {/* Mobile Search Suggestions */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-aura-black/90 backdrop-blur-md rounded-lg shadow-lg py-2 z-50">
                  {filteredSuggestions.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 hover:bg-aura-purple/20 transition-colors duration-200"
                      onClick={() => {
                        handleSuggestionClick(item);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </form>
            
            <Link 
              to="/wishlist" 
              className="flex items-center space-x-2 py-2 hover:text-aura-purple transition-colors duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="w-5 h-5" />
              <span>Wishlist</span>
              {wishlistCount > 0 && (
                <span className="ml-auto bg-aura-purple text-xs px-2 py-1 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
            
            <Link to="/cart" className="flex items-center space-x-2 py-2 hover:text-aura-purple transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="ml-auto bg-aura-purple text-xs px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
