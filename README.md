# SS TAXY

A vanilla HTML/CSS/JS taxi-service website — no build step, no dependencies. Open `index.html` in a browser or deploy straight to Vercel.

## Structure

```
ss-taxy/
├── index.html          Homepage — hero, booking widget, fleet, routes, services, FAQ, testimonials
├── about-us.html        About page
├── contact-us.html      Contact page with WhatsApp-prefilled form
├── privacy-policy.html
├── terms-conditions.html
├── refund-policy.html
├── css/
│   └── style.css        All styles (design tokens at the top as CSS custom properties)
├── js/
│   ├── config.js         ⭐ Single source of truth for phone, email, address, fleet, rates, routes, FAQ, testimonials
│   └── script.js          Renders CONFIG into the page + handles nav, FAQ accordion, booking form, scroll reveal
└── vercel.json
```

## Before you go live — edit `js/config.js`

Every real business detail lives in one file. Open `js/config.js` and replace the placeholder values:

- `contact.phoneDisplay` / `contact.phoneRaw` — real SS TAXY number (raw = country code + number, no symbols, used for `tel:` and WhatsApp links)
- `contact.email`
- `contact.address`
- `fleet`, `routes`, `services`, `faqs`, `testimonials` — swap in real vehicles, routes, and rates

The header phone number also appears as a static fallback in each HTML file's `<a href="tel:+919058712345">` — `script.js` overwrites it at runtime from config, but update the HTML too if you ever load a page with JS disabled.

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths behave exactly like production:
  ```
  npx serve .
  ```

## Deploying

### GitHub
```
git init
git add .
git commit -m "Initial SS TAXY site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Vercel
1. Import the GitHub repo at vercel.com/new
2. Framework preset: **Other** (no build command, no output directory needed — it's static)
3. Deploy

No environment variables are required.

## Notes

- WhatsApp booking links use the `wa.me` deep-link format and pull the phone number from `config.js` — same pattern as your other client projects.
- Route "ticket" cards and fare displays use a monospace face (JetBrains Mono) intentionally, styled like a meter readout.
- Legal pages (`privacy-policy.html`, `terms-conditions.html`, `refund-policy.html`) contain placeholder text marked clearly in italics — have these reviewed before launch.
