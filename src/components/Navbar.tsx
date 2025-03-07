import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useScrollTo } from "@/hooks/useScrollTo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollTo } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('nav') && !target.closest('.mobile-menu')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollTo(sectionId, { 
      offset: 80, // Offset for the fixed header
      duration: 800 
    });
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 py-4",
        scrolled 
          ? "bg-white/90 backdrop-blur-lg shadow-sm dark:bg-gray-900/90" 
          : "bg-transparent dark:bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a 
          href="#hero" 
          className="text-xl font-bold text-foreground opacity-95"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          <span className="text-cyber-blue">Secure</span>Portfolio
        </a>
        
        <div className="hidden md:flex items-center space-x-1">
          <a 
            href="#about" 
            className={cn(
              "nav-link relative",
              activeSection === "about" && "text-cyber-blue font-medium"
            )}
            onClick={(e) => handleNavClick(e, "about")}
          >
            About
            {activeSection === "about" && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-cyber-blue rounded-full" />
            )}
          </a>
          <a 
            href="#skills" 
            className={cn(
              "nav-link relative",
              activeSection === "skills" && "text-cyber-blue font-medium"
            )}
            onClick={(e) => handleNavClick(e, "skills")}
          >
            Skills
            {activeSection === "skills" && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-cyber-blue rounded-full" />
            )}
          </a>
          <a 
            href="#projects" 
            className={cn(
              "nav-link relative",
              activeSection === "projects" && "text-cyber-blue font-medium"
            )}
            onClick={(e) => handleNavClick(e, "projects")}
          >
            Projects
            {activeSection === "projects" && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-cyber-blue rounded-full" />
            )}
          </a>
          <a 
            href="#contact" 
            className={cn(
              "nav-link relative",
              activeSection === "contact" && "text-cyber-blue font-medium"
            )}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
            {activeSection === "contact" && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-cyber-blue rounded-full" />
            )}
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <a 
            href="#contact" 
            className="hidden md:block px-5 py-2 rounded-lg bg-cyber-blue text-white font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-md"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Get in Touch
          </a>
          
          <button 
            className="md:hidden text-foreground p-1 rounded-md hover:bg-foreground/5"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[60px] z-40 bg-white/95 backdrop-blur-sm md:hidden transition-all duration-300 shadow-lg mobile-menu dark:bg-gray-900/95",
          mobileMenuOpen ? "opacity-100 h-auto" : "opacity-0 h-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center pt-8 pb-12 space-y-6 text-lg font-medium">
          <a 
            href="#about" 
            className={cn(
              "w-full text-center py-3 px-6 hover:bg-foreground/5 hover:text-cyber-blue transition-colors",
              activeSection === "about" && "text-cyber-blue bg-foreground/5"
            )}
            onClick={(e) => handleNavClick(e, "about")}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={cn(
              "w-full text-center py-3 px-6 hover:bg-foreground/5 hover:text-cyber-blue transition-colors",
              activeSection === "skills" && "text-cyber-blue bg-foreground/5"
            )}
            onClick={(e) => handleNavClick(e, "skills")}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className={cn(
              "w-full text-center py-3 px-6 hover:bg-foreground/5 hover:text-cyber-blue transition-colors",
              activeSection === "projects" && "text-cyber-blue bg-foreground/5"
            )}
            onClick={(e) => handleNavClick(e, "projects")}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className={cn(
              "w-full text-center py-3 px-6 hover:bg-foreground/5 hover:text-cyber-blue transition-colors",
              activeSection === "contact" && "text-cyber-blue bg-foreground/5"
            )}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
          <div className="flex items-center justify-center w-full py-3">
            <ThemeToggle />
          </div>
          <a 
            href="#contact" 
            className="mt-4 px-8 py-3 rounded-lg bg-cyber-blue text-white font-medium hover:bg-opacity-90 transition-all w-3/4 text-center hover:shadow-md"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
