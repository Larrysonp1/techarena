import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/lib/supabase";
import logger from "@/lib/logger";

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [formAnimated, setFormAnimated] = useState(false);
  
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
    
    // Set up scroll animation for form elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFormAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
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
    if (formData.name.trim().length < 5) {
      newErrors.name = "Name must be at least 5 characters";
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
      newErrors.subject = "Subject is Required";
      isValid = false;
    }
    
    // Message validation
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message is Required";
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
      // No need to log validation failure
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit form data to Supabase without logging user data
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      
      // Reset submitting state
      setIsSubmitting(false);
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      
      // Show success state
      setIsSubmitted(true);
      
      // Clear the form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset to form state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      // Log error without exposing user data
      setIsSubmitting(false);
      
      // Show error toast
      toast({
        title: "Message could not be sent",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
      
      logger.error("Form submission failed");
    }
  };
  
  // Show success message instead of form when submitted
  const SuccessMessage = () => (
    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 md:space-y-6">
      <div className="rounded-full bg-cyber-green/10 p-3 md:p-4">
        <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-cyber-green animate-pulse" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-cyber-green">Message Sent Successfully!</h3>
      <p className="text-sm md:text-base text-foreground/70 max-w-md">
        Thank you for reaching out. I've received your message and will respond as soon as possible.
      </p>
      <button
        onClick={() => setIsSubmitted(false)}
        className="mt-2 md:mt-4 px-4 py-2 rounded-md bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20 transition-colors"
      >
        Send Another Message
      </button>
    </div>
  );
  
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
              
              {isSubmitted ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div 
                      ref={formRef}
                      className={`transition-all duration-500 delay-100 ${
                        formAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                      }`}
                    >
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
                    
                    <div className={`transition-all duration-500 delay-200 ${
                      formAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                    }`}>
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
                  
                  <div className={`transition-all duration-500 delay-300 ${
                    formAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                  }`}>
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
                  
                  <div className={`transition-all duration-500 delay-400 ${
                    formAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                  }`}>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={cn(
                        "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 transition-all duration-300 text-sm",
                        errors.message 
                          ? "border-cyber-red/50 bg-cyber-red/5 dark:border-cyber-red/40 dark:bg-cyber-red/10" 
                          : "border-foreground/10 bg-foreground/5 dark:border-foreground/20 dark:bg-foreground/10"
                      )}
                      placeholder="Tell me about your project or inquiry..."
                      disabled={isSubmitting}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-cyber-red flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full py-3 px-4 bg-cyber-blue rounded-lg font-medium text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-500 delay-500 ${
                      formAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                    } disabled:opacity-70`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
