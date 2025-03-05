
import { Lock, Shield, Server, Database, Eye, Bug } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Enterprise Zero Trust Implementation",
    category: "Infrastructure Security",
    description: "Designed and implemented a comprehensive Zero Trust architecture for a Fortune 500 financial institution, securing over 10,000 endpoints and reducing security incidents by 60%.",
    tags: ["Zero Trust", "IAM", "Network Segmentation", "MFA"],
    icon: <Lock className="w-6 h-6" />,
    color: "bg-cyber-blue",
    textColor: "text-cyber-blue",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Cloud Security Posture Management",
    category: "Cloud Security",
    description: "Developed an automated cloud security posture management system for multi-cloud environments, ensuring compliance and reducing misconfiguration risks.",
    tags: ["AWS", "Azure", "IaC Security", "Compliance"],
    icon: <Server className="w-6 h-6" />,
    color: "bg-cyber-purple",
    textColor: "text-cyber-purple",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Advanced Threat Detection System",
    category: "Security Operations",
    description: "Built a machine learning-powered threat detection system capable of identifying sophisticated attackers and zero-day exploits with high accuracy.",
    tags: ["ML/AI", "Threat Intelligence", "SIEM", "Behavioral Analysis"],
    icon: <Eye className="w-6 h-6" />,
    color: "bg-cyber-green",
    textColor: "text-cyber-green",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Critical Infrastructure Protection",
    category: "OT/ICS Security",
    description: "Secured industrial control systems for a power utility company by implementing air-gapped networks, secure remote access, and 24/7 monitoring.",
    tags: ["SCADA", "ICS", "OT Security", "Risk Assessment"],
    icon: <Shield className="w-6 h-6" />,
    color: "bg-cyber-yellow",
    textColor: "text-cyber-yellow",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Red Team Security Assessment",
    category: "Offensive Security",
    description: "Led a comprehensive red team assessment for a healthcare organization, identifying critical vulnerabilities before they could be exploited by malicious actors.",
    tags: ["Penetration Testing", "Social Engineering", "Red Team", "OSINT"],
    icon: <Bug className="w-6 h-6" />,
    color: "bg-cyber-red",
    textColor: "text-cyber-red",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Secure Data Warehouse",
    category: "Data Security",
    description: "Architected a secure data warehouse solution that enabled analytics while maintaining strict compliance with GDPR, HIPAA, and other regulatory requirements.",
    tags: ["Data Security", "Encryption", "Access Control", "Compliance"],
    icon: <Database className="w-6 h-6" />,
    color: "bg-cyber-blue",
    textColor: "text-cyber-blue",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=600&auto=format&fit=crop"
  }
];

const categories = ["All", "Infrastructure Security", "Cloud Security", "Security Operations", "OT/ICS Security", "Offensive Security", "Data Security"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-transparent to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-cyber-blue/20 bg-cyber-blue/5 px-4 py-1.5 mb-4">
            <span className="text-xs font-medium text-cyber-blue">Portfolio</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-cyber-blue">Security Projects</span>
          </h2>
          
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of cybersecurity initiatives showcasing expertise across infrastructure protection,
            threat detection, and secure system design.
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 opacity-0 animate-fade-in animate-delay-100">
          <div className="flex gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300",
                  filter === category
                    ? "bg-cyber-blue text-white"
                    : "bg-foreground/5 hover:bg-foreground/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-panel group card-hover opacity-0"
              style={{ 
                animationName: 'fade-in-up', 
                animationDuration: '0.7s', 
                animationFillMode: 'forwards',
                animationDelay: `${200 + index * 100}ms` 
              }}
            >
              <div className="relative overflow-hidden rounded-t-lg h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-1">
                    <span className={cn("text-xs font-medium text-white", project.textColor)}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className={cn("p-3 rounded-lg w-fit mb-5", `${project.color}/10`)}>
                  <div className={cn("text-white", project.textColor)}>
                    {project.icon}
                  </div>
                </div>
                
                <p className="text-foreground/70 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-foreground/10">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="cyber-pill bg-foreground/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in animate-delay-500">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-cyber-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Discuss Your Security Needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
