import { useState, useEffect, useRef } from "react";
// Note: Brand icons like Linkedin are deprecated in lucide-react but still available
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import logger from "@/lib/logger";

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [formAnimated, setFormAnimated] = useState(false);
  
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  // State to store validation error messages
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    // This effect handles animations when the component mounts
    // It makes the form visible with a fade-in animation and sets up 
    // an intersection observer to animate form fields when scrolled into view
    
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
  
  /**
   * Validates all form fields before submission
   * Checks for:
   * - Name length (min 5 chars)
   * - Valid email format
   * - Subject presence (min 3 chars)
   * - Message length (min 10 chars)
   * @returns {boolean} true if form is valid, false otherwise
   */
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
  
  /**
   * Handles changes to form input fields
   * Updates the formData state and clears any error for the changed field
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
  
  /**
   * Handles form submission
   * Submits form data to our backend API which uses Supabase and Resend
   * @param {React.FormEvent} e - The form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send form data to our contact API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // For debugging - log the raw response
      const responseText = await response.text();
      
      let data;
      try {
        // Try to parse the response as JSON
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('[ERROR] Form submission failed', parseError);
        console.error('Non-JSON response:', responseText);
        
        // Show error toast with the raw response for debugging
        toast({
          title: "Form submission error",
          description: `The server returned an invalid response: ${responseText.substring(0, 100)}${responseText.length > 100 ? '...' : ''}`,
          variant: "destructive",
        });
        
        setIsSubmitting(false);
        return;
      }
      
      // Reset submitting state
      setIsSubmitting(false);
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
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
      
      logger.error("Form submission failed", error);
    }
  };
  
  /**
   * Component to display success message after form submission
   * Shows a checkmark icon, success message, and option to send another message
   */
  const SuccessMessage = () => (
    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 md:space-y-6 w-full">
      <div className="rounded-full bg-cyber-green/10 p-3 md:p-4">
        <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-cyber-green animate-pulse" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-cyber-green">Message Sent Successfully!</h3>
      <p className="text-sm md:text-base text-foreground/70 max-w-md">
        Thank you for reaching out. I've received your message and will respond as soon as possible.
      </p>
      <button
        onClick={() => setIsSubmitted(false)}
        className="mt-2 md:mt-4 px-6 py-2 rounded-md bg-cyber-blue text-white hover:bg-cyber-blue/90 transition-colors"
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
            <span className="text-xs sm:text-sm font-medium tracking-wide text-cyber-blue">GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Let's Connect
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or just want to chat about cybersecurity? Fill out the form below or use one of the contact methods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <div className="glass-panel p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-cyber-blue/10 p-2.5">
                    <Mail className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:techarena200@gmail.com" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      techarena200@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-cyber-blue/10 p-2.5">
                    <Phone className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a 
                      href="tel:+2348131193222" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +234 813 119 3222
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-cyber-blue/10 p-2.5">
                    <MapPin className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-foreground/10">
                <h4 className="font-medium mb-3">Connect on Social Media</h4>
                <div className="flex gap-3">
                  <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="rounded-full bg-foreground/10 p-2.5 hover:bg-gray-800/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                    <Github className="h-5 w-5 text-gray-800 dark:text-gray-300" />
                  </a>
                  <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="rounded-full bg-foreground/10 p-2.5 hover:bg-[#0A66C2]/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                    <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                  </a>
                  <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="rounded-full bg-foreground/10 p-2.5 hover:bg-[#1DA1F2]/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                    <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                  </a>
                  <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="rounded-full bg-foreground/10 p-2.5 hover:bg-[#E1306C]/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                    <Instagram className="h-5 w-5 text-[#E1306C]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`w-full lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <div className="glass-panel p-6 sm:p-8 w-full">
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
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Email Address</label>
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
                        placeholder="johndoe@example.com"
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
                  
                  <div className={`transition-all duration-500 delay-500 ${
                    formAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                  }`}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-cyber-blue text-white rounded-lg hover:bg-cyber-blue/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
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
