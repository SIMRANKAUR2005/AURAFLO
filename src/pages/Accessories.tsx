import { Link } from "react-router-dom";

const Accessories = () => {
  const accessories = [
    {
      id: 1,
      name: "Premium Yoga Mat Bag",
      description: "Eco-friendly, water-resistant bag with multiple compartments",
      price: "$49.99",
      image: "/images/accessories/mat-bag.jpg"
    },
    {
      id: 2,
      name: "AuraFlo Mat Cleaner",
      description: "Natural, non-toxic cleaning solution for your mat",
      price: "$19.99",
      image: "/images/accessories/cleaner.jpg"
    },
    {
      id: 3,
      name: "Smart Yoga Block",
      description: "Connected yoga block with posture feedback",
      price: "$79.99",
      image: "/images/accessories/block.jpg"
    },
    {
      id: 4,
      name: "AuraFlo Strap",
      description: "Adjustable, durable yoga strap with smart tension monitoring",
      price: "$39.99",
      image: "/images/accessories/strap.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-aura-darkBlack text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gradient">Accessories</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Enhance your yoga practice with our premium accessories. Each product is designed to complement your AuraFlo mat and elevate your experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              <div className="relative overflow-hidden rounded-lg glass p-4 transition-all duration-300 hover:scale-105">
                <div className="aspect-square mb-4">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{accessory.name}</h3>
                <p className="text-muted-foreground mb-4">{accessory.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-aura-purple font-bold">{accessory.price}</span>
                  <button className="px-4 py-2 bg-aura-purple/20 text-aura-purple rounded-lg hover:bg-aura-purple/30 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories; 