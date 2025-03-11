import { Lock, Shield, Server, Database, Eye, Bug, Code, BarChart } from "lucide-react";
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
    title: "Modern E-Commerce Platform",
    category: "Web Development",
    description: "Built a full-stack e-commerce solution with Next.js, featuring real-time inventory, secure payments, and an intuitive admin dashboard for product management.",
    tags: ["Next.js", "Python", "React", "Node.js", "Supabase"],
    icon: <Code className="w-6 h-6" />,
    color: "bg-cyber-yellow",
    textColor: "text-cyber-yellow",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Advanced Threat Detection System",
    category: "Security Operations",
    description: "Built a machine learning-powered threat detection system capable of identifying sophisticated attackers and zero-day exploits with high accuracy.",
    tags: ["Machine Learning", "Threat Intelligence", "SIEM", "Behavioral Analysis"],
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
    tags: [ "ICS", "OT Security", "Risk Assessment"],
    icon: <Shield className="w-6 h-6" />,
    color: "bg-cyber-yellow",
    textColor: "text-cyber-yellow",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Analytics Dashboard Platform",
    category: "Web Development",
    description: "Developed a real-time analytics dashboard with dynamic data visualization, user authentication, and role-based access control using modern web technologies.",
    tags: ["React", "Nextjs", "TypeScript", "Python", "REST API"],
    icon: <BarChart className="w-6 h-6" />,
    color: "bg-cyber-purple",
    textColor: "text-cyber-purple",
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

const categories = ["All", "Infrastructure Security", "Web Development", "Security Operations", "OT/ICS Security", "Data Security"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-16 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-transparent to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12 opacity-0 animate-fade-in">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-cyber-blue">Security Projects</span>
          </h2>
          
          <p className="text-foreground/70 max-w-2xl mx-auto text-sm sm:text-base">
            A selection of cybersecurity initiatives showcasing expertise across infrastructure protection,
            threat detection, and secure system design.
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-8 md:mb-10 overflow-x-auto pb-2 opacity-0 animate-fade-in animate-delay-100">
          <div className="flex gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-300",
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              <div className="relative overflow-hidden rounded-t-xl h-40 sm:h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="mb-1">
                    <span className={cn("text-xs font-medium text-white", project.textColor)}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className={cn("p-2 sm:p-3 rounded-lg w-fit mb-4 sm:mb-5", `${project.color}/10`)}>
                  <div className={cn("text-white", project.textColor)}>
                    {project.icon}
                  </div>
                </div>
                
                <p className="text-foreground/70 mb-4 text-xs sm:text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-3 sm:pt-4 border-t border-foreground/10">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="cyber-pill bg-foreground/5 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:mt-12 text-center opacity-0 animate-fade-in animate-delay-500">
          <a 
            href="#contact" 
            className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-cyber-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            Discuss Your Security Needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
