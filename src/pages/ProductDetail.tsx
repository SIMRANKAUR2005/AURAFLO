import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, Share2, ChevronRight, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  discount: number;
  description: string;
  longDescription: string;
  colors: string[];
  features: string[];
  specs: {
    dimensions: string;
    thickness: string;
    weight: string;
    battery: string;
    connectivity: string;
    materials: string;
    warranty: string;
  };
  images: string[];
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Check wishlist status on mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsWishlisted(wishlist.some((item: any) => item.id === id));
  }, [id]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Product data (in a real app, this would come from an API)
  const products = {
    "auraflo-1": {
      name: "AuraFlo 1.0",
      tagline: "Precision Sensing Technology",
      price: 199,
      discount: 0,
      description: "The AuraFlo 1.0 uses advanced sensors to detect your position and provide real-time guidance, helping you achieve perfect alignment in every pose.",
      longDescription: "The revolutionary AuraFlo 1.0 transforms your yoga practice through state-of-the-art pressure-sensitive technology. Embedded with over 1,000 precision sensors, the mat detects your positioning and weight distribution, providing instant feedback to help you achieve perfect alignment in every pose. The mat communicates through subtle haptic vibrations and LED indicators, guiding you toward proper form without disrupting your flow. Made from premium eco-friendly materials, the AuraFlo 1.0 offers superior comfort and durability while maintaining a commitment to sustainability. The mat connects seamlessly to our companion app (available for iOS and Android), allowing you to track your practice, set goals, and review your progress over time.",
      colors: ["Midnight Black", "Deep Purple", "Forest Green"],
      features: [
        "Pressure-sensitive positioning",
        "Real-time alignment feedback",
        "Haptic guidance system",
        "Durable, eco-friendly materials",
        "10+ hours battery life",
        "Companion app integration",
        "USB-C quick charging"
      ],
      specs: {
        dimensions: "72\" x 26\" (183cm x 66cm)",
        thickness: "5mm",
        weight: "4.2 lbs (1.9kg)",
        battery: "Rechargeable Li-ion, 10+ hours",
        connectivity: "Bluetooth 5.0",
        materials: "Eco-friendly TPE, natural rubber base",
        warranty: "1 year limited warranty"
      },
      images: [
        "https://placehold.co/600x400/3E9278/FFFFFF?text=AuraFlo+1.0",
        "https://placehold.co/600x400/7E69AB/FFFFFF?text=Sensors+View",
        "https://placehold.co/600x400/2A7252/FFFFFF?text=App+Interface"
      ]
    },
    "auraflo-2": {
      name: "AuraFlo 2.0",
      tagline: "Visual Insight Technology",
      price: 299,
      discount: 0,
      description: "Building on the 1.0, the AuraFlo 2.0 adds camera technology that analyzes your form based on your unique body measurements, providing personalized guidance.",
      longDescription: "The AuraFlo 2.0 takes your practice to the next level with integrated camera technology that works alongside our pressure-sensitive mat to provide comprehensive form analysis. The discreet camera module can be placed on any standard device stand and uses advanced computer vision to analyze your posture, tracking 32 key body points to ensure proper alignment based on your unique body type. Before your first session, the system collects your height, weight, and age to provide guidance tailored specifically to your body's needs and capabilities. The companion app offers an expanded experience with 3D visualizations of your poses, highlighting areas for improvement and tracking your progress with detailed metrics and insights. The improved battery life ensures you can practice for longer between charges, and the enhanced mat sensors provide even more accurate feedback than the original model.",
      colors: ["Midnight Black", "Deep Purple", "Forest Green", "Ocean Blue"],
      features: [
        "All AuraFlo 1.0 features",
        "AI camera analysis system",
        "Body composition insights",
        "Personalized angle recommendations",
        "Progress tracking dashboard",
        "15+ hours battery life",
        "Enhanced sensor resolution"
      ],
      specs: {
        dimensions: "72\" x 26\" (183cm x 66cm)",
        thickness: "5mm",
        weight: "4.5 lbs (2.0kg)",
        battery: "Rechargeable Li-ion, 15+ hours",
        connectivity: "Bluetooth 5.0, Wi-Fi",
        camera: "1080p HD, 120° wide-angle lens",
        materials: "Eco-friendly TPE, natural rubber base",
        warranty: "2 year limited warranty"
      },
      images: [
        "https://placehold.co/600x400/6E59A5/FFFFFF?text=AuraFlo+2.0",
        "https://placehold.co/600x400/3E9278/FFFFFF?text=Camera+Module",
        "https://placehold.co/600x400/080808/FFFFFF?text=Analysis+View"
      ]
    },
    "auraflo-3": {
      name: "AuraFlo 3.0",
      tagline: "Intelligent Coaching System",
      price: 399,
      discount: 50,
      description: "Our premium model, the AuraFlo 3.0 introduces conversational AI that provides verbal guidance, answers questions, and creates custom yoga routines based on your health needs.",
      longDescription: "The AuraFlo 3.0 represents the pinnacle of smart yoga technology, combining all the features of previous models with our groundbreaking AI coaching system. The integrated voice assistant can hear your questions and provide real-time verbal guidance during your practice, offering adjustment suggestions, answering technique questions, and providing encouragement when you need it most. The system learns your preferences, strengths, and areas for improvement over time, creating a truly personalized yoga experience that evolves with you. Share your health goals and concerns with the AI, and it will design custom routines to address specific issues like back pain, stress, flexibility, or strength building. The premium materials offer enhanced comfort for longer sessions, while the extended battery life ensures your mat is always ready when you are. The AuraFlo 3.0 also features expanded integration capabilities, connecting with popular health and fitness apps to provide a comprehensive view of your wellness journey.",
      colors: ["Midnight Black", "Deep Purple", "Forest Green", "Ocean Blue", "Sunset Orange"],
      features: [
        "All AuraFlo 2.0 features",
        "Advanced AI coaching system",
        "Voice interaction capability",
        "Health-based routine creation",
        "Meditation guidance & tracking",
        "Integration with health apps",
        "20+ hours battery life",
        "Premium comfort materials"
      ],
      specs: {
        dimensions: "72\" x 26\" (183cm x 66cm)",
        thickness: "6mm",
        weight: "4.8 lbs (2.2kg)",
        battery: "Rechargeable Li-ion, 20+ hours",
        connectivity: "Bluetooth 5.0, Wi-Fi, Voice",
        camera: "1080p HD, 120° wide-angle lens",
        audio: "Dual microphones with noise cancellation",
        materials: "Premium eco-friendly TPE, enhanced rubber base",
        warranty: "3 year limited warranty"
      },
      images: [
        "https://placehold.co/600x400/7E69AB/FFFFFF?text=AuraFlo+3.0",
        "https://placehold.co/600x400/2A7252/FFFFFF?text=AI+Assistant",
        "https://placehold.co/600x400/6E59A5/FFFFFF?text=Voice+Interaction"
      ]
    }
  };
  
  // Check if product exists
  const product = products[id as keyof typeof products];
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="px-6 py-3 rounded-full bg-aura-purple hover:bg-aura-purple-light transition-colors duration-300">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Set initial selected color
  useEffect(() => {
    if (product && !selectedColor) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  // Calculate the price if there's a discount
  const finalPrice = product.discount > 0 
    ? product.price - product.discount 
    : product.price;

  // Handle color selection
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  // Handle wishlist toggle
  const handleWishlistToggle = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    if (isWishlisted) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter((item: any) => item.id !== id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    } else {
      // Add to wishlist
      const wishlistItem = {
        id,
        name: product.name,
        price: finalPrice,
        description: product.description,
        image: product.images[0],
        color: selectedColor
      };
      localStorage.setItem('wishlist', JSON.stringify([...wishlist, wishlistItem]));
    }
    
    setIsWishlisted(!isWishlisted);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (product && id) {
      addToCart({
        id: id,
        name: product.name,
        price: finalPrice,
        description: product.description,
        image: product.images[0],
        color: selectedColor,
        quantity: quantity
      });
      toast.success(`${product.name} added to cart`);
    }
  };

  // Handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
        setShowShareModal(true);
      }
    } else {
      setShowShareModal(true);
    }
  };

  // Get color style
  const getColorStyle = (color: string) => {
    switch (color) {
      case "Midnight Black":
        return "bg-aura-black border border-white/20";
      case "Deep Purple":
        return "bg-aura-purple";
      case "Forest Green":
        return "bg-aura-green";
      case "Ocean Blue":
        return "bg-blue-600";
      case "Sunset Orange":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-aura-black">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-28 pb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link to="/" className="hover:text-aura-purple transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link to="/products" className="hover:text-aura-purple transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-aura-purple">{product.name}</span>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square glass rounded-xl overflow-hidden">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                    activeImage === index 
                      ? "border-aura-purple" 
                      : "border-transparent hover:border-aura-purple/50"
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full glass text-sm font-medium text-aura-purple mb-4">
              {product.tagline}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-bold">${finalPrice}</span>
              {product.discount > 0 && (
                <span className="text-xl text-muted-foreground line-through">${product.price}</span>
              )}
              {product.discount > 0 && (
                <span className="px-2 py-1 bg-aura-green text-white text-sm rounded-md">
                  Save ${product.discount}
                </span>
              )}
            </div>
            
            <p className="text-muted-foreground mb-8">
              {product.description}
            </p>
            
            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="font-medium mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorSelect(color)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedColor === color 
                        ? "ring-2 ring-aura-purple ring-offset-2 ring-offset-aura-black" 
                        : "border border-aura-purple/30"
                    }`}
                    title={color}
                  >
                    <span className={`w-6 h-6 rounded-full ${getColorStyle(color)}`}>
                      {selectedColor === color && (
                        <Check className="w-4 h-4 text-white mx-auto my-auto" />
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Selected: {selectedColor}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button 
                onClick={handleAddToCart}
                className="flex-1 min-w-[150px] px-6 py-3 rounded-full bg-aura-purple hover:bg-aura-purple-light transition-colors duration-300 font-medium flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button 
                onClick={handleWishlistToggle}
                className={`p-3 rounded-full glass transition-colors duration-300 ${
                  isWishlisted 
                    ? "bg-aura-purple text-white" 
                    : "hover:bg-aura-purple/20"
                }`}
                title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
              </button>
              <button 
                onClick={handleShare}
                className="p-3 rounded-full glass hover:bg-aura-purple/20 transition-colors duration-300"
                title="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            
            {/* Key Features */}
            <div className="mb-10">
              <h3 className="font-medium mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-aura-green shrink-0 mr-3 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Specifications */}
            <div>
              <h3 className="font-medium mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key}>
                    <span className="block text-sm text-muted-foreground capitalize">{key}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Long Description */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <div className="glass p-8 rounded-xl">
            <p className="text-muted-foreground leading-relaxed">
              {product.longDescription}
            </p>
          </div>
        </div>
      </div>
      
      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-aura-darkBlack rounded-xl p-8 max-w-md w-full mx-4 glass">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Share {product.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-muted-foreground hover:text-white hover:scale-110 transition-all duration-300"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(product.description)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
                  setShowShareModal(false);
                }}
                className="p-4 glass rounded-lg hover:bg-aura-purple/20 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Twitter
              </button>
              <button
                onClick={() => {
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
                  setShowShareModal(false);
                }}
                className="p-4 glass rounded-lg hover:bg-aura-purple/20 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Facebook
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setShowShareModal(false);
                }}
                className="p-4 glass rounded-lg hover:bg-aura-purple/20 transition-colors duration-300 flex items-center justify-center gap-2 col-span-2"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
