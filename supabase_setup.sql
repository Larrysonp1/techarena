-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting for anonymous users (for the contact form)
-- Use DROP POLICY IF EXISTS to remove any existing policy before creating a new one
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contact_messages;
CREATE POLICY "Allow anonymous insert" ON public.contact_messages
    FOR INSERT WITH CHECK (true);

-- Create a policy that only allows the authenticated admin users to view the messages
-- Use DROP POLICY IF EXISTS to remove any existing policy before creating a new one
DROP POLICY IF EXISTS "Allow admin to view messages" ON public.contact_messages;
CREATE POLICY "Allow admin to view messages" ON public.contact_messages
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create a trigger to automatically update the updated_at field
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS contact_messages_updated_at ON public.contact_messages;
-- Create the trigger
CREATE TRIGGER contact_messages_updated_at
BEFORE UPDATE ON public.contact_messages
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Optional: Create a table to store email notifications settings
CREATE TABLE IF NOT EXISTS public.notification_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_email TEXT NOT NULL,
    notify_on_new_message BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.notification_settings ENABLE ROW LEVEL SECURITY;

-- Create a policy that only allows the authenticated admin users to view and edit settings
-- Use DROP POLICY IF EXISTS to remove any existing policy before creating a new one
DROP POLICY IF EXISTS "Allow admin to manage notification settings" ON public.notification_settings;
CREATE POLICY "Allow admin to manage notification settings" ON public.notification_settings
    USING (auth.role() = 'authenticated');

-- Optional: Create a function to send email notifications when a new message is received
CREATE OR REPLACE FUNCTION notify_admin_on_new_message()
RETURNS TRIGGER AS $$
DECLARE
    admin_email TEXT;
BEGIN
    -- Get the admin email from settings
    SELECT ns.admin_email INTO admin_email
    FROM public.notification_settings ns
    WHERE ns.notify_on_new_message = true
    LIMIT 1;

    -- If we have an admin email to notify
    IF admin_email IS NOT NULL THEN
        -- Here you could integrate with Supabase Edge Functions or another service
        -- to actually send the email notification
        -- For demonstration purposes, we'll just log a message
        RAISE NOTICE 'Would send notification to % about new message from %', 
                     admin_email, NEW.name;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS on_new_message_notification ON public.contact_messages;
-- Create a trigger for the notification function
CREATE TRIGGER on_new_message_notification
AFTER INSERT ON public.contact_messages
FOR EACH ROW
EXECUTE FUNCTION notify_admin_on_new_message();

-- Insert an admin email into notification_settings if one doesn't exist
INSERT INTO public.notification_settings (admin_email, notify_on_new_message)
SELECT 'techarena200@gmail.com', true
WHERE NOT EXISTS (SELECT 1 FROM public.notification_settings LIMIT 1);

-- Test that anonymous users can insert into contact_messages
-- This is a special SQL comment that tells Supabase to run this as the anon role
-- Comment this out after testing
-- EXECUTE AS ANONYMOUS;
-- INSERT INTO public.contact_messages (name, email, subject, message)
-- VALUES ('Test User', 'test@example.com', 'Test Subject', 'This is a test message from SQL');
-- REVERT; 