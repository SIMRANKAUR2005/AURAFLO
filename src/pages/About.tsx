import { Link } from "react-router-dom";
import { Sparkles, Leaf, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of yoga technology to create transformative experiences",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Sustainability",
      description: "Committed to eco-friendly materials and responsible manufacturing",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: "Wellness",
      description: "Dedicated to enhancing physical and mental well-being through mindful design",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Community",
      description: "Building a global community of yoga enthusiasts and wellness advocates",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-aura-darkBlack text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">About AuraFlo</h1>
          <p className="text-xl text-muted-foreground">
            Transforming yoga practice through innovative technology and mindful design. Experience the future of wellness.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Mission</h2>
          <div className="glass p-8 rounded-xl max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg text-center">
              At AuraFlo, we believe that technology should serve to enhance, not replace, the traditional practice of yoga. Our mission is to create innovative products that help practitioners deepen their connection with their practice while maintaining the essence of yoga's ancient wisdom.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-aura-purple mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{value.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/team"
            className="inline-block px-8 py-4 bg-aura-purple/20 text-aura-purple rounded-lg hover:bg-aura-purple/30 transition-colors text-lg font-medium"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About; 