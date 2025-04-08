import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
}

const ProductCard = ({ id, name, price, image, color }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      color,
      image
    });
  };

  return (
    <Link to={`/product/${id}`}>
      <div
        className="group relative overflow-hidden rounded-xl bg-aura-black/50 p-4 transition-all duration-300 hover:bg-aura-black/70"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 rounded-full bg-aura-purple p-2 text-white opacity-0 transition-all duration-300 hover:bg-aura-purple/80 group-hover:opacity-100"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <p className="mt-1 text-aura-purple">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 