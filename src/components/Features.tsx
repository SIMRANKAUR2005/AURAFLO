import React from "react";
import { 
  Activity, 
  Compass, 
  MessageSquare, 
  Monitor, 
  Smartphone, 
  Zap,
  BarChart,
  Heart,
  Clock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Compass />,
      title: "Precision Alignment",
      description: "Advanced sensors detect your position and provide real-time feedback to perfect your alignment."
    },
    {
      icon: <Smartphone />,
      title: "Mobile Integration",
      description: "Seamlessly connect with our companion app to track progress and access guided sessions."
    },
    {
      icon: <MessageSquare />,
      title: "AI Conversation",
      description: "Engage with our AI assistant to discuss health concerns and receive personalized yoga recommendations."
    },
    {
      icon: <Monitor />,
      title: "Visual Analysis",
      description: "Camera technology provides visual feedback on your form, accounting for your unique body measurements."
    },
    {
      icon: <Activity />,
      title: "Health Monitoring",
      description: "Track vital metrics during your practice, including heart rate, breathing patterns, and energy expenditure."
    },
    {
      icon: <Zap />,
      title: "Responsive Feedback",
      description: "Receive immediate haptic and visual cues to guide your movements for optimal positioning."
    },
    {
      icon: <BarChart />,
      title: "Progress Tracking",
      description: "Visualize your improvement over time with detailed analytics and performance insights."
    },
    {
      icon: <Heart />,
      title: "Wellness Integration",
      description: "Connects with your existing health apps to provide a holistic view of your wellness journey."
    },
    {
      icon: <Clock />,
      title: "Extended Battery",
      description: "Long-lasting battery ensures your mat is ready whenever you are, with up to 20 hours of continuous use."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-aura-darkBlack">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(126,105,171,0.1),transparent_70%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(62,146,120,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="text-gradient">Technology</span> Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our smart yoga mats combine cutting-edge technology with thoughtful design to deliver an unparalleled yoga experience.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass rounded-xl p-6 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 text-aura-purple">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
