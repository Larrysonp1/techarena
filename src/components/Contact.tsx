import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
    
    // Name validation
    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    // Subject validation
    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
      isValid = false;
    }
    
    // Message validation
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would send the form data to a server
      console.log("Form submitted:", formData);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-10 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="inline-flex items-center rounded-full border border-cyber-blue/20 bg-cyber-blue/5 dark:bg-cyber-blue/10 px-4 py-1.5 mb-4">
            <span className="text-xxs font-medium text-cyber-blue">Get in Touch</span>
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
          <div className={`w-full lg:w-2/5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <div className="glass-panel p-6 sm:p-8 h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-cyber-blue/10 dark:bg-cyber-blue/20">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Email</h4>
                    <a href="mailto:techarena200@gmail.com" className="text-xs sm:text-sm text-foreground/70 mt-1 hover:text-cyber-blue transition-colors">techarena200@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-cyber-green/10 dark:bg-cyber-green/20">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                    <a href="tel:+233592338330" className="text-xs sm:text-sm text-foreground/70 mt-1 hover:text-cyber-green transition-colors">+233 (59) 233-8330</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-cyber-purple/10 dark:bg-cyber-purple/20">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Location</h4>
                    <p className="text-xs sm:text-sm text-foreground/70 mt-1">Adenta, GA, Ghana</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-foreground/10 dark:border-foreground/5">
                <h4 className="font-medium text-sm sm:text-base mb-3 sm:mb-4">Security Services</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-foreground/70">
                  <li className="flex items-center gap-2 hover:transform hover:translate-x-1 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue"></div>
                    <span>Security Assessments & Audits</span>
                  </li>
                  <li className="flex items-center gap-2 hover:transform hover:translate-x-1 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-green"></div>
                    <span>Incident Response Planning</span>
                  </li>
                  <li className="flex items-center gap-2 hover:transform hover:translate-x-1 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-purple"></div>
                    <span>Security Architecture Design</span>
                  </li>
                  <li className="flex items-center gap-2 hover:transform hover:translate-x-1 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-red"></div>
                    <span>Penetration Testing</span>
                  </li>
                  <li className="flex items-center gap-2 hover:transform hover:translate-x-1 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-yellow"></div>
                    <span>Security Training & Workshops</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={`w-full lg:w-3/5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
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
                      className={cn(
                        "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all duration-300 text-sm",
                        errors.name 
                          ? "border-cyber-red/50 bg-cyber-red/5 dark:border-cyber-red/40 dark:bg-cyber-red/10" 
                          : "border-foreground/10 bg-foreground/5 dark:border-foreground/20 dark:bg-foreground/10"
                      )}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-cyber-red flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all duration-300 text-sm",
                        errors.email 
                          ? "border-cyber-red/50 bg-cyber-red/5 dark:border-cyber-red/40 dark:bg-cyber-red/10" 
                          : "border-foreground/10 bg-foreground/5 dark:border-foreground/20 dark:bg-foreground/10"
                      )}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-cyber-red flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
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
                    className={cn(
                      "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all duration-300 text-sm",
                      errors.subject 
                        ? "border-cyber-red/50 bg-cyber-red/5 dark:border-cyber-red/40 dark:bg-cyber-red/10" 
                        : "border-foreground/10 bg-foreground/5 dark:border-foreground/20 dark:bg-foreground/10"
                    )}
                    placeholder="How can I help you?"
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-cyber-red flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={cn(
                      "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all duration-300 text-sm",
                      errors.message 
                        ? "border-cyber-red/50 bg-cyber-red/5 dark:border-cyber-red/40 dark:bg-cyber-red/10" 
                        : "border-foreground/10 bg-foreground/5 dark:border-foreground/20 dark:bg-foreground/10"
                    )}
                    placeholder="Tell me about your project or security needs..."
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-cyber-red flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-cyber-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm disabled:opacity-70 disabled:cursor-not-allowed hover:bg-opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Send Message
                      </>
                    )}
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
