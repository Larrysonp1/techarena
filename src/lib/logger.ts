/**
 * A simple logger utility that can be configured to disable logs in production
 */

const isProd = import.meta.env.PROD;

// Enable this for debugging in production if needed
const forceLogging = false;

const logger = {
  info: (message: string, ...args: any[]) => {
    if (!isProd || forceLogging) {
      console.info(`[INFO] ${message}`, ...args);
    }
  },
  
  warn: (message: string, ...args: any[]) => {
    if (!isProd || forceLogging) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  },
  
  error: (message: string, ...args: any[]) => {
    // Always log errors - they are important
    console.error(`[ERROR] ${message}`, ...args);
    
    // In a production app, you might want to send this to a monitoring service
    // like Sentry or LogRocket instead of just logging to the console
  },
  
  // For development only
  debug: (message: string, ...args: any[]) => {
    if (!isProd) {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  }
};

export default logger; 