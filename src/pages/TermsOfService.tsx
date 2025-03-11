import { Link } from "react-router-dom";
import { ArrowLeft, Book, Bookmark, FileText, Scale, Clock, Globe, Mail } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with gradient background */}
      <div className="w-full bg-gradient-to-r from-indigo-600/90 to-cyber-blue/90 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">Terms of Service</h1>
          <p className="text-white/80 mt-4 max-w-2xl">Please read these terms carefully before using our services.</p>
        </div>
      </div>
      
      {/* Content with cards for each section */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6">
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
          <p className="text-sm text-muted-foreground mb-3">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-10">
            {/* Agreement Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Book className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">1. Agreement to Terms</h2>
                <p className="text-foreground/70 leading-relaxed">
                  By accessing or using the Techarena website, you agree to be bound by these Terms of 
                  Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using or accessing this site.
                </p>
              </div>
            </div>
            
            {/* Use License Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Bookmark className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">2. Use License</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Permission is granted to temporarily view the materials on Techarena's website for 
                  personal, non-commercial use only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Modify or copy the materials",
                    "Use the materials for any commercial purpose or for any public display",
                    "Attempt to decompile or reverse engineer any software contained on the website",
                    "Remove any copyright or other proprietary notations from the materials",
                    "Transfer the materials to another person or \"mirror\" the materials on any other server"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-background/50 p-3 rounded-lg border border-border/60">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-cyber-blue/10 text-cyber-blue text-xs font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-foreground/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Disclaimer Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">3. Disclaimer</h2>
                <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900/50 rounded-lg p-4">
                  <p className="text-foreground/70 leading-relaxed">
                    The materials on Techarena's website are provided on an 'as is' basis. Techarena makes no 
                    warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                    including, without limitation, implied warranties or conditions of merchantability, fitness 
                    for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Limitations Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Scale className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">4. Limitations</h2>
                <div className="bg-background border-l-4 border-cyber-blue/70 pl-4 py-3 rounded-r-lg">
                  <p className="text-foreground/70 leading-relaxed">
                    In no event shall Techarena or its suppliers be liable for any damages (including, without 
                    limitation, damages for loss of data or profit, or due to business interruption) arising out 
                    of the use or inability to use the materials on Techarena's website, even if Techarena or 
                    a Techarena authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Revisions Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">5. Revisions and Errata</h2>
                <p className="text-foreground/70 leading-relaxed">
                  The materials appearing on Techarena's website could include technical, typographical, or 
                  photographic errors. Techarena does not warrant that any of the materials on its website 
                  are accurate, complete, or current. Techarena may make changes to the materials contained 
                  on its website at any time without notice.
                </p>
              </div>
            </div>
            
            {/* Governing Law Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Globe className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">6. Governing Law</h2>
                <div className="p-4 bg-cyber-blue/5 rounded-lg border border-cyber-blue/10">
                  <p className="text-foreground/70 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws and 
                    any dispute relating to these terms shall be subject to the exclusive jurisdiction of the courts.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">7. Contact Us</h2>
                <p className="text-foreground/70 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <a 
                  href="mailto:terms@techarena.com" 
                  className="inline-block mt-4 px-4 py-2 bg-cyber-blue/10 hover:bg-cyber-blue/20 text-cyber-blue rounded-md transition-colors duration-300"
                >
                  terms@techarena.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 