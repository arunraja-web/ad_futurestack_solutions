# PROJECTS_ARCHIVE.md
## AD FutureStack — Projects Page Preservation Archive

**Created:** 2026-09-15  
**Reason:** The `/projects` page is being replaced by a `/careers` page. This file preserves a complete, human-readable record of all project data, SEO metadata, routes, and component disposition decisions so nothing is silently lost.

---

## 1. Routes That Served This Page

| Route | Purpose |
|---|---|
| `/projects` | Primary route |
| `/case-studies` | Alias route (same component) |

Both routes are now redirected to `/careers` (see vercel.json and sitemap.xml changes).

---

## 2. Projects Page SEO Metadata (`src/pages/Projects.jsx`)

| Field | Value |
|---|---|
| `title` | Client Portfolio & Software Case Studies \| AD FutureStack |
| `description` | Browse our portfolio of healthcare portals, athletic SaaS platforms, digital cinema engines, and enterprise web applications. |
| `keywords` | AD FutureStack Projects, Web App Case Studies, Vercel Demos, SaaS Software, Healthcare Management System, E-Commerce Platform |
| `canonicalUrl` | https://adfuturestack.dev/projects |
| `schema[@type]` | ItemList |
| `schema.name` | AD FutureStack Featured Projects |
| `schema.description` | Live software deliverables across healthcare, athletic SaaS, cinematic web applications, and e-commerce. |
| `schema.numberOfItems` | 8 (computed dynamically from projectItems.length) |

---

## 3. The 8 Projects (`projectItems` array in `src/pages/Projects.jsx`)

### Project 1 — Saviours Clinic

| Field | Value |
|---|---|
| `id` | saviours-clinic |
| `tag` | Healthcare & Medical |
| `title` | Saviours Clinic Management System |
| `description` | End-to-end healthcare platform with patient portal login, online appointments, and electronic health records. |
| `bullets[0]` | Online doctor appointment booking & real-time scheduling |
| `bullets[1]` | HIPAA-compliant EHR with secure patient access |
| `stat` | 99.9% |
| `statLabel` | Uptime SLA |
| `liveUrl` | https://clinic-management-system-iota-five.vercel.app/ |
| `bgImage` | /images/projects/saviours-clinic.webp |
| `fallbackImage` | /images/projects/saviours-clinic.jpg |

---

### Project 2 — Gymnex Premium

| Field | Value |
|---|---|
| `id` | gymnex-premium |
| `tag` | Fitness & SaaS |
| `title` | Gymnex Premium Athletic Platform |
| `description` | Enterprise fitness SaaS for modern athletic clubs — memberships, trainer booking, and multi-branch management in one. |
| `bullets[0]` | Club membership management & subscription billing |
| `bullets[1]` | Personal trainer booking & attendance tracking |
| `stat` | 4.9★ |
| `statLabel` | Member Rating |
| `liveUrl` | https://gymnex-premium.vercel.app/ |
| `bgImage` | /images/projects/gymnex-premium.webp |
| `fallbackImage` | /images/projects/gymnex-premium.jpg |

---

### Project 3 — Gymnex Site

| Field | Value |
|---|---|
| `id` | gymnex-site |
| `tag` | Fitness & Web App |
| `title` | Gymnex Fitness & Member Portal |
| `description` | Dark-themed fitness club portal with interactive schedules, trainer profiles, membership tiers, and multi-branch exploration. |
| `bullets[0]` | Workout program catalog & trainer showcase |
| `bullets[1]` | Multi-location branch explorer with class schedules |
| `stat` | 100% |
| `statLabel` | Responsive UI |
| `liveUrl` | https://gymnex-site-bqqa.vercel.app/ |
| `bgImage` | /images/projects/gymnex-site.webp |
| `fallbackImage` | /images/projects/gymnex-site.jpg |

---

### Project 4 — Aura Studio

| Field | Value |
|---|---|
| `id` | aura-studio |
| `tag` | Media & Creative Studio |
| `title` | Aura Cinematic Wedding Studio |
| `description` | Luxury cinema and photography studio portal with cinematic showcases, package booking engine, and admin scheduling. |
| `bullets[0]` | Cinematic video gallery & high-res film showcase |
| `bullets[1]` | Wedding package selector & instant date booking engine |
| `stat` | 60fps |
| `statLabel` | Cinema UI |
| `liveUrl` | https://aura-studio-psi-lac.vercel.app/ |
| `bgImage` | /images/projects/aura-studio.webp |
| `fallbackImage` | /images/projects/aura-studio.jpg |

---

### Project 5 — Glowora

