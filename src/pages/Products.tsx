
import Navbar from "../components/Navbar";
import ProductsComponent from "../components/Products";
import Footer from "../components/Footer";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-aura-black">
      <Navbar />
      <main className="pt-20">
        <ProductsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
