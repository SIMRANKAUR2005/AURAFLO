
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-aura-black">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Reviews />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
