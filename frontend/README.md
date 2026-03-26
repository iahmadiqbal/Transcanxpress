# Transcan Xpress — Official Website

Professional trucking and logistics company website built for **Transcan Xpress**, based in Calgary, Alberta, Canada.

---

## About the Project

Transcan Xpress is a trucking and logistics company providing reliable transportation solutions across Canada. This website serves as the company's official online presence — showcasing services, company information, and providing a way for clients to get in touch.

---

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type-safe development
- **Vite** — Fast build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **React Router DOM** — Client-side routing
- **Lucide React** — Icon library
- **Sonner** — Toast notifications
- **Radix UI** — Accessible UI primitives

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, About overview, Services overview, Why Choose Us, CTA |
| About Us | `/about` | Mission, Purpose, Vision, Experience, Values |
| Services | `/services` | All 10 services with images and full descriptions |
| Contact Us | `/contact` | Contact form + phone, email, address |

---

## Services Covered

1. Full Truckload (FTL)
2. Less Than Truckload (LTL)
3. Local Delivery
4. Long Distance Transport
5. Refrigerated Transport (Cold Chain)
6. Warehousing & Storage
7. Freight Brokerage
8. Last-Mile Delivery
9. Heavy Equipment Transport
10. Express / Expedited Shipping

---

## Features

- Fully responsive — mobile, tablet, desktop
- Smooth scroll to top on every page navigation
- Hero image sections with dot-grid background patterns
- Animated sections on scroll
- Professional dark/light alternating section layout
- Social media links (Facebook, Instagram, X/Twitter)
- Clickable phone, email, and Google Maps address
- Custom TX favicon
- Poppins font throughout

---

## Company Info

- **Company:** Transcan Xpress
- **Phone:** +1 403-542-6082
- **Email:** info@transcanxpress.com
- **Address:** 1212 1st Street SE, Calgary AB, T2G 2H8
- **Facebook:** [transcanxpress](https://www.facebook.com/transcanxpress/)
- **Instagram:** [transcanxpress](https://www.instagram.com/transcanxpress/)
- **X (Twitter):** [@TranscanXpress](https://x.com/TranscanXpress)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── assets/          # Local images (hero, about)
├── components/
│   ├── ui/          # Radix UI based components
│   ├── Header.tsx   # Fixed navigation header
│   ├── Footer.tsx   # Footer with links and contact info
│   ├── AnimatedSection.tsx
│   └── NavLink.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── hooks/
├── lib/
├── App.tsx          # Routes + ScrollToTop
├── main.tsx
└── index.css        # Global styles and Tailwind layers
```

---

© 2025 Transcan Xpress. All rights reserved.
