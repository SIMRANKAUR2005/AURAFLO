
import Navbar from "../components/Navbar";
import ReviewsComponent from "../components/Reviews";
import Footer from "../components/Footer";

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-aura-black">
      <Navbar />
      <main className="pt-20">
        <ReviewsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
