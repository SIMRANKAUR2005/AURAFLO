import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Products = () => {
  const [activeTab, setActiveTab] = useState("auraflo-1");
  
  const products = [
    {
      id: "auraflo-1",
      name: "AuraFlo 1.0",
      tagline: "Precision Sensing Technology",
      description: "The AuraFlo 1.0 uses advanced sensors to detect your position and provide real-time guidance, helping you achieve perfect alignment in every pose.",
      price: 199,
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      features: [
        "Pressure-sensitive positioning",
        "Real-time alignment feedback",
        "Haptic guidance system",
        "Durable, eco-friendly materials",
        "10+ hours battery life"
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    {
      id: "auraflo-2",
      name: "AuraFlo 2.0",
      tagline: "Visual Insight Technology",
      description: "Building on the 1.0, the AuraFlo 2.0 adds camera technology that analyzes your form based on your unique body measurements, providing personalized guidance.",
      price: 299,
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: [
        "All AuraFlo 1.0 features",
        "AI camera analysis system",
        "Body composition insights",
        "Personalized angle recommendations",
        "Progress tracking dashboard",
        "15+ hours battery life"
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1694&q=80",
        "https://images.unsplash.com/photo-1592106680408-e7e63efbc7ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
      ]
    },
    {
      id: "auraflo-3",
      name: "AuraFlo 3.0",
      tagline: "Intelligent Coaching System",
      description: "Our premium model, the AuraFlo 3.0 introduces conversational AI that provides verbal guidance, answers questions, and creates custom yoga routines based on your health needs.",
      price: 399,
      image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: [
        "All AuraFlo 2.0 features",
        "Advanced AI coaching system",
        "Voice interaction capability",
        "Health-based routine creation",
        "Meditation guidance & tracking",
        "Integration with health apps",
        "20+ hours battery life"
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1593164842264-854604db2260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
      ]
    }
  ];

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-1/3 h-1/2 bg-aura-purple/5 blur-3xl rounded-full transform translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-aura-green/5 blur-3xl rounded-full transform -translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AuraFlo <span className="text-gradient">Product Line</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect mat for your practice, from sensor-based alignment to AI-powered personalized coaching.
          </p>
        </div>
        
        <Tabs defaultValue="auraflo-1" value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
          <TabsList className="w-full flex justify-center bg-muted/30 p-1 glass">
            {products.map((product) => (
              <TabsTrigger 
                key={product.id} 
                value={product.id}
                className="flex-1 py-3 px-4 data-[state=active]:glass data-[state=active]:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <h3 className={`text-xl font-semibold ${activeTab === product.id ? "text-gradient" : ""}`}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.tagline}</p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Product Details */}
          {products.map((product) => (
            <TabsContent 
              key={product.id} 
              value={product.id} 
              className="mt-8"
              style={{ display: activeTab === product.id ? 'block' : 'none' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Product Visualization */}
                <div className="relative order-2 lg:order-1">
                  <div className="aspect-square rounded-2xl overflow-hidden glass p-4 group hover-scale">
                    <div className="h-full w-full rounded-xl overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-aura-black/80 via-aura-black/40 to-transparent flex items-end">
                        <div className="p-6">
                          <span className="text-2xl font-medium text-gradient">
                            {product.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gallery Images */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {product.galleryImages.map((img, index) => (
                      <div 
                        key={index} 
                        className="aspect-video rounded-lg overflow-hidden glass group hover-scale"
                      >
                        <img 
                          src={img} 
                          alt={`${product.name} - image ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-aura-purple/10 -z-10 blur-3xl"></div>
                </div>
                
                {/* Product Information */}
                <div className="order-1 lg:order-2">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                      <p className="text-xl text-aura-purple mb-6">{product.tagline}</p>
                      <p className="text-muted-foreground">{product.description}</p>
                    </div>
                    
                    <div>
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
                    
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-muted-foreground">Starting at</span>
                        <div className="text-3xl font-bold">${product.price}</div>
                      </div>
                      <Link 
                        to={`/product/${product.id}`}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-aura-purple hover:bg-aura-purple-light transition-all duration-500 group"
                      >
                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Products;
