
import Navbar from "../components/Navbar";
import TeamComponent from "../components/Team";
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-aura-black">
      <Navbar />
      <main className="pt-20">
        <TeamComponent />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
