
import { Shield, Lock, Server } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-20 right-0 -z-10 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
            <div className="inline-flex items-center rounded-full border border-cyber-blue/20 bg-cyber-blue/5 px-4 py-1.5 mb-4 opacity-0 animate-fade-in">
              <span className="text-xs font-medium text-cyber-blue">Cybersecurity Expert</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in animate-delay-100">
              Securing the Digital <span className="text-cyber-blue">Future</span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-xl opacity-0 animate-fade-in animate-delay-200">
              Specialized in protecting organizations with advanced cybersecurity solutions, threat intelligence, and secure infrastructure design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-3 opacity-0 animate-fade-in animate-delay-300">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-cyber-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white border border-cyber-blue/20 text-foreground font-medium rounded-lg hover:border-cyber-blue/50 transition-all duration-300 text-center"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-8 opacity-0 animate-fade-in animate-delay-400">
              <div className="flex items-center gap-1.5">
                <Shield className="w-5 h-5 text-cyber-green" />
                <span className="text-sm font-medium">Protection</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-5 h-5 text-cyber-blue" />
                <span className="text-sm font-medium">Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Server className="w-5 h-5 text-cyber-purple" />
                <span className="text-sm font-medium">Infrastructure</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 h-96 relative opacity-0 animate-fade-in animate-delay-200">
            <div className="absolute inset-0 glass-panel flex items-center justify-center overflow-hidden animate-pulse-slow">
              <div className="w-full h-full bg-gradient-to-tr from-cyber-blue/30 via-transparent to-cyber-purple/20 absolute"></div>
              <div className="z-10 flex items-center justify-center w-full h-full">
                <div className="relative w-48 h-48 animate-float">
                  <div className="absolute inset-0 border-4 border-cyber-blue/30 rounded-full rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
                  <div className="absolute inset-4 border-2 border-dashed border-white/30 rounded-full -rotate-12 animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-10 border border-cyber-green/40 rounded-full rotate-90 animate-spin" style={{ animationDuration: '25s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-16 h-16 text-cyber-blue" />
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
