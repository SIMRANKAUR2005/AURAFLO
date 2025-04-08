import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I set up my AuraFLO mat?",
      answer: "Setting up your AuraFLO mat is simple. First, unroll the mat and place it in your desired location. Connect the power adapter to the mat and plug it into a power outlet. Download the AuraFLO app from the App Store or Google Play, create an account, and follow the in-app setup instructions to connect your mat to your home network."
    },
    {
      question: "What surfaces can I use the AuraFLO mat on?",
      answer: "The AuraFLO mat is designed to work on most flat, stable surfaces including hardwood floors, tile, and carpet. For optimal performance, ensure the surface is clean and dry before placing the mat."
    },
    {
      question: "How do I clean and maintain my AuraFLO mat?",
      answer: "To clean your AuraFLO mat, first unplug it from the power source. Use a slightly damp cloth with mild soap to wipe the surface. Avoid using harsh chemicals or submerging the mat in water. Allow the mat to dry completely before plugging it back in."
    },
    {
      question: "What is the warranty period for AuraFLO products?",
      answer: "All AuraFLO products come with a 1-year limited warranty covering manufacturing defects. The warranty does not cover damage caused by misuse, accidents, or normal wear and tear."
    },
    {
      question: "How do I update the firmware on my AuraFLO mat?",
      answer: "Firmware updates are delivered automatically through the AuraFLO app. When an update is available, you'll receive a notification in the app. Simply follow the on-screen instructions to complete the update process."
    }
  ];

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
                Support & <span className="text-gradient">FAQ</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions and get the support you need.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-20">
              <div className="glass rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
                <p className="text-muted-foreground mb-4">
                  Our support team is available 24/7 to help you with any questions or issues you may have.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-aura-purple/10">
                    <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                    <p className="text-muted-foreground">support@auraflo.com</p>
                  </div>
                  <div className="p-4 rounded-lg bg-aura-green/10">
                    <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                    <p className="text-muted-foreground">+1 (800) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-aura-purple/20 pb-4">
                      <button
                        className="w-full flex justify-between items-center text-left"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <p className="text-muted-foreground mt-2">{faq.answer}</p>
                      )}
                    </div>
                  ))}
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

export default Support; 