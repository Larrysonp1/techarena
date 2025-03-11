interface EnvVariables {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
}

// Define and validate environment variables
export const env: EnvVariables = {
  SUPABASE_URL: import.meta.env.NEXT_PUBLIC_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL,
  SUPABASE_ANON_KEY: import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY,
};

// Validate required environment variables
Object.entries(env).forEach(([key, value]) => {
  if (!value) {
    console.warn(`Missing environment variable: ${key}`);
  }
}); 