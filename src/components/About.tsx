
import { Eye, Database, Code, Network } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-transparent to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-2/5 opacity-0 animate-fade-in">
            <div className="relative">
              <div className="w-full h-96 glass-panel overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/10 via-transparent to-cyber-purple/10"></div>
                <div className="relative z-10 h-full flex flex-col justify-center p-8">
                  <h3 className="text-2xl font-bold mb-6">Security Philosophy</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-cyber-blue/10">
                        <Eye className="w-5 h-5 text-cyber-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">Proactive Monitoring</h4>
                        <p className="text-sm text-foreground/70 mt-1">Constant vigilance against emerging threats</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-cyber-green/10">
                        <Database className="w-5 h-5 text-cyber-green" />
                      </div>
                      <div>
                        <h4 className="font-medium">Data-Driven Security</h4>
                        <p className="text-sm text-foreground/70 mt-1">Analytics-based protection mechanisms</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-cyber-purple/10">
                        <Code className="w-5 h-5 text-cyber-purple" />
                      </div>
                      <div>
                        <h4 className="font-medium">Secure Development</h4>
                        <p className="text-sm text-foreground/70 mt-1">Building security from the ground up</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-cyber-red/10">
                        <Network className="w-5 h-5 text-cyber-red" />
                      </div>
                      <div>
                        <h4 className="font-medium">Network Resilience</h4>
                        <p className="text-sm text-foreground/70 mt-1">Designing robust infrastructure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyber-blue rounded-full opacity-10 blur-2xl"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5 opacity-0 animate-fade-in animate-delay-200">
            <div className="inline-flex items-center rounded-full border border-cyber-blue/20 bg-cyber-blue/5 px-4 py-1.5 mb-4">
              <span className="text-xs font-medium text-cyber-blue">About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dedicated to <span className="text-cyber-blue">Cybersecurity Excellence</span>
            </h2>
            
            <p className="text-foreground/80 mb-6">
              With over a decade of experience in cybersecurity, I've specialized in developing robust security architectures, implementing comprehensive defense strategies, and safeguarding critical infrastructure from evolving threats.
            </p>
            
            <p className="text-foreground/80 mb-8">
              My approach combines technical expertise with strategic insight, allowing me to design security solutions that not only protect organizations but also enable their growth and innovation. I believe in defense-in-depth strategies that address the full spectrum of cyber risks.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-5">
                <h3 className="font-bold mb-2">Security Certifications</h3>
                <p className="text-sm text-foreground/70">CISSP, CEH, OSCP, CompTIA Security+</p>
              </div>
              
              <div className="glass-card p-5">
                <h3 className="font-bold mb-2">Industry Experience</h3>
                <p className="text-sm text-foreground/70">Finance, Healthcare, Government, Tech</p>
              </div>
              
              <div className="glass-card p-5">
                <h3 className="font-bold mb-2">Specializations</h3>
                <p className="text-sm text-foreground/70">Threat Intelligence, Incident Response</p>
              </div>
              
              <div className="glass-card p-5">
                <h3 className="font-bold mb-2">Education</h3>
                <p className="text-sm text-foreground/70">M.S. Cybersecurity, B.S. Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
