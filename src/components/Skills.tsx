
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
      { name: "Threat Modeling", level: 95 },
      { name: "Security Architecture", level: 90 },
      { name: "Zero Trust Implementation", level: 85 },
      { name: "Identity & Access Management", level: 92 },
      { name: "Endpoint Protection", level: 88 }
    ]
  },
  {
    id: "offensive",
    name: "Offensive Security",
    icon: <Bug className="w-5 h-5" />,
    color: "text-cyber-red",
    bgColor: "bg-cyber-red/10",
    skills: [
      { name: "Penetration Testing", level: 92 },
      { name: "Vulnerability Assessment", level: 94 },
      { name: "Red Team Operations", level: 85 },
      { name: "Social Engineering", level: 80 },
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
      { name: "Security Automation", level: 88 },
      { name: "SIEM & Log Analysis", level: 90 },
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
      { name: "Cloud Security (AWS/Azure/GCP)", level: 90 },
      { name: "Network Security", level: 92 },
      { name: "Container Security", level: 85 },
      { name: "IoT Security", level: 80 },
      { name: "Secure DevOps", level: 88 }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("defense");
  
  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];
  
  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-cyber-blue/20 bg-cyber-blue/5 px-4 py-1.5 mb-4">
            <span className="text-xs font-medium text-cyber-blue">Expertise</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security <span className="text-cyber-blue">Skill Set</span>
          </h2>
          
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Comprehensive cybersecurity capabilities spanning defensive measures, offensive testing, 
            technical solutions, and secure infrastructure design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 opacity-0 animate-fade-in animate-delay-100">
            <div className="glass-panel p-6 h-full">
              <h3 className="text-xl font-bold mb-6">Skill Categories</h3>
              
              <div className="space-y-3">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300",
                      activeCategory === category.id 
                        ? `${category.bgColor} ${category.color}` 
                        : "hover:bg-foreground/5"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-md",
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
              
              <div className="mt-8 pt-8 border-t border-foreground/10">
                <h4 className="font-medium mb-4">Core Security Tools</h4>
                
                <div className="flex flex-wrap gap-2">
                  <span className="cyber-pill bg-cyber-blue/10 text-cyber-blue">Nessus</span>
                  <span className="cyber-pill bg-cyber-green/10 text-cyber-green">Metasploit</span>
                  <span className="cyber-pill bg-cyber-purple/10 text-cyber-purple">Wireshark</span>
                  <span className="cyber-pill bg-cyber-red/10 text-cyber-red">Burp Suite</span>
                  <span className="cyber-pill bg-cyber-blue/10 text-cyber-blue">Splunk</span>
                  <span className="cyber-pill bg-cyber-green/10 text-cyber-green">Kali Linux</span>
                  <span className="cyber-pill bg-cyber-purple/10 text-cyber-purple">OSSEC</span>
                  <span className="cyber-pill bg-cyber-red/10 text-cyber-red">OWASP ZAP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 opacity-0 animate-fade-in animate-delay-200">
            <div className="glass-panel p-8 h-full">
              {skillCategories.map((category) => (
                category.id === activeCategory && (
                  <div key={category.id} className="animate-fade-in">
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`p-2 rounded-md ${category.bgColor}`}>
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold">{category.name} Skills</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {category.skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span>{skill.name}</span>
                            <span className="text-sm text-foreground/70">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                            <div 
                              className={cn(
                                "h-full rounded-full transition-all duration-1000", 
                                {
                                  "bg-cyber-blue": category.id === "defense",
                                  "bg-cyber-red": category.id === "offensive",
                                  "bg-cyber-green": category.id === "technical",
                                  "bg-cyber-purple": category.id === "infrastructure",
                                }
                              )}
                              style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
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
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 opacity-0 animate-fade-in animate-delay-300">
          <div className="glass-card p-6 card-hover">
            <Lock className="w-6 h-6 text-cyber-blue mb-4" />
            <h4 className="font-bold mb-2">Cryptography</h4>
            <p className="text-sm text-foreground/70">Implementing encryption solutions and secure key management</p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <Database className="w-6 h-6 text-cyber-green mb-4" />
            <h4 className="font-bold mb-2">Data Protection</h4>
            <p className="text-sm text-foreground/70">Safeguarding sensitive information with robust controls</p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <Network className="w-6 h-6 text-cyber-purple mb-4" />
            <h4 className="font-bold mb-2">Secure Architecture</h4>
            <p className="text-sm text-foreground/70">Designing resilient systems with security at the core</p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <Code className="w-6 h-6 text-cyber-red mb-4" />
            <h4 className="font-bold mb-2">Secure Coding</h4>
            <p className="text-sm text-foreground/70">Building applications with security best practices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
