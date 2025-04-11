import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Mail, Phone } from "lucide-react";

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I connect my AuraFlo mat to the app?",
      answer: "To connect your AuraFlo mat, first ensure Bluetooth is enabled on your device. Open the AuraFlo app and follow the on-screen instructions. The mat should automatically appear in the available devices list. Tap to connect and follow any additional setup steps."
    },
    {
      question: "What is the warranty period for AuraFlo products?",
      answer: "All AuraFlo products come with a 2-year limited warranty covering manufacturing defects. The warranty does not cover normal wear and tear or damage caused by improper use. Please refer to our warranty policy for detailed information."
    },
    {
      question: "How do I clean my AuraFlo mat?",
      answer: "We recommend using our AuraFlo Mat Cleaner or a mild soap solution. Gently wipe the surface with a damp cloth, avoiding excessive water. Never submerge the mat in water as it contains electronic components. Allow the mat to air dry completely before use."
    },
    {
      question: "Can I use my AuraFlo mat outdoors?",
      answer: "While the AuraFlo mat is designed for indoor use, it can be used outdoors in dry conditions. However, we recommend avoiding direct sunlight for extended periods and never exposing it to rain or moisture. Always store the mat in a cool, dry place when not in use."
    },
    {
      question: "How long does the battery last?",
      answer: "The AuraFlo mat's battery lasts approximately 8-10 hours of continuous use on a full charge. Charging time is about 2-3 hours. The app will notify you when the battery is running low."
    }
  ];

  const supportOptions = [
    {
      title: "Email Support",
      description: "Get in touch with our support team via email",
      icon: <Mail className="w-6 h-6" />,
      contact: "support@auraflo.com"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support team",
      icon: <Phone className="w-6 h-6" />,
      contact: "+1 (800) 123-4567"
    }
  ];

  return (
    <div className="min-h-screen bg-aura-darkBlack text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gradient">Support & FAQ</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <div key={index} className="glass p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-aura-purple mr-4">{option.icon}</div>
                <h3 className="text-xl font-semibold">{option.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{option.description}</p>
              <p className="text-aura-purple font-medium">{option.contact}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-aura-purple/20 text-aura-purple rounded-lg hover:bg-aura-purple/30 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Support; 