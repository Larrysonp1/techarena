import { Link } from "react-router-dom";
import { ArrowLeft, Cookie, Settings, BarChart3, Layers, Wrench, Zap, Mail } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with gradient background */}
      <div className="w-full bg-gradient-to-r from-purple-600/90 to-indigo-600/90 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">Cookie Policy</h1>
          <p className="text-white/80 mt-4 max-w-2xl">Learn how we use cookies and similar technologies on our website.</p>
        </div>
      </div>
      
      {/* Content with cards for each section */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6">
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
          <p className="text-sm text-muted-foreground mb-3">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-10">
            {/* What Are Cookies Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Cookie className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">1. What Are Cookies</h2>
                <div className="bg-gradient-to-r from-background to-card p-5 rounded-lg border border-border/60">
                  <p className="text-foreground/70 leading-relaxed">
                    Cookies are small text files that are placed on your computer or mobile device when you 
                    visit a website. They are widely used to make websites work more efficiently and provide 
                    information to the owners of the site. Cookies can be "persistent" or "session" cookies.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-background p-3 rounded-lg border border-border/60">
                      <h3 className="text-sm font-medium mb-1">Persistent Cookies</h3>
                      <p className="text-xs text-foreground/70">Remain on your device after you close your browser</p>
                    </div>
                    <div className="bg-background p-3 rounded-lg border border-border/60">
                      <h3 className="text-sm font-medium mb-1">Session Cookies</h3>
                      <p className="text-xs text-foreground/70">Deleted when you close your browser</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* How We Use Cookies Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Settings className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">2. How We Use Cookies</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We use cookies for several purposes, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-start">
                    <div className="bg-cyber-blue/10 p-2 rounded-lg">
                      <div className="w-4 h-4 rounded-full bg-cyber-blue"></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Essential Cookies</h3>
                      <p className="text-sm text-foreground/70">These cookies are necessary for the website to function properly.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-cyber-blue/10 p-2 rounded-lg">
                      <div className="w-4 h-4 rounded-full bg-cyber-blue"></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Performance Cookies</h3>
                      <p className="text-sm text-foreground/70">These cookies help us understand how visitors interact with our website.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-cyber-blue/10 p-2 rounded-lg">
                      <div className="w-4 h-4 rounded-full bg-cyber-blue"></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Functionality Cookies</h3>
                      <p className="text-sm text-foreground/70">These cookies allow the website to remember choices you make and provide enhanced features.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-cyber-blue/10 p-2 rounded-lg">
                      <div className="w-4 h-4 rounded-full bg-cyber-blue"></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Targeting Cookies</h3>
                      <p className="text-sm text-foreground/70">These cookies record your visit to our website, the pages you have visited, and the links you have followed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Types of Cookies Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Layers className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">3. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-cyber-blue/40">
                    <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 rounded-full bg-cyber-blue"></div>
                    <h3 className="font-medium text-foreground mb-2">Essential Cookies</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      These cookies are necessary for the website to function and cannot be switched off in our systems. 
                      They are usually only set in response to actions made by you which amount to a request for services, 
                      such as setting your privacy preferences, logging in, or filling in forms.
                    </p>
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-cyber-blue/40">
                    <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 rounded-full bg-cyber-blue"></div>
                    <h3 className="font-medium text-foreground mb-2">Performance Cookies</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the 
                      performance of our site. They help us know which pages are the most and least popular and see 
                      how visitors move around the site.
                    </p>
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-cyber-blue/40">
                    <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 rounded-full bg-cyber-blue"></div>
                    <h3 className="font-medium text-foreground mb-2">Functionality Cookies</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      These cookies enable the website to provide enhanced functionality and personalization. 
                      They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-cyber-blue/40">
                    <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 rounded-full bg-cyber-blue"></div>
                    <h3 className="font-medium text-foreground mb-2">Targeting Cookies</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      These cookies may be set through our site by our advertising partners. They may be used by 
                      those companies to build a profile of your interests and show you relevant advertisements on other sites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Managing Cookies Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Wrench className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">4. Managing Cookies</h2>
                <div className="p-5 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                  <p className="text-foreground/70 leading-relaxed">
                    Most web browsers allow you to manage your cookie preferences. You can set your browser to 
                    refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary 
                    from browser to browser, and from version to version.
                  </p>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Chrome", "Firefox", "Safari", "Edge"].map((browser) => (
                      <div key={browser} className="bg-white dark:bg-background p-2 rounded text-center text-sm font-medium text-foreground/80">
                        {browser}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-cyber-blue/10 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-cyber-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-foreground/90">5. Contact Us</h2>
                <p className="text-foreground/70 leading-relaxed">
                  If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy; 