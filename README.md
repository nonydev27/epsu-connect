# EPSU-KNUST Web Application

The official website for the Evangelical Presbyterian Students' Union, KNUST Local.

## Tech Stack
- **Framework:** Next.js (React Web)
- **Styling:** Tailwind CSS
- **Database:** Supabase (Postgres)
- **Deployment:** Vercel

## Getting Started

1. Clone the repository and install dependencies:
   ```bash
   npm install

2. Create an environment variable and add your credentials
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


## FOLDER STRUCTURE:

epsu-connect/
├── public/                 # Logos, images (EPSU logo, banner)
├── src/
│   ├── assets/             # SVGs or other local design files
│   ├── components/         # Reusable layout elements
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LeaderCard.jsx
│   │   └── BirthdayCard.jsx
│   ├── pages/              # Your actual pages (Vite Router routes)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Leaders.jsx
│   │   ├── Contact.jsx
│   │   └── Birthdays.jsx
│   ├── services/           # Supabase connection
│   │   └── supabase.js
│   ├── App.jsx             # Router definition
│   ├── index.css           # Global Tailwind/CSS styles
│   └── main.jsx            # React entry point
├── package.json
└── vite.config.js