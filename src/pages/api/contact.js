import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Create Supabase client with admin role
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate form data
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Store in Supabase
    const { data: submissionData, error: supabaseError } = await supabaseAdmin
      .from('contact_submissions')
      .insert([
        { name, email, subject, message }
      ])
      .select();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return res.status(500).json({ error: 'Failed to store submission' });
    }

    // Send email via Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Update with your verified domain
      to: process.env.CONTACT_FORM_RECIPIENT || '',
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (emailError) {
      console.error('Email error:', emailError);
      // We still return success as the data was saved to Supabase
      return res.status(200).json({ success: true, warning: 'Saved to database but failed to send email' });
    }

    return res.status(200).json({ success: true, id: submissionData?.[0]?.id });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
} 