import { createClient } from '@supabase/supabase-js';
import { env } from './env';

const supabaseUrl = env.SUPABASE_URL;
const supabaseAnonKey = env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for contact form
export interface ContactFormData {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
  status?: 'new' | 'read' | 'replied' | 'archived';
}

// Function to submit contact form data to Supabase
export const submitContactForm = async (formData: Omit<ContactFormData, 'id' | 'created_at' | 'status'>) => {
  try {
    // No logging of form data to protect user privacy
    
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ 
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        status: 'new'
        // Let the database handle created_at with the DEFAULT NOW()
      }]);

    if (error) {
      // Log error code and message but not user data
      console.error("Supabase error:", error.code, error.message);
      throw error;
    }
    
    return { success: true };
  } catch (err) {
    // Generic error logging without exposing user data
    console.error("Error in form submission");
    throw err;
  }
};

// Function to subscribe to real-time contact form submissions
// Can be used to show real-time notifications or update admin dashboard
export const subscribeToContactMessages = (
  callback: (payload: { new: ContactFormData; old: ContactFormData | null }) => void
) => {
  const subscription = supabase
    .channel('contact_messages_changes')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'contact_messages',
      },
      (payload) => {
        callback(payload as unknown as { new: ContactFormData; old: ContactFormData | null });
      }
    )
    .subscribe();

  // Return function to unsubscribe
  return () => {
    supabase.removeChannel(subscription);
  };
};