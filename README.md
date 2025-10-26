# ContentSpark ⚡ - Professional Landing Page

A modern, responsive landing page for ContentSpark content creation agency built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Contact Form**: Integrated with Supabase for lead capture
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Built with Next.js 14 App Router
- **Type Safe**: Full TypeScript support

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/itskiranbabu/contentspark-landing.git
cd contentspark-landing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Create a table named `contact_submissions` with the following schema:

```sql
CREATE TABLE contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Copy your Supabase URL and anon key

### 4. Configure environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
contentspark-landing/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Problem.tsx         # Problem statement
│   ├── Services.tsx        # Services showcase
│   ├── HowItWorks.tsx      # Process explanation
│   ├── Portfolio.tsx       # Case studies
│   ├── Pricing.tsx         # Pricing plans
│   ├── WhyChooseUs.tsx     # Benefits section
│   ├── Testimonials.tsx    # Client testimonials
│   ├── FAQ.tsx             # FAQ section
│   ├── CTA.tsx             # Contact form
│   └── Footer.tsx          # Footer
├── lib/
│   └── supabase.ts         # Supabase client
└── public/                 # Static assets
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: '#0066FF',    // Main brand color
  secondary: '#FF6B35',  // Accent color
  dark: '#0A0E27',       // Dark backgrounds
  light: '#F8F9FA',      // Light backgrounds
}
```

### Content

All content is in the component files. Simply edit the text, images, and data in each component.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📧 Contact Form Setup

The contact form stores submissions in Supabase. Make sure to:

1. Create the `contact_submissions` table (see Setup step 3)
2. Set up email notifications (optional) using Supabase triggers
3. Configure RLS policies if needed

## 📝 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email hello@contentspark.in or open an issue on GitHub.

---

Built with ❤️ by ContentSpark Team