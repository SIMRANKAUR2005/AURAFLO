
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviewsContainerRef = useRef<HTMLDivElement>(null);
  
  const reviews = [
    {
      name: "Emily Johnson",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      role: "Yoga Instructor",
      stars: 5,
      text: "The AuraFLV 3.0 has revolutionized how I teach. My students receive personalized guidance, and I can focus on more nuanced aspects of the practice. The AI assistant gives detailed advice that complements my teaching perfectly."
    },
    {
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      role: "Fitness Enthusiast",
      stars: 5,
      text: "As someone with back problems, finding the right yoga positions was always challenging. The AuraFLV 2.0's camera system helped me adjust my poses to avoid strain. My physical therapist is amazed at the improvement in my form."
    },
    {
      name: "Sophia Rodriguez",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
      role: "Wellness Coach",
      stars: 5,
      text: "I recommend the AuraFLV line to all my clients. The detailed feedback ensures proper alignment, preventing injuries. The 3.0 model's AI capabilities create perfectly tailored routines based on individual needs and goals."
    },
    {
      name: "David Kim",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      role: "Beginner Yogi",
      stars: 4,
      text: "I started with the AuraFLV 1.0 as a complete yoga beginner. The sensor guidance helped me understand proper positioning without feeling overwhelmed. It's like having a teacher with you during every session."
    },
    {
      name: "Aisha Patel",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      role: "Meditation Expert",
      stars: 5,
      text: "The AuraFLV 3.0 has surprising benefits for meditation practices too. The AI guides breathing exercises and provides feedback on posture during long sessions. It's transformed my daily meditation ritual completely."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add animation when the component comes into view
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
            Read what yogis, instructors, and wellness enthusiasts have experienced with AuraFLV.
          </p>
        </div>
        
        {/* Reviews Carousel */}
        <div ref={reviewsContainerRef} className="opacity-0">
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button 
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300 md:-left-12"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-aura-purple/20 transition-colors duration-300 md:-right-12"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Reviews */}
            <div className="glass rounded-2xl p-8 md:p-12">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === activeIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                  }`}
                  aria-hidden={index !== activeIndex}
                >
                  {index === activeIndex && (
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-aura-purple">
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
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
                      
                      <p className="text-center mb-6 italic">"{review.text}"</p>
                      
                      <div className="text-center">
                        <h4 className="font-semibold text-lg">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
