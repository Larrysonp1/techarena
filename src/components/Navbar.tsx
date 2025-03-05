
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
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
        
        <a 
          href="#contact" 
          className="px-5 py-2 rounded-lg bg-cyber-blue text-white font-medium transition-all duration-300 hover:bg-opacity-90"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
