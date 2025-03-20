import { Eye, Database, Code, Network, Shield, Award, BookOpen, Layout, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="about" className="py-16 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-transparent to-secondary/30 dark:from-transparent dark:to-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation type="fade-up">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center rounded-full border border-cyber-blue/20 bg-cyber-blue/5 dark:bg-cyber-blue/10 px-4 py-1.5 mb-4">
              <span className="text-xxs font-medium text-cyber-blue">About Me</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Cybersecurity Professional & <span className="text-cyber-blue">Web Developer</span>
            </h2>
            
            <p className="text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto">
              With extensive experience in both cybersecurity and web development, I specialize in creating 
              secure, modern applications while protecting organizations from evolving cyber threats.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <ScrollAnimation type="fade-right" className="w-full md:w-2/5 order-2 md:order-1">
            <div className="relative">
              <div className="w-full h-auto glass-panel overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/10 via-transparent to-cyber-purple/10 dark:from-cyber-blue/5 dark:to-cyber-purple/5"></div>
                <div className="relative z-10 h-full flex flex-col justify-center p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Security Philosophy</h3>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4 hover:transform hover:translate-x-1 transition-transform duration-300">
                      <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-cyber-blue/10 dark:bg-cyber-blue/20">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">Proactive Monitoring</h4>
                        <p className="text-xs sm:text-sm text-foreground/70 mt-1">Constant vigilance against emerging threats</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4 hover:transform hover:translate-x-1 transition-transform duration-300">
                      <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-cyber-green/10 dark:bg-cyber-green/20">
                        <Database className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-green" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">Data-Driven Security</h4>
                        <p className="text-xs sm:text-sm text-foreground/70 mt-1">Analytics-based protection mechanisms</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4 hover:transform hover:translate-x-1 transition-transform duration-300">
                      <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-cyber-purple/10 dark:bg-cyber-purple/20">
                        <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-purple" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">Secure Development</h4>
                        <p className="text-xs sm:text-sm text-foreground/70 mt-1">Building security from the ground up</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4 hover:transform hover:translate-x-1 transition-transform duration-300">
                      <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-cyber-red/10 dark:bg-cyber-red/20">
                        <Network className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-red" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">Defense in Depth</h4>
                        <p className="text-xs sm:text-sm text-foreground/70 mt-1">Layered security controls for maximum protection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade-left" className="w-full md:w-3/5 order-1 md:order-2">
            <div className="mb-6">
              <div className="flex border-b border-foreground/10 dark:border-foreground/5">
                <button 
                  onClick={() => setActiveTab("experience")}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === "experience" ? "text-cyber-blue" : "text-foreground/70 hover:text-foreground"}`}
                >
                  Experience
                  {activeTab === "experience" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-blue"></span>
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab("certifications")}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === "certifications" ? "text-cyber-blue" : "text-foreground/70 hover:text-foreground"}`}
                >
                  Certifications
                  {activeTab === "certifications" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-blue"></span>
                  )}
                </button>
              </div>
            </div>
            
            {activeTab === "experience" && (
              <div className="space-y-6">
                <ScrollAnimation type="fade-up" delay={100}>
                  <div className="glass-card p-5 sm:p-6 hover:shadow-md transition-all duration-300 hover:border-cyber-blue/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-base sm:text-lg">Lead Security Specialist</h3>
                      <span className="text-xs bg-cyber-blue/10 text-cyber-blue px-2 py-1 rounded-full dark:bg-cyber-blue/20">2024 - Present</span>
                    </div>
                    <p className="text-sm text-foreground/70">
                      Providing strategic direction for security initiatives, conducting threat assessments,
                      and implementing comprehensive security frameworks. Leading incident response and
                      mentoring junior security team members.
                    </p>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation type="fade-up" delay={200}>
                  <div className="glass-card p-5 sm:p-6 hover:shadow-md transition-all duration-300 hover:border-cyber-purple/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-base sm:text-lg">Senior Web Developer</h3>
                      <span className="text-xs bg-cyber-purple/10 text-cyber-purple px-2 py-1 rounded-full dark:bg-cyber-purple/20">2022 - Present</span>
                    </div>
                    <p className="text-sm text-foreground/70">
                      Developing modern web applications using React, TypeScript, and Next.js. 
                      Implementing secure coding practices and creating responsive, accessible user interfaces.
                      Leading frontend development initiatives and mentoring junior developers.
                    </p>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation type="fade-up" delay={300}>
                  <div className="glass-card p-5 sm:p-6 hover:shadow-md transition-all duration-300 hover:border-cyber-green/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-base sm:text-lg">Senior Security Engineer</h3>
                      <span className="text-xs bg-cyber-green/10 text-cyber-green px-2 py-1 rounded-full dark:bg-cyber-green/20">2022 - 2024</span>
                    </div>
                    <p className="text-sm text-foreground/70">
                      Developed and implemented security controls for critical infrastructure, conducted penetration testing, 
                      and led incident response for major security events.
                    </p>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation type="fade-up" delay={400}>
                  <div className="glass-card p-5 sm:p-6 hover:shadow-md transition-all duration-300 hover:border-cyber-yellow/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-base sm:text-lg">Full Stack Developer</h3>
                      <span className="text-xs bg-cyber-yellow/10 text-cyber-yellow px-2 py-1 rounded-full dark:bg-cyber-yellow/20">2020 - 2022</span>
                    </div>
                    <p className="text-sm text-foreground/70">
                      Built full-stack applications using modern JavaScript frameworks, Node.js, and various databases.
                      Implemented secure authentication systems and RESTful APIs while ensuring optimal performance.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            )}
            
            {activeTab === "certifications" && (
              <div className="space-y-6">
                <ScrollAnimation type="fade-up" delay={100}>
                  <div className="glass-card p-5 sm:p-6 hover:shadow-md transition-all duration-300 hover:border-cyber-blue/20 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-cyber-blue/10 dark:bg-cyber-blue/20">
                      <Shield className="w-5 h-5 text-cyber-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg">Certified Information Systems Security Professional (CISSP)</h3>
                      <p className="text-sm text-foreground/70 mt-1">
                        Comprehensive certification covering security and risk management, asset security, security architecture, 
                        network security, identity management, and more.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation type="fade-up" delay={200}>
                  <div className="glass-card p-5 sm:p-6 hover:shadow-md transition-all duration-300 hover:border-cyber-green/20 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-cyber-green/10 dark:bg-cyber-green/20">
                      <Award className="w-5 h-5 text-cyber-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg">Certified Ethical Hacker (CEH)</h3>
                      <p className="text-sm text-foreground/70 mt-1">
                        Advanced penetration testing certification demonstrating expertise in identifying and exploiting 
                        vulnerabilities in systems and networks.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                
              </div>
            )}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
