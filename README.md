# Cybersecurity Portfolio Website

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

4. Update the `.env` file with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
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

## License

This project is licensed under the MIT License - see the LICENSE file for details.
