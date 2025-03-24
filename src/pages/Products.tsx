
import Navbar from "../components/Navbar";
import ProductsComponent from "../components/Products";
import Footer from "../components/Footer";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-aura-black">
      <Navbar />
      <main className="pt-20 relative">
        {/* Dark green decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-aura-green/10 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-aura-green/15 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
        <ProductsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
