
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const Products = () => {
  const [activeTab, setActiveTab] = useState("auraflv-1");
  
  const products = [
    {
      id: "auraflv-1",
      name: "AuraFLV 1.0",
      tagline: "Precision Sensing Technology",
      description: "The AuraFLV 1.0 uses advanced sensors to detect your position and provide real-time guidance, helping you achieve perfect alignment in every pose.",
      price: 199,
      features: [
        "Pressure-sensitive positioning",
        "Real-time alignment feedback",
        "Haptic guidance system",
        "Durable, eco-friendly materials",
        "10+ hours battery life"
      ]
    },
    {
      id: "auraflv-2",
      name: "AuraFLV 2.0",
      tagline: "Visual Insight Technology",
      description: "Building on the 1.0, the AuraFLV 2.0 adds camera technology that analyzes your form based on your unique body measurements, providing personalized guidance.",
      price: 299,
      features: [
        "All AuraFLV 1.0 features",
        "AI camera analysis system",
        "Body composition insights",
        "Personalized angle recommendations",
        "Progress tracking dashboard",
        "15+ hours battery life"
      ]
    },
    {
      id: "auraflv-3",
      name: "AuraFLV 3.0",
      tagline: "Intelligent Coaching System",
      description: "Our premium model, the AuraFLV 3.0 introduces conversational AI that provides verbal guidance, answers questions, and creates custom yoga routines based on your health needs.",
      price: 399,
      features: [
        "All AuraFLV 2.0 features",
        "Advanced AI coaching system",
        "Voice interaction capability",
        "Health-based routine creation",
        "Meditation guidance & tracking",
        "Integration with health apps",
        "20+ hours battery life"
      ]
    }
  ];

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-1/3 h-1/2 bg-aura-purple/5 blur-3xl rounded-full transform translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-aura-green/5 blur-3xl rounded-full transform -translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AuraFLV <span className="text-gradient">Product Line</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect mat for your practice, from sensor-based alignment to AI-powered personalized coaching.
          </p>
        </div>
        
        {/* Product Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {products.map((product) => (
            <button
              key={product.id}
              className={`py-3 px-4 rounded-xl transition-all duration-300 text-center ${
                activeTab === product.id 
                  ? "glass shadow-lg" 
                  : "hover:glass"
              }`}
              onClick={() => setActiveTab(product.id)}
            >
              <h3 className={`text-xl font-semibold ${activeTab === product.id ? "text-gradient" : ""}`}>
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">{product.tagline}</p>
            </button>
          ))}
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Visualization */}
          <div className="relative animate-fade-in-left order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden glass p-6 animate-float">
              <div className="h-full w-full bg-gradient-to-br from-aura-purple/20 to-aura-green/20 rounded-xl flex items-center justify-center">
                <div className="w-4/5 aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-aura-purple/30 via-aura-purple/10 to-aura-green/20 rounded-lg">
                    {/* This is where an actual product image would go */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-medium text-gradient">
                        {products.find(p => p.id === activeTab)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-aura-purple/10 -z-10 blur-3xl"></div>
          </div>
          
          {/* Product Information */}
          <div className="animate-fade-in-right order-1 lg:order-2">
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`transition-all duration-300 ${activeTab === product.id ? "opacity-100" : "hidden opacity-0"}`}
              >
                <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                <p className="text-xl text-aura-purple mb-6">{product.tagline}</p>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-aura-purple shrink-0 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <span className="text-muted-foreground">Starting at</span>
                    <div className="text-3xl font-bold">${product.price}</div>
                  </div>
                  <Link 
                    to={`/product/${product.id}`} 
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-aura-purple hover:bg-aura-purple-light transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
