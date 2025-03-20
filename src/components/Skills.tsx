import { useState } from "react";
import { cn } from "@/lib/utils";
import { Shield, Bug, Terminal, Lock, Database, Server, Network, Code } from "lucide-react";

const skillCategories = [
  {
    id: "defense",
    name: "Defense",
    icon: <Shield className="w-5 h-5" />,
    color: "text-cyber-blue",
    bgColor: "bg-cyber-blue/10",
    skills: [
      { name: "Threat Modeling", level: 80 },
      { name: "Security Architecture", level: 85 },
      { name: "Zero Trust Implementation", level: 80 },
      { name: "Identity & Access Management", level: 85 },
    ]
  },
  {
    id: "offensive",
    name: "Offensive Security",
    icon: <Bug className="w-5 h-5" />,
    color: "text-cyber-red",
    bgColor: "bg-cyber-red/10",
    skills: [
      { name: "Penetration Testing", level: 90 },
      { name: "Vulnerability Assessment", level: 94 },
      { name: "Red Team Operations", level: 80 },
      { name: "Social Engineering", level: 90 },
      { name: "Exploit Development", level: 75 }
    ]
  },
  {
    id: "technical",
    name: "Technical",
    icon: <Terminal className="w-5 h-5" />,
    color: "text-cyber-green",
    bgColor: "bg-cyber-green/10",
    skills: [
      { name: "Security Automation", level: 80 },
      { name: "Threat Hunting", level: 85 },
      { name: "Forensic Analysis", level: 82 },
      { name: "Malware Analysis", level: 78 }
    ]
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: <Server className="w-5 h-5" />,
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    skills: [
      { name: "Cloud Security (AWS/Azure/GCP)", level: 80 },
      { name: "Network Security", level: 85 },
      { name: "IoT Security", level: 83 },
      { name: "Secure DevOps", level: 75 }
    ]
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: <Code className="w-5 h-5" />,
    color: "text-cyber-yellow",
    bgColor: "bg-cyber-yellow/10",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "UI/UX Design", level: 85 },
      { name: "Responsive Design", level: 92 },
      { name: "State Management", level: 88 }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Database className="w-5 h-5" />,
    color: "text-cyber-orange",
    bgColor: "bg-cyber-orange/10",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "RESTful APIs", level: 82 },
      { name: "Database Design", level: 80 },
      { name: "Authentication/Authorization", level: 91 },
      { name: "Server Management", level: 80 }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("defense");
  
  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];
  
  return (
    <section id="skills" className="py-16 md:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12 opacity-0 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-cyber-blue/20 bg-cyber-blue/5 px-4 py-1.5 mb-4">
            <span className="text-xs font-medium text-cyber-blue">Expertise</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Security <span className="text-cyber-blue">Skill Set</span>
          </h2>
          
          <p className="text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto">
            Comprehensive cybersecurity capabilities spanning defensive measures, offensive testing, 
            technical solutions, and secure infrastructure design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-1 opacity-0 animate-fade-in animate-delay-100">
            <div className="glass-panel p-4 sm:p-6 h-full">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Skill Categories</h3>
              
              <div className="space-y-2 sm:space-y-3">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg transition-all duration-300 text-sm",
                      activeCategory === category.id 
                        ? `${category.bgColor} ${category.color}` 
                        : "hover:bg-foreground/5"
                    )}
                  >
                    <div className={cn(
                      "p-1.5 sm:p-2 rounded-md",
                      activeCategory === category.id 
                        ? "bg-white/20" 
                        : category.bgColor
                    )}>
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-foreground/10">
                <h4 className="font-medium text-sm sm:text-base mb-3 sm:mb-4">Core Security Tools</h4>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="cyber-pill bg-cyber-green/10 text-cyber-green">Kali Linux</span>
                  <span className="cyber-pill bg-cyber-blue/10 text-cyber-blue">Nessus</span>
                  <span className="cyber-pill bg-cyber-green/10 text-cyber-green">Metasploit</span>
                  <span className="cyber-pill bg-cyber-purple/10 text-cyber-purple">Wireshark</span>
                  <span className="cyber-pill bg-cyber-red/10 text-cyber-red">Burp Suite</span>
                  <span className="cyber-pill bg-cyber-red/10 text-cyber-red">OWASP ZAP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 opacity-0 animate-fade-in animate-delay-200">
            <div className="glass-panel p-4 sm:p-8 h-full">
              {skillCategories.map((category) => (
                category.id === activeCategory && (
                  <div key={category.id} className="animate-fade-in">
                    <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                      <div className={`p-1.5 sm:p-2 rounded-md ${category.bgColor}`}>
                        {category.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold">{category.name} Skills</h3>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      {category.skills.map((skill, index) => (
                        <div key={index} className="space-y-1.5 sm:space-y-2">
                          <div className="flex justify-between text-sm sm:text-base">
                            <span>{skill.name}</span>
                            <span className="text-xs sm:text-sm text-foreground/70">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 sm:h-2 bg-foreground/10 rounded-full overflow-hidden">
                            <div 
                              className={cn(
                                "h-full rounded-full transition-all duration-1000", 
                                {
                                  "bg-cyber-blue": category.id === "defense",
                                  "bg-cyber-red": category.id === "offensive",
                                  "bg-cyber-green": category.id === "technical",
                                  "bg-cyber-purple": category.id === "infrastructure",
                                  "bg-cyber-yellow": category.id === "frontend",
                                }
                              )}
                              style={{ 
                                width: `${skill.level}%`, 
                                transitionDelay: `${index * 100}ms`,
                                backgroundColor: category.id === "backend" ? "#FF6B6B" : ""  // Using a direct color value
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 opacity-0 animate-fade-in animate-delay-300">
          <div className="glass-card p-4 sm:p-6 card-hover">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-blue mb-3 sm:mb-4" />
            <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">Cryptography</h4>
            <p className="text-xs sm:text-sm text-foreground/70">Implementing encryption solutions and secure key management</p>
          </div>
          
          <div className="glass-card p-4 sm:p-6 card-hover">
            <Database className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-green mb-3 sm:mb-4" />
            <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">Data Protection</h4>
            <p className="text-xs sm:text-sm text-foreground/70">Safeguarding sensitive information with robust controls</p>
          </div>
          
          <div className="glass-card p-4 sm:p-6 card-hover">
            <Network className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-purple mb-3 sm:mb-4" />
            <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">Secure Architecture</h4>
            <p className="text-xs sm:text-sm text-foreground/70">Designing resilient systems with security at the core</p>
          </div>
          
          <div className="glass-card p-4 sm:p-6 card-hover">
            <Code className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-red mb-3 sm:mb-4" />
            <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">Secure Coding</h4>
            <p className="text-xs sm:text-sm text-foreground/70">Building applications with security best practices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
