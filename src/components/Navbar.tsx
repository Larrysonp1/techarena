
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 py-4",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="text-xl font-bold text-foreground opacity-95">
          <span className="text-cyber-blue">Secure</span>Portfolio
        </a>
        
        <div className="hidden md:flex items-center space-x-1">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden md:block px-5 py-2 rounded-lg bg-cyber-blue text-white font-medium transition-all duration-300 hover:bg-opacity-90"
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
          "fixed inset-x-0 top-[60px] z-40 bg-white/95 backdrop-blur-sm md:hidden transition-all duration-300 shadow-lg",
          mobileMenuOpen ? "opacity-100 h-screen" : "opacity-0 h-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center pt-8 pb-12 space-y-6 text-lg font-medium">
          <a 
            href="#about" 
            className="w-full text-center py-3 px-6 text-foreground hover:bg-foreground/5 hover:text-cyber-blue transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="w-full text-center py-3 px-6 text-foreground hover:bg-foreground/5 hover:text-cyber-blue transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="w-full text-center py-3 px-6 text-foreground hover:bg-foreground/5 hover:text-cyber-blue transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="w-full text-center py-3 px-6 text-foreground hover:bg-foreground/5 hover:text-cyber-blue transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="mt-4 px-8 py-3 rounded-lg bg-cyber-blue text-white font-medium hover:bg-opacity-90 transition-all w-3/4 text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
