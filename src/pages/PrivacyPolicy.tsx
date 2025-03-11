import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, FileWarning } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with gradient background */}
      <div className="w-full bg-gradient-to-r from-cyber-blue/90 to-blue-600/90 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">Privacy Policy</h1>
          <p className="text-white/80 mt-4 max-w-2xl">We take your privacy seriously and are committed to protecting your personal information.</p>
        </div>
      </div>
      
      {/* Content with cards for each section */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6">
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
          <p className="text-sm text-muted-foreground mb-3">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-10">
            {/* Introduction Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">1. Introduction</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Welcome to Techarena ("we," "our," or "us"). We respect your privacy and are committed 
                  to protecting your personal information. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you visit our website.
                </p>
              </div>
            </div>
            
            {/* Information Collection Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Database className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">2. Information We Collect</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We may collect information about you in various ways, including:
                </p>
                <div className="space-y-3">
                  <div className="bg-background/50 rounded-lg p-4 border border-border/60">
                    <h3 className="font-medium text-foreground mb-1">Personal Information</h3>
                    <p className="text-sm text-foreground/70">Name, email address, phone number, and other contact details you provide when contacting us.</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 border border-border/60">
                    <h3 className="font-medium text-foreground mb-1">Usage Data</h3>
                    <p className="text-sm text-foreground/70">Information about how you use our website, including your IP address, browser type, pages visited, and time spent on the site.</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 border border-border/60">
                    <h3 className="font-medium text-foreground mb-1">Cookies and Tracking Technologies</h3>
                    <p className="text-sm text-foreground/70">We use cookies and similar tracking technologies to track activity on our website and collect certain information.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Information Usage Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">3. How We Use Your Information</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We may use the information we collect for various purposes, including:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyber-blue"></div>
                    <span>To provide and maintain our website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyber-blue"></div>
                    <span>To improve and personalize your experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyber-blue"></div>
                    <span>To understand how you use our website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyber-blue"></div>
                    <span>To develop new features and functionality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyber-blue"></div>
                    <span>To communicate with you about our services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyber-blue"></div>
                    <span>To prevent fraud and enhance security</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Information Disclosure Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <FileWarning className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">4. Disclosure of Your Information</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <div className="flex flex-col gap-2 text-foreground/70">
                  <p className="pl-4 border-l-2 border-cyber-blue/30">Service providers we use to support our business</p>
                  <p className="pl-4 border-l-2 border-cyber-blue/30">To comply with legal obligations</p>
                  <p className="pl-4 border-l-2 border-cyber-blue/30">To protect and defend our rights and property</p>
                  <p className="pl-4 border-l-2 border-cyber-blue/30">With your consent or at your direction</p>
                </div>
              </div>
            </div>
            
            {/* Your Rights Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <UserCheck className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">5. Your Rights</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4 border border-border/60">
                    <h3 className="font-medium text-foreground mb-1 text-sm">Right to Access</h3>
                    <p className="text-xs text-foreground/70">Request access to your personal information</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border/60">
                    <h3 className="font-medium text-foreground mb-1 text-sm">Right to Rectification</h3>
                    <p className="text-xs text-foreground/70">Request correction of inaccurate information</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border/60">
                    <h3 className="font-medium text-foreground mb-1 text-sm">Right to Erasure</h3>
                    <p className="text-xs text-foreground/70">Request deletion of your information</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border/60">
                    <h3 className="font-medium text-foreground mb-1 text-sm">Right to Object</h3>
                    <p className="text-xs text-foreground/70">Object to the processing of your data</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Lock className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">6. Contact Us</h2>
                <p className="text-foreground/70 leading-relaxed">
                  If you have questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <a 
                  href="mailto:privacy@techarena.com" 
                  className="inline-block mt-4 px-4 py-2 bg-cyber-blue/10 hover:bg-cyber-blue/20 text-cyber-blue rounded-md transition-colors duration-300"
                >
                  privacy@techarena.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 