| Field | Value |
|---|---|
| `id` | glowora |
| `tag` | E-Commerce & Marketplace |
| `title` | Glowora Beauty & Salon Marketplace |
| `description` | Luxury beauty marketplace for booking verified salons & spas, with professional skincare e-commerce and real-time slot availability. |
| `bullets[0]` | Salon/spa bookings & e-commerce in one platform |
| `bullets[1]` | Real-time slot availability & payment gateway integration |
| `stat` | 2.4x |
| `statLabel` | Faster Booking |
| `liveUrl` | https://glowora-fds5-smoky.vercel.app/ |
| `bgImage` | /images/projects/glowora.webp |
| `fallbackImage` | /images/projects/glowora.jpg |

---

### Project 6 — Vastram Textile

| Field | Value |
|---|---|
| `id` | vastram-textile |
| `tag` | Textiles & E-Commerce |
| `title` | Vastram Luxury Indian Textiles & Handlooms |
| `description` | Premium e-commerce portal for luxury silk sarees and artisan handlooms, with curated catalogs and custom fabric inquiry workflows. |
| `bullets[0]` | Curated silk saree & handloom fabric digital catalog |
| `bullets[1]` | Interactive fabric inquiry & ordering workflow |
| `stat` | 100% |
| `statLabel` | Pure Handloom |
| `liveUrl` | https://textile-site-ten.vercel.app/ |
| `bgImage` | /images/projects/textile-site.webp |
| `fallbackImage` | /images/projects/textile-site.jpg |

---

### Project 7 — Angadix Marketplace

| Field | Value |
|---|---|
| `id` | angadix-marketplace |
| `tag` | E-Commerce & Retail Platform |
| `title` | Angadix Multi-Category Retail Platform |
| `description` | High-performance multi-category retail platform built for fast browsing, smart cart management, and seamless checkout at scale. |
| `bullets[0]` | Multi-category catalog with instant search & filter indexing |
| `bullets[1]` | High-conversion checkout with payment gateway integration |
| `stat` | 50K+ |
| `statLabel` | Catalog Items |
| `liveUrl` | https://angadix.vercel.app/ |
| `bgImage` | /images/projects/angadix.webp |
| `fallbackImage` | /images/projects/angadix.jpg |

---

### Project 8 — BookVerse Studio

| Field | Value |
|---|---|
| `id` | bookverse-studio |
| `tag` | Publishing & Digital Media |
| `title` | BookVerse Studio Curated Imprint Platform |
| `description` | Digital publishing ecosystem connecting authors, publishers, and readers through curated catalogs, author portals, and instant search. |
| `bullets[0]` | Curated book catalog with keyboard-shortcut search |
| `bullets[1]` | Author profiles & independent publisher imprint portals |
| `stat` | 10K+ |
| `statLabel` | Active Readers |
| `liveUrl` | https://book-website-theta-five.vercel.app/ |
| `bgImage` | /images/projects/book-verse.webp |
| `fallbackImage` | /images/projects/book-verse.jpg |

---

## 4. Legacy Data Source: `src/data/projects.js`

This is a **second, separate data file** that was present in the codebase. It contains 3 projects in a different schema (id, title, category, description, image, tags, stats). 

> **USAGE STATUS: UNUSED / LEGACY** — Confirmed via grep search across all src/ files: `src/data/projects.js` is **not imported or referenced anywhere** in the application code. It appears to be legacy or placeholder data that was never wired into the UI.

The file has NOT been deleted. It remains at `src/data/projects.js` for historical reference.

### Legacy Project A — PulsePay

| Field | Value |
|---|---|
| `id` | fintech-core |
| `title` | PulsePay Financial Platform |
| `category` | FinTech / SaaS |
| `description` | Next-gen payment processing infrastructure handling over $40M daily volume with zero downtime. |
| `image` | /images/solutions/fintech-platform.webp |
| `tags` | React, Node.js, PostgreSQL, Stripe, AWS |
| `stats` | 99.999% Uptime |

### Legacy Project B — Aura Health

| Field | Value |
|---|---|
| `id` | ai-health |
| `title` | Aura Health Diagnostic Assistant |
| `category` | Healthcare / AI |
| `description` | AI-driven diagnostic workflow tool analyzing clinical records and accelerating patient triage. |
| `image` | /images/projects/healthcare-system.webp |
| `tags` | Python, FastAPI, PyTorch, Next.js, Tailwind |
| `stats` | 4x Faster Triage |

### Legacy Project C — Apex Logistics

| Field | Value |
|---|---|
| `id` | supply-chain |
| `title` | Apex Global Logistics Engine |
| `category` | Logistics / Cloud |
| `description` | Real-time telemetry and supply chain visualization monitoring across 12 maritime trade corridors. |
| `image` | /images/projects/logistics-engine.webp |
| `tags` | React, Go, Docker, Kubernetes, WebSockets |
| `stats` | 2.5M Daily Events |

---

## 5. Video Asset

