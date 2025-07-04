import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, CreditCard, Bitcoin } from "lucide-react";
import { FaPaypal } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
}

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
    toast.success("Item removed from cart");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col bg-aura-black">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any items to your cart yet
            </p>
            <Link
              to="/products"
              className="inline-block px-6 py-3 rounded-full bg-aura-purple hover:bg-aura-purple-light transition-colors duration-300"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="glass rounded-xl p-6 flex items-center gap-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group"
                >
                  <Link 
                    to={`/product/${item.id}`} 
                    className="w-24 h-24 rounded-lg overflow-hidden group-hover:ring-2 group-hover:ring-aura-purple transition-all duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                  
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} className="block">
                      <h3 className="text-lg font-semibold mb-2 hover:text-aura-purple transition-colors duration-300 group-hover:translate-x-1">
                        {item.name}
                      </h3>
                    </Link>
                    {item.color && (
                      <p className="text-sm text-muted-foreground mb-2 group-hover:translate-x-1 transition-transform duration-300">
                        Color: {item.color}
                      </p>
                    )}
                    <p className="text-muted-foreground mb-4 group-hover:translate-x-1 transition-transform duration-300">
                      ${item.price}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-black/20 rounded-full p-1 group-hover:bg-black/30 transition-colors duration-300">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-aura-purple/20 transition-colors duration-300"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-aura-purple/20 transition-colors duration-300"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 rounded-full hover:bg-red-500/20 transition-colors duration-300 hover:scale-110"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right group-hover:translate-x-1 transition-transform duration-300">
                    <p className="text-lg font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary and Payment */}
            <div className="space-y-6">
              {/* User Details */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Your Details</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-aura-purple focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-aura-purple focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={userDetails.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-aura-purple focus:outline-none"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={userDetails.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-aura-purple focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={userDetails.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-aura-purple focus:outline-none"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={userDetails.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-aura-purple focus:outline-none"
                    />
                  </div>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={userDetails.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-aura-purple focus:outline-none"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <button
                    onClick={() => setPaymentMethod("credit-card")}
                    className={`w-full p-4 rounded-lg flex items-center gap-4 transition-colors duration-300 ${
                      paymentMethod === "credit-card" ? "bg-aura-purple/20" : "hover:bg-aura-purple/10"
                    }`}
                  >
                    <CreditCard className="w-6 h-6" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("paypal")}
                    className={`w-full p-4 rounded-lg flex items-center gap-4 transition-colors duration-300 ${
                      paymentMethod === "paypal" ? "bg-aura-purple/20" : "hover:bg-aura-purple/10"
                    }`}
                  >
                    <FaPaypal className="w-6 h-6" />
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  className="w-full mt-6 px-6 py-3 rounded-full bg-aura-purple hover:bg-aura-purple-light transition-colors duration-300 font-semibold"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart; 