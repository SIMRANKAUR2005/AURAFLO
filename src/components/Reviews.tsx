import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviewsContainerRef = useRef<HTMLDivElement>(null);
  
  const reviews = [
    {
      name: "Emily Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      role: "Yoga Instructor",
      stars: 5,
      text: "The AuraFlo 3.0 has revolutionized how I teach. My students receive personalized guidance, and I can focus on more nuanced aspects of the practice. The AI assistant gives detailed advice that complements my teaching perfectly."
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      role: "Fitness Enthusiast",
      stars: 5,
      text: "As someone with back problems, finding the right yoga positions was always challenging. The AuraFlo 2.0's camera system helped me adjust my poses to avoid strain. My physical therapist is amazed at the improvement in my form."
    },
    {
      name: "Sophia Rodriguez",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      role: "Wellness Coach",
      stars: 5,
      text: "I recommend the AuraFlo line to all my clients. The detailed feedback ensures proper alignment, preventing injuries. The 3.0 model's AI capabilities create perfectly tailored routines based on individual needs and goals."
    },
    {
      name: "David Kim",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      role: "Beginner Yogi",
      stars: 4,
      text: "I started with the AuraFlo 1.0 as a complete yoga beginner. The sensor guidance helped me understand proper positioning without feeling overwhelmed. It's like having a teacher with you during every session."
    },
    {
      name: "Aisha Patel",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      role: "Meditation Expert",
      stars: 5,
      text: "The AuraFlo 3.0 has surprising benefits for meditation practices too. The AI guides breathing exercises and provides feedback on posture during long sessions. It's transformed my daily meditation ritual completely."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (reviewsContainerRef.current) {
            reviewsContainerRef.current.classList.add('animate-fade-in');
          }
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (reviewsContainerRef.current) {
      observer.observe(reviewsContainerRef.current);
    }

    return () => {
      if (reviewsContainerRef.current) {
        observer.unobserve(reviewsContainerRef.current);
      }
    };
  }, []);

  const nextReview = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(126,105,171,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read what yogis, instructors, and wellness enthusiasts have experienced with AuraFlo.
          </p>
        </div>
        
        {/* Reviews Carousel */}
        <div ref={reviewsContainerRef}>
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button 
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300 md:-left-12 group"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300 md:-right-12 group"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            {/* Reviews */}
            <div className="glass rounded-2xl p-8 md:p-12 group hover:shadow-xl hover:shadow-aura-purple/10 transition-all duration-500">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 glass rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-aura-purple" />
              </div>
              
              <div className="relative min-h-[300px]">
                {reviews.map((review, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === activeIndex 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-2 border-aura-purple shadow-lg shadow-aura-purple/20 group-hover:shadow-aura-purple/40 transition-all duration-500">
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.stars ? "text-aura-purple fill-aura-purple" : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        
                        <p className="text-lg mb-6 italic">{review.text}</p>
                        
                        <div>
                          <h4 className="font-semibold text-lg text-gradient">{review.name}</h4>
                          <p className="text-sm text-muted-foreground">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-aura-purple w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
