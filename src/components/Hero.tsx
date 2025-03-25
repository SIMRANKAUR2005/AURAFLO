import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-aura-purple/5 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-aura-green/5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      
      {/* Large Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-br from-aura-purple/5 to-aura-green/5 rounded-full blur-3xl animate-glow"></div>
          <img 
            src="/images/logo.png"
            alt="" 
            className="w-full h-full object-contain opacity-10 animate-float brightness-200 contrast-125"
            onError={(e) => {
              console.error('Failed to load background logo');
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-left">
            <div className="inline-block px-3 py-1 mb-6 rounded-full glass text-sm font-semibold text-aura-purple">
              Revolutionary Yoga Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Redefine Your <span className="text-gradient">Yoga Practice</span> With AI-Powered Mats
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Experience the perfect blend of technology and wellness with AuraFlo smart yoga mats, designed to transform your practice with real-time feedback and personalized guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/product/auraflo-3" className="px-6 py-3 rounded-full bg-aura-purple hover:bg-aura-purple-light transition-colors duration-300 font-medium hover:shadow-lg hover:shadow-aura-purple/30 transition-all">
                Explore AuraFlo 3.0
              </Link>
              <Link to="/products" className="px-6 py-3 rounded-full glass hover-scale flex items-center gap-2 group">
                View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          
          {/* Image/Product Visual */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10 animate-float">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden glass p-4">
                <div className="h-full w-full bg-gradient-to-br from-aura-purple/20 to-aura-green/20 rounded-xl flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Person doing yoga on AuraFlo mat" 
                      className="w-full h-full object-cover rounded-lg opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-aura-black/80 to-transparent flex flex-col items-center justify-end p-6">
                      <span className="text-2xl font-medium text-gradient mb-2">AURAFLO 3.0</span>
                      <p className="text-sm text-center text-white/80">Advanced AI-Powered Yoga Guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-aura-purple/5 -z-10 blur-2xl"></div>
            <div className="absolute bottom-4 left-8 w-20 h-20 rounded-full bg-aura-green/30 -z-10 blur-xl animate-pulse"></div>
            <div className="absolute top-8 right-4 w-16 h-16 rounded-full bg-aura-purple/20 -z-10 blur-lg animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
