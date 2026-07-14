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

epsu-knust-web/
├── public/                     # Static assets (images, fonts, logos)
│   ├── epsu-logo.png           # EPSU Emblem
│   └── images/
│       ├── leaders/            # Headshots of executives
│       └── hero-bg.jpg         # Hero background image
├── src/
│   ├── app/                    # Next.js Routing
│   │   ├── layout.tsx          # Global layout (Contains Navbar & Footer)
│   │   ├── page.tsx            # Home Page (index)
│   │   ├── about/
│   │   │   └── page.tsx        # About Page (History, Vision, Mission)
│   │   ├── leaders/
│   │   │   └── page.tsx        # Leaders Page (Executive roster)
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact Page (Contact form & location)
│   │   └── birthdays/
│   │       └── page.tsx        # Upcoming Birthdays Finder Page
│   ├── components/             # Reusable React UI Components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── LeaderCard.tsx
│   │   └── BirthdayTracker.tsx
│   ├── lib/                    # SDK initializations
│   │   └── supabase.ts         # Supabase client setup
│   └── utils/                  # Utility functions (date formatting, etc.)
├── tailwind.config.js          # Tailwind styling configurations
├── package.json
└── README.md                   # Setup and documentation