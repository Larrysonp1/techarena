# Supabase Setup for Contact Form

This document provides instructions for setting up Supabase to handle the contact form submissions in the TechArena portfolio website.

## Prerequisites

- A Supabase account (sign up at [supabase.com](https://supabase.com))
- Access to the Supabase project dashboard

## Setup Steps

### 1. Create Tables and Functions

1. Log in to your Supabase dashboard
2. Select your project
3. Go to the "SQL Editor" section
4. Create a new query and paste the contents of the `supabase_setup.sql` file
5. Run the query to create the necessary tables, policies, and functions

### 2. Test the Form Submission

After setting up the database tables, you can test the contact form by:

1. Running the application locally
2. Filling out the contact form
3. Submitting the form
4. Checking the "Table Editor" in the Supabase dashboard to verify that the submission was recorded in the `contact_messages` table

### 3. Handling Email Notifications

To set up real-time email notifications when a new contact form is submitted:

#### Option 1: Using Supabase Edge Functions

1. Create a Supabase Edge Function that sends an email
2. Update the `notify_admin_on_new_message()` function in the database to call this Edge Function

#### Option 2: Using Database Webhooks

1. Set up a webhook in the Supabase dashboard under "Database" > "Webhooks"
2. Configure the webhook to trigger on new insertions to the `contact_messages` table
3. Set the webhook to call your email service API

## Security Considerations

- The Row Level Security policies are set up so that:
  - Anonymous users can insert new messages (for the contact form)
  - Only authenticated admin users can view the submitted messages
- Consider adding additional validation rules as needed

## Database Schema

### contact_messages Table

| Column     | Type                 | Description                           |
|------------|----------------------|---------------------------------------|
| id         | UUID                 | Primary key                           |
| name       | TEXT                 | Sender's name                         |
| email      | TEXT                 | Sender's email address                |
| subject    | TEXT                 | Message subject                       |
| message    | TEXT                 | The message content                   |
| status     | TEXT                 | Status (new, read, replied, archived) |
| created_at | TIMESTAMP WITH TZ    | When the message was created          |
| updated_at | TIMESTAMP WITH TZ    | When the message was last updated     |

### notification_settings Table

| Column               | Type              | Description                        |
|----------------------|-------------------|------------------------------------|
| id                   | UUID              | Primary key                        |
| admin_email          | TEXT              | Email to send notifications to     |
| notify_on_new_message| BOOLEAN           | Whether to send notifications      |
| created_at           | TIMESTAMP WITH TZ | When the setting was created       |
| updated_at           | TIMESTAMP WITH TZ | When the setting was last updated  | 