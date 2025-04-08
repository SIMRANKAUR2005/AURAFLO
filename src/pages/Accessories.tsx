import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { toast } from "@/components/ui/use-toast";

const Accessories = () => {
  const { addToCart } = useCart();
  
  const accessories = [
    {
      id: "case",
      name: "AuraFLO Carrying Case",
      description: "Premium carrying case designed specifically for your AuraFLO mat. Features padded protection and a convenient handle for easy transport.",
      price: 49.99,
      image: "/accessories/case.jpg"
    },
    {
      id: "cleaning-kit",
      name: "AuraFLO Cleaning Kit",
      description: "Complete cleaning kit with specialized solutions and microfiber cloths to keep your mat in pristine condition.",
      price: 29.99,
      image: "/accessories/cleaning-kit.jpg"
    },
    {
      id: "power-adapter",
      name: "AuraFLO Power Adapter",
      description: "Replacement power adapter with international plug compatibility. Includes multiple plug adapters for global use.",
      price: 39.99,
      image: "/accessories/power-adapter.jpg"
    },
    {
      id: "cover",
      name: "AuraFLO Protective Cover",
      description: "Water-resistant protective cover to keep your mat safe when not in use. Perfect for storage and travel.",
      price: 34.99,
      image: "/accessories/cover.jpg"
    }
  ];

  const handleAddToCart = (accessory: any) => {
    addToCart({
      id: accessory.id,
      name: accessory.name,
      price: accessory.price,
      quantity: 1,
      image: accessory.image
    });
    
    toast({
      title: "Added to cart!",
      description: `${accessory.name} has been added to your cart.`
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-aura-black">
      <Navbar />
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-center">Accessories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessories.map((accessory, index) => (
                <div key={index} className="glass rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-aura-purple/20 hover:translate-y-[-10px]">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={accessory.image} 
                      alt={accessory.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{accessory.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{accessory.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">${accessory.price}</span>
                      <button 
                        onClick={() => handleAddToCart(accessory)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-aura-purple hover:bg-aura-purple/80 transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Accessories; 