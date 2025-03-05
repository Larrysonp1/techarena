
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real implementation, you would send the form data to a server
    alert("Thank you for your message. I'll get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  
  return (
    <section id="contact" className="py-16 md:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12 opacity-0 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-cyber-blue/20 bg-cyber-blue/5 px-4 py-1.5 mb-4">
            <span className="text-xs font-medium text-cyber-blue">Get in Touch</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready for <span className="text-cyber-blue">Secure Solutions</span>?
          </h2>
          
          <p className="text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto">
            Let's discuss your cybersecurity needs and how I can help protect your digital assets
            with tailored security solutions.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-2/5 opacity-0 animate-fade-in animate-delay-100">
            <div className="glass-panel p-6 sm:p-8 h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-cyber-blue/10">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Email</h4>
                    <p className="text-xs sm:text-sm text-foreground/70 mt-1">contact@secureportfolio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-cyber-green/10">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                    <p className="text-xs sm:text-sm text-foreground/70 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-cyber-purple/10">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Location</h4>
                    <p className="text-xs sm:text-sm text-foreground/70 mt-1">San Francisco, CA, United States</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-foreground/10">
                <h4 className="font-medium text-sm sm:text-base mb-3 sm:mb-4">Security Services</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-foreground/70">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue"></div>
                    <span>Security Assessments & Audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-green"></div>
                    <span>Incident Response Planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-purple"></div>
                    <span>Security Architecture Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-red"></div>
                    <span>Penetration Testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-yellow"></div>
                    <span>Security Training & Workshops</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 opacity-0 animate-fade-in animate-delay-200">
            <div className="glass-panel p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-foreground/10 bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all duration-300 text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-foreground/10 bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all duration-300 text-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-foreground/10 bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all duration-300 text-sm"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-foreground/10 bg-foreground/5 resize-none focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all duration-300 text-sm"
                    placeholder="Tell me about your project or security needs..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-cyber-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
