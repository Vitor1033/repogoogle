# European Era - Project Handover & Documentation

This document provides a technical overview of the "European Era" project, guidelines for maintenance, and instructions to ensure continuity.

## 🛠 Tech Stack
- **Frontend Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (configured in `src/index.css`)
- **Routing:** React Router v7 (`react-router-dom`)
- **Icons:** Lucide React
- **Animations:** Motion React (Framer Motion)

## 📁 Key File Structure
- `src/pages/`: Contains all the page components (Home, About, Opportunities, Contact, etc.).
- `src/components/ui/`: Contains reusable generic UI elements (Buttons, Cards).
- `src/components/layout/`: Contains the global layout wrapper, Navbar, and Footer.
- `src/data/cms.ts`: **Centralized Content Management File**.
- `index.html`: Contains SEO metadata and Analytics tracking codes.

---

## 🖼 How to Change or Add Your Own Images

You can add custom images via two main approaches:

### Approach A: Public Folder (Recommended)
1. Upload your image files (e.g., `my-team.jpg`) directly into the `public/` directory via your file manager.
2. In your code, you can reference the image directly starting from the root path:
   ```html
   <img src="/my-team.jpg" alt="Our Team" />
   ```

### Approach B: Assets Folder (Bundled)
1. Upload images into a `src/assets/` folder.
2. Inside your `.tsx` file, import the image:
   ```tsx
   import TeamImage from '../assets/my-team.jpg';
   // ...
   <img src={TeamImage} alt="Our Team" />
   ```

*(Currently, the project uses high-quality Unsplash placeholders via direct URLs `https://...` for immediate visual impact. You can replace these URLs with your local paths anytime).*

---

## 📝 CMS & Content Updates

To make updating the site easier for non-developers, the dynamic content has been separated out into **`src/data/cms.ts`**. 

If you want to add a new Blog Post, a new Internship Opportunity, or edit existing ones:
1. Open `src/data/cms.ts`.
2. Locate the relevant array (e.g., `OPPORTUNITIES`, `BLOG_POSTS`).
3. Add a new object following the existing structure. It will instantly appear on the website and inherit all responsive styles and card designs.

---

## 🚀 Tasks Completed against the PDF Plan

✅ **Week 1-3 (Design & Dev):** Sitemap, Wireframes, Figma visual style, and the core site are fully implemented.
✅ **Week 5 (SEO Optimization):** `index.html` has been updated with `<title>`, meta `<description>`, keywords, and `og:image` tags.
✅ **Week 5 (Contact Form Setup):** Forms in `/contact` and `/apply` now have functional UI state (simulation of submission/success). Ready to attach to an API endpoint (e.g. Formspree or custom CRM) within the `handleSubmit` function.
✅ **Week 5 (CMS/Content):** Abstracted `cms.ts` acts as the headless dataset.
✅ **Week 6 (Performance):** Images utilize `loading="lazy"` where applicable and are served optimally.
✅ **Week 6 (Analytics):** Google Analytics / Meta pixel script placeholders have been added into the `<head>` of `index.html`.
✅ **Final Week (Documentation):** This document serves as the Technical Handover!

## 🧪 Next Steps & Maintenance
1. **Forms API:** Update `handleSubmit` in `Contact.tsx` and `Apply.tsx` to POST the payload to your backend.
2. **Analytics IDs:** Replace `G-XXXXXXXXXX` in `index.html` with your actual Google Analytics 4 Measurement ID.
3. **Domain:** Point your DNS records to the hosting platform when you are ready to go live.