| Item | Detail |
|---|---|
| **File path** | `/videos/project-cta.mp4` |
| **Original location in code** | `videoSrc` prop default value in `src/components/projects/ProjectsFinalCTA.jsx` |
| **How it was used** | Rendered in a `<video>` element with a `<source src={videoSrc} type="video/mp4" />` child; plays on scroll via IntersectionObserver, freezes on last frame via `handleVideoEnded` |
| **Action taken** | **The file has NOT been moved, re-encoded, renamed, or deleted.** It is reused as-is on the new Careers page via the same `ProjectsFinalCTA.jsx` component, passing new title/description/buttonText/buttonLink props while `videoSrc` continues to point to `/videos/project-cta.mp4`. |

---

## 6. Component File Disposition

| Component File | Was Used By | Decision | Reason |
|---|---|---|---|
| `src/components/projects/ProjectsFinalCTA.jsx` | Projects.jsx | **KEPT — actively imported by Careers.jsx** | Contains the video player with IntersectionObserver play/pause logic and handleVideoEnded freeze behavior. Reused directly. |
| `src/styles/projects-showcase.css` | Projects.jsx, ProjectsFinalCTA.jsx | **KEPT** | Contains `.pfcta-*` CSS classes required by ProjectsFinalCTA.jsx which is now used on Careers.jsx |
| `src/components/projects/ProjectRow.jsx` | Projects.jsx only | **KEPT in place, unrouted** | Confirmed no imports elsewhere. Left for historical reference. |
| `src/components/projects/ProjectScene.jsx` | Projects.jsx only | **KEPT in place, unrouted** | Confirmed no imports elsewhere. Left for historical reference. |
| `src/components/projects/BrowserMockup.jsx` | ProjectScene.jsx only | **KEPT in place, unrouted** | Used by ProjectScene which is kept. |
| `src/components/projects/StatCounterBadge.jsx` | BrowserMockup.jsx only | **KEPT in place, unrouted** | Used by BrowserMockup which is kept. |
| `src/components/projects/MagneticButton.jsx` | BrowserMockup.jsx only | **KEPT in place, unrouted** | Used by BrowserMockup which is kept. |
| `src/pages/Projects.jsx` | App.jsx routing | **DELETED** | Removed from routing in App.jsx and file deleted. All data is preserved in this archive. |

---

## 7. JSON-LD Schema (preserved verbatim)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AD FutureStack Featured Projects",
  "description": "Live software deliverables across healthcare, athletic SaaS, cinematic web applications, and e-commerce.",
  "numberOfItems": 8,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "CreativeWork", "name": "Saviours Clinic Management System", "description": "End-to-end healthcare platform with patient portal login, online appointments, and electronic health records.", "url": "https://clinic-management-system-iota-five.vercel.app/" } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "CreativeWork", "name": "Gymnex Premium Athletic Platform", "description": "Enterprise fitness SaaS for modern athletic clubs — memberships, trainer booking, and multi-branch management in one.", "url": "https://gymnex-premium.vercel.app/" } },
    { "@type": "ListItem", "position": 3, "item": { "@type": "CreativeWork", "name": "Gymnex Fitness & Member Portal", "description": "Dark-themed fitness club portal with interactive schedules, trainer profiles, membership tiers, and multi-branch exploration.", "url": "https://gymnex-site-bqqa.vercel.app/" } },
    { "@type": "ListItem", "position": 4, "item": { "@type": "CreativeWork", "name": "Aura Cinematic Wedding Studio", "description": "Luxury cinema and photography studio portal with cinematic showcases, package booking engine, and admin scheduling.", "url": "https://aura-studio-psi-lac.vercel.app/" } },
    { "@type": "ListItem", "position": 5, "item": { "@type": "CreativeWork", "name": "Glowora Beauty & Salon Marketplace", "description": "Luxury beauty marketplace for booking verified salons & spas, with professional skincare e-commerce and real-time slot availability.", "url": "https://glowora-fds5-smoky.vercel.app/" } },
    { "@type": "ListItem", "position": 6, "item": { "@type": "CreativeWork", "name": "Vastram Luxury Indian Textiles & Handlooms", "description": "Premium e-commerce portal for luxury silk sarees and artisan handlooms, with curated catalogs and custom fabric inquiry workflows.", "url": "https://textile-site-ten.vercel.app/" } },
    { "@type": "ListItem", "position": 7, "item": { "@type": "CreativeWork", "name": "Angadix Multi-Category Retail Platform", "description": "High-performance multi-category retail platform built for fast browsing, smart cart management, and seamless checkout at scale.", "url": "https://angadix.vercel.app/" } },
    { "@type": "ListItem", "position": 8, "item": { "@type": "CreativeWork", "name": "BookVerse Studio Curated Imprint Platform", "description": "Digital publishing ecosystem connecting authors, publishers, and readers through curated catalogs, author portals, and instant search.", "url": "https://book-website-theta-five.vercel.app/" } }
  ]
}
```

---

*End of PROJECTS_ARCHIVE.md*
