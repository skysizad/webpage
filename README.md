# AstraForge Robotics Website

A modern, configurable robotics and technology website built with Next.js, React, Tailwind CSS, Framer Motion, and Lucide Icons.

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Customize Content

Edit `config.js` to change:

- Website name, description, navigation, button links, social links, and footer content
- Logo and favicon paths
- Hero text, hero image, optional hero video, and background images
- About text, statistics, feature cards, project cards, gallery items, team members, testimonials, and contact information

## Customize Colors

Edit `theme.js` to change the full color system:

```js
primary: "#00D5FF",
secondary: "#070A0F",
accent: "#B6FF3B"
```

The values in `theme.js` automatically become CSS variables and Tailwind colors across the site.

## Replace Assets

Keep images in `public/images/` and logos in `public/logo/`.

Recommended swaps:

- `public/logo/logo.svg`
- `public/logo/favicon.svg`
- `public/images/hero-robotics-lab.svg`
- `public/images/background-circuit.svg`
- `public/images/project-*.svg`
- `public/images/team-*.svg`
- `public/images/gallery-*.svg`
- `public/images/testimonial-*.svg`

You can either replace files with the same names or update the paths in `config.js`.
