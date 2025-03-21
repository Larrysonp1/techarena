# TechArena Website

A modern, responsive portfolio website for cybersecurity professionals built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design for all devices
- Dark/light mode toggle
- Smooth scrolling and animations
- Sections for showcasing skills, projects, and experience
- Contact form with validation
- SEO optimized

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Lucide Icons
- React Hook Form

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

> **Note:** This project uses npm as the preferred package manager. Using other package managers may lead to dependency conflicts.

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/cybersecurity-portfolio.git
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory based on `.env.example`
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your email service credentials:

```
# Add your email service API key when implementing
```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:8080](http://localhost:8080) in your browser

## Deployment

This site can be easily deployed to GitHub Pages, Vercel, or Netlify.

## Deployment on Vercel

This project is configured for deployment on Vercel with serverless functions for the API. To deploy:

1. Fork or clone this repository to your GitHub account
2. Connect your GitHub repository to Vercel
3. Set up the following environment variables in your Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
   - `RESEND_API_KEY` - Your Resend API key for sending emails
   - `CONTACT_FORM_RECIPIENT` - Email address to receive contact form submissions

The deployment will automatically use the Vercel serverless functions for API routes, including the contact form submission handling.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
