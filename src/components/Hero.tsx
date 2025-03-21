import { Shield, Lock, Server, Code, Layout } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative pt-20 sm:pt-28 md:pt-36 pb-16 md:pb-32 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-20 right-0 -z-10 w-60 md:w-72 h-60 md:h-72 bg-cyber-blue/10 dark:bg-cyber-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 -z-10 w-60 md:w-80 h-60 md:h-80 bg-cyber-purple/5 dark:bg-cyber-purple/5 rounded-full blur-3xl" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8">
            <div className={cn(
              "inline-flex items-center gap-2",
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
            )}>
              <span className="rounded-full border border-cyber-blue/20 bg-cyber-blue/5 dark:bg-cyber-blue/10 px-4 py-1.5 text-xs font-medium text-cyber-blue">
                Cybersecurity Expert
              </span>
              <span className="rounded-full border border-cyber-purple/20 bg-cyber-purple/5 dark:bg-cyber-purple/10 px-4 py-1.5 text-xs font-medium text-cyber-purple">
                Web Developer
              </span>
            </div>
            
            <h1 className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 delay-100",
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
            )}>
              Securing & Building the Digital <span className="text-cyber-blue">Future</span>
            </h1>
            
            <p className={cn(
              "text-base sm:text-lg text-foreground/80 max-w-xl transition-all duration-700 delay-200",
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
            )}>
              Specialized in protecting organizations with advanced cybersecurity solutions
              and creating modern, secure web applications with cutting-edge technologies.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}>
              <a 
                href="#projects" 
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-cyber-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center text-sm sm:text-base hover:bg-opacity-90 hover:transform hover:scale-105"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className={cn(
                  "px-5 sm:px-6 py-2.5 sm:py-3 bg-white border border-cyber-blue/20 text-foreground font-medium rounded-lg hover:border-cyber-blue/50 transition-all duration-300 text-center text-sm sm:text-base hover:bg-cyber-blue/5 hover:transform hover:scale-105",
                  "dark:bg-gray-800 dark:border-cyber-blue/30 dark:hover:bg-cyber-blue/10"
                )}
              >
                Contact Me
              </a>
            </div>
            
            <div className={cn(
              "flex flex-wrap items-center gap-4 sm:gap-6 pt-6 sm:pt-8 transition-all duration-700 delay-400",
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
            )}>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-green" />
                <span className="text-xs sm:text-sm font-medium">Protection</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-blue" />
                <span className="text-xs sm:text-sm font-medium">Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-purple" />
                <span className="text-xs sm:text-sm font-medium">Development</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layout className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-yellow" />
                <span className="text-xs sm:text-sm font-medium">Design</span>
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 h-64 sm:h-80 md:h-96 relative mt-8 md:mt-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'}`}>
            <div className="absolute inset-0 glass-panel flex items-center justify-center overflow-hidden animate-pulse-slow">
              <div className="w-full h-full bg-gradient-to-tr from-cyber-blue/30 via-transparent to-cyber-purple/20 dark:from-cyber-blue/20 dark:via-transparent dark:to-cyber-purple/10 absolute"></div>
              <div className="z-10 flex items-center justify-center w-full h-full">
                <div className="relative w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 animate-float">
                  <div className="absolute inset-0 border-4 border-cyber-blue/30 dark:border-cyber-blue/40 rounded-full rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
                  <div className="absolute inset-4 border-2 border-dashed border-white/30 dark:border-white/20 rounded-full -rotate-12 animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-10 border border-cyber-green/40 dark:border-cyber-green/30 rounded-full rotate-90 animate-spin" style={{ animationDuration: '25s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 rounded-full bg-cyber-blue/20 animate-ping opacity-75 group-hover:bg-cyber-blue/30"></div>
                      <div className="absolute inset-0.5 rounded-full bg-cyber-blue/10 animate-pulse group-hover:bg-cyber-blue/20" style={{ animationDuration: '3s' }}></div>
                      
                      <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-cyber-blue relative z-10 animate-bounce-slow hover:scale-110 transition-transform duration-300" />
                      
                      {/* Uncomment to use your custom image
                      <img 
                        src="/your-image.png" 
                        alt="Your custom image" 
                        className="w-12 h-12 sm:w-16 sm:h-16 relative z-10 animate-bounce-slow hover:scale-110 transition-transform duration-300 rounded-full object-cover"
                      />
                      */}
                      
                      <div className="absolute inset-0 rounded-full bg-cyber-blue/10 blur-xl opacity-75 scale-125 animate-pulse-slow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
