import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-aura-black">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-aura-green/5 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-aura-purple/5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-gradient">AuraFLO</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Revolutionizing the way we interact with our living spaces through intelligent technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  At AuraFLO, we're dedicated to creating innovative, AI-powered mats that transform ordinary surfaces into intelligent, responsive environments. Our mission is to enhance everyday living through cutting-edge technology that's both accessible and intuitive.
                </p>
              </div>
              
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  We envision a future where technology seamlessly integrates with our physical spaces, making them more responsive, efficient, and enjoyable. Through our AI mats, we're building the foundation for smarter, more connected living environments.
                </p>
              </div>
            </div>

            <div className="glass rounded-xl p-8 mb-20">
              <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded by a team of passionate innovators, AuraFLO began with a simple question: How can we make our living spaces more intelligent and responsive? This question led to the development of our revolutionary AI mats, which combine cutting-edge technology with practical, everyday applications.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to push the boundaries of what's possible, constantly innovating and improving our products to better serve our customers and create more intelligent living spaces.
              </p>
            </div>

            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-aura-purple/10">
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">Constantly pushing boundaries to create groundbreaking solutions</p>
                </div>
                <div className="p-4 rounded-lg bg-aura-green/10">
                  <h3 className="text-xl font-semibold mb-2">Quality</h3>
                  <p className="text-muted-foreground">Committed to excellence in every product we create</p>
                </div>
                <div className="p-4 rounded-lg bg-aura-purple/10">
                  <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                  <p className="text-muted-foreground">Making advanced technology available to everyone</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 