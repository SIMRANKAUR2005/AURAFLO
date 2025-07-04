import { Link } from "react-router-dom";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  color?: string;
}

// Product images mapping
const productImages = {
  "auraflo-1": [
    "https://placehold.co/600x400/3E9278/FFFFFF?text=AuraFlo+1.0",
    "https://placehold.co/600x400/7E69AB/FFFFFF?text=Sensors+View",
    "https://placehold.co/600x400/2A7252/FFFFFF?text=App+Interface"
  ],
  "auraflo-2": [
    "https://placehold.co/600x400/6E59A5/FFFFFF?text=AuraFlo+2.0",
    "https://placehold.co/600x400/3E9278/FFFFFF?text=Camera+Module",
    "https://placehold.co/600x400/080808/FFFFFF?text=Analysis+View"
  ],
  "auraflo-3": [
    "https://placehold.co/600x400/7E69AB/FFFFFF?text=AuraFlo+3.0",
    "https://placehold.co/600x400/2A7252/FFFFFF?text=AI+Assistant",
    "https://placehold.co/600x400/6E59A5/FFFFFF?text=Voice+Interaction"
  ]
};

const Wishlist = () => {
  const { addToCart } = useCart();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const removeFromWishlist = (id: string) => {
    setWishlistItems((prev) => {
      const newItems = prev.filter((item) => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(newItems));
      return newItems;
    });
    toast.success("Item removed from wishlist");
  };

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      color: item.color,
      quantity: 1
    });
    removeFromWishlist(item.id);
    toast.success(`${item.name} added to cart and removed from wishlist`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-aura-black">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <span className="text-muted-foreground">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Browse our products and add your favorites to the wishlist
            </p>
            <Link
              to="/products"
              className="inline-block px-6 py-3 rounded-full bg-aura-purple hover:bg-aura-purple-light transition-colors duration-300"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300 group">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={productImages[item.id as keyof typeof productImages]?.[0] || item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                
                <Link to={`/product/${item.id}`} className="block group-hover:transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2 hover:text-aura-purple transition-colors duration-300">
                    {item.name}
                  </h3>
                </Link>
                
                {item.color && (
                  <p className="text-sm text-muted-foreground mb-2">
                    Color: {item.color}
                  </p>
                )}
                
                <p className="text-muted-foreground mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${item.price}</span>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="p-2 rounded-full glass hover:bg-aura-purple/20 transition-colors duration-300"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist; 