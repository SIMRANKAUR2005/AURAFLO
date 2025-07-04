import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

interface Accessory {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const accessories: Accessory[] = [
  {
    id: "acc1",
    name: "Magic Mat Carrying Case",
    description: "Premium carrying case for your Magic Mat",
    price: 29.99,
    image: "/images/accessories/case.jpg",
  },
  {
    id: "acc2",
    name: "Cleaning Kit",
    description: "Specialized cleaning kit for Magic Mat maintenance",
    price: 19.99,
    image: "/images/accessories/cleaning.jpg",
  },
  {
    id: "acc3",
    name: "Replacement Pads",
    description: "Set of replacement pads for Magic Mat",
    price: 24.99,
    image: "/images/accessories/pads.jpg",
  },
];

const Accessories = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (accessory: Accessory) => {
    addToCart({
      id: accessory.id,
      name: accessory.name,
      price: accessory.price,
      description: accessory.description,
      image: accessory.image,
      quantity: 1
    });
  };

  return (
    <div className="min-h-screen bg-aura-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Accessories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{accessory.name}</h2>
                <p className="text-muted-foreground mb-4">{accessory.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">${accessory.price}</span>
                  <button
                    onClick={() => handleAddToCart(accessory)}
                    className="px-4 py-2 rounded-full bg-aura-purple hover:bg-aura-purple-light transition-colors duration-300"
                  >
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