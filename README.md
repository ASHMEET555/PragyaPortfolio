# Pragya Singh - Sakura HR Portfolio

Elegant spring-themed Human Resources portfolio built with React.

## Highlights

- Sakura pastel theme with glassmorphism UI cards
- Sticky navbar and smooth section scrolling
- Canvas sakura animation with:
- 25-30 petals in continuous motion
- Rotation and wind drift
- Cursor repulsion
- Click burst particles
- Responsive layout for mobile and laptop
- Contact form with EmailJS integration

## Tech Stack

- React + Vite
- CSS (custom)
- Lucide icons
- EmailJS browser SDK

## Run Locally

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Build production bundle

```bash
npm run build
```

## EmailJS Setup

Create a `.env` file in project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If env vars are not set, the form stays visible but shows a setup message.

## Resume Download

Place your resume at:

- `public/resume.pdf`

The hero and contact buttons download this file.

## Color Palette

- Sakura Pink: `#f8c8dc`
- Light Pink: `#ffdfe8`
- White: `#ffffff`
- Lavender: `#e6d6ff`
- Spring Green Accent: `#cfe8d5`
