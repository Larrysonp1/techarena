import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Add CORS headers for API routes
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Debug logs - will appear in Vercel Function Logs
    console.log("Form submission received:", { name, email });
    console.log("Environment check:", { 
      supabaseUrl: process.env.VITE_SUPABASE_URL ? "exists" : "missing",
      supabaseKey: process.env.VITE_SUPABASE_ANON_KEY ? "exists" : "missing",
      resendKey: process.env.RESEND_API_KEY ? "exists" : "missing"
    });

    // Initialize Supabase client with better error handling
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store contact submission in Supabase
    const { error: supabaseError } = await supabase
      .from('contact_submissions')
      .insert([{ 
        name, 
        email, 
        message, 
        created_at: new Date().toISOString() 
      }]);

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);
      throw new Error(`Supabase error: ${supabaseError.message}`);
    }

    // Send email with Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      throw new Error('Missing Resend API key');
    }
    
    const resend = new Resend(resendApiKey);
    
    // Define your target email (replace with your actual email)
    const targetEmail = "abdallahabdulrawuf100@gmail.com"; // IMPORTANT: Replace this!
    
    const { data, error: resendError } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: targetEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      throw new Error(`Email sending error: ${resendError.message}`);
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });
  } catch (error) {
    console.error('Detailed error processing contact form:', error);
    return res.status(500).json({ 
      error: 'Failed to process contact form submission',
      details: error.message 
    });
  }
} 