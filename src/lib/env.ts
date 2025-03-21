import logger from './logger';

interface EnvVariables {
  // Add your email service variables here
}

// Define and validate environment variables
export const env: EnvVariables = {
  // Initialize your email service variables here
};

// Validate required environment variables
Object.entries(env).forEach(([key, value]) => {
  if (!value) {
    logger.warn(`Missing environment variable: ${key}`);
  }
}); 