import { Linkedin, Twitter, Globe } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Angad",
      position: "Founder & CEO",
      bio: " Passionate about making yoga accessible to everyone through technology.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      name: "Priyam Ganguli",
      position: "Co-CEO",
      bio: "Former AI researcher at leading tech companies with expertise in sensor technology and machine learning. Leads the development of our mat's intelligent systems.",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Something",
      position: "Head of Yoga Science",
      bio: "Certified yoga instructor and physical therapist who ensures our technology properly aligns with correct yoga practices and therapeutic benefits.",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "BLABLa",
      position: "Product Design Lead",
      bio: "Industrial designer with a focus on wellness products. Creates the seamless fusion of technology and comfort in our mats.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-aura-green/5 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-aura-purple/5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate innovators behind AuraFlo, bringing together expertise in yoga, technology, and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="glass rounded-xl overflow-hidden transition-all duration-500 group hover:shadow-xl hover:shadow-aura-purple/20 hover:translate-y-[-10px]"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-black/90 via-aura-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-aura-purple text-sm">{member.position}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-gradient transition-colors duration-300">{member.name}</h3>
                <p className="text-aura-purple text-sm mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-aura-purple/30 transition-colors duration-300 hover:scale-110"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-aura-purple/30 transition-colors duration-300 hover:scale-110"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-aura-purple/30 transition-colors duration-300 hover:scale-110"
                    aria-label={`${member.name}'s Website`}
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
