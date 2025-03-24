
import { Linkedin, Twitter, Globe } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. Maya Patel",
      position: "Founder & CEO",
      bio: "Yoga practitioner with 15+ years experience and a PhD in Human-Computer Interaction. Passionate about making yoga accessible to everyone through technology.",
      image: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      name: "Alex Wong",
      position: "Chief Technology Officer",
      bio: "Former AI researcher at leading tech companies with expertise in sensor technology and machine learning. Leads the development of our mat's intelligent systems.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Johnson",
      position: "Head of Yoga Science",
      bio: "Certified yoga instructor and physical therapist who ensures our technology properly aligns with correct yoga practices and therapeutic benefits.",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "David Chen",
      position: "Product Design Lead",
      bio: "Industrial designer with a focus on wellness products. Creates the seamless fusion of technology and comfort in our mats.",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
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
            The passionate innovators behind AuraFLV, bringing together expertise in yoga, technology, and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="glass rounded-xl overflow-hidden transition-all duration-300 group hover-scale"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-aura-purple text-sm mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300"
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
