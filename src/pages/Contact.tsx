import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-aura-black">
      <Navbar />
      <main className="pt-20 md:pt-28 pb-20 relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-aura-purple/5 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-aura-green/5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
        
        {/* Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="w-96 h-96">
            <img src="/images/logo.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or need support? We're here to help you enhance your yoga journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Contact Information */}
            <Card className="glass backdrop-blur-sm border-aura-purple/20">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full glass flex items-center justify-center group-hover:bg-aura-purple/20 transition-colors duration-300">
                    <Mail className="w-5 md:w-6 h-5 md:h-6 text-aura-purple" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email Us</p>
                    <a href="mailto:info@auraflo.com" className="text-muted-foreground hover:text-aura-purple transition-colors duration-300">
                      info@auraflo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full glass flex items-center justify-center group-hover:bg-aura-purple/20 transition-colors duration-300">
                    <Phone className="w-5 md:w-6 h-5 md:h-6 text-aura-purple" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Call Us</p>
                    <span className="text-muted-foreground">+91 **********</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full glass flex items-center justify-center group-hover:bg-aura-purple/20 transition-colors duration-300">
                    <MapPin className="w-5 md:w-6 h-5 md:h-6 text-aura-purple" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Visit Us</p>
                    <p className="text-muted-foreground">
                      Thapar University<br />
                      Patiala, 147001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="glass backdrop-blur-sm border-aura-purple/20">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="glass border-aura-purple/20 focus-visible:ring-aura-purple"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      className="glass border-aura-purple/20 focus-visible:ring-aura-purple"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="Message subject" 
                      className="glass border-aura-purple/20 focus-visible:ring-aura-purple"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      className="min-h-[120px] md:min-h-[150px] glass border-aura-purple/20 focus-visible:ring-aura-purple"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-aura-purple hover:bg-aura-purple-light transition-colors duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 