# Vishnu Malkapuram's Portfolio — Design Documentation

A clear and simplified summary of the design system applied for this portfolio project. The design communicates a minimalistic, dark developer aesthetic through the use of colours, typography, components, and layout.

---

## 1. Color Palette

A dark monochrome base with a single purple accent color is used consistently throughout the portfolio. This creates a focused, modern look without visual clutter.

| Role | Color | Hex |
|---|---|---|
| Page Background | Near black | `#0d0d0d` |
| Card / Section Background | Dark grey | `#111111` |
| Chip / Tag Background | Dark charcoal | `#161616` |
| Primary Text (headings) | Warm off-white | `#f0ede6` |
| Secondary Text (body) | Light grey | `#e8e6e0` |
| Muted Text (descriptions) | Medium grey | `#666666` |
| Accent / Highlight Color | Soft purple | `#7C6FCD` |
| Accent Background (tags) | Deep purple tint | `#1a1730` |
| Border Color (default) | Subtle dark | `#222222` |
| Border Color (hover) | Purple | `#7C6FCD` |

---

## 2. Typography

Two typefaces are used, each serving a distinct role.

- **Body & Headings:** `Space Grotesk` (weights: 300, 400, 500, 600)
  - Used for all readable content — name, descriptions, bullet points, and section content.
  - Chosen for its clean, geometric quality that feels technical but approachable.

- **Labels, Tags & Code-style Text:** `Space Mono` (weights: 400, 700)
  - Used for section labels, skill chips, dates, contact links, and the `// portfolio` tag.
  - Gives the portfolio a developer/terminal aesthetic without being overdesigned.

Both fonts are loaded via Google Fonts.

---

## 3. Icons

Icons are sourced from the **Tabler Icons** webfont library, loaded via CDN:

```
https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css
```

Icons used: `ti-mail`, `ti-phone`, `ti-brand-linkedin`, `ti-brand-github`, `ti-world`

---

## 4. Components & Layout

### Overall Layout
- Single-column, centered layout with a `max-width` of `860px`.
- All sections share consistent horizontal padding of `2rem`.
- Sections are stacked vertically with a `padding-top` of `2.5rem` between them.

---

### Hero Section
- **Design:** Full-width top section with the name displayed in a large, responsive heading using `clamp(2rem, 5vw, 3.2rem)`. The first name appears in off-white and the last name in the purple accent color. A small `// portfolio` label in monospace sits above the name as a developer-style tag. Contact links are arranged horizontally in a flex row below the subtitle.
- **Border:** A 0.5px bottom border in `#2a2a2a` separates the hero from the rest of the page.

---

### Section Labels
- **Design:** Each section is introduced by a small all-caps monospace label in `#555`. A thin horizontal line extends from the label to the right edge, acting as a visual divider. This keeps the layout clean while clearly separating content areas.

---

### Skills
- **Design:** A responsive CSS grid of skill chips. Each chip has a dark background (`#161616`), a subtle border, and monospace text. On hover, the border and text shift to the purple accent color, providing subtle interactivity.

---

### Projects
- **Design:** A responsive two-column card grid. Each card has a dark background (`#111`), a thin border, and a hover effect that highlights the border in purple. Cards contain a title, a short description, and a row of technology tags styled in purple on a deep purple tint background.

---

### Experience
- **Design:** A vertical timeline layout using a left border line in `#222`. Each entry has a small purple dot on the left border to mark the position. Roles are displayed with a title, date (right-aligned in monospace), company name in purple, and bullet points using an em dash (`—`) as a custom list marker.

---

### Education
- **Design:** A single card row with the degree name and institution on the left, and a GPA badge on the right. The badge uses the purple accent color on a deep purple tint background, consistent with the tag styling.

---

### Certifications
- **Design:** A stacked list of certification cards, each showing the certificate name, issuing organization, and date. Matches the card styling used in the education section for visual consistency.

---

### Footer
- **Design:** A centered footer with a thin top border. Displays an availability status on the left (with an animated pulsing purple dot) and a copyright notice on the right. Both use the monospace font in a muted grey color.

---

## 5. Interactions & Animation

- **Hover effects:** Skill chips, project cards, and navigation links all respond to hover with a purple border or color transition (`transition: 0.2s`).
- **Pulsing dot:** The availability dot in the footer pulses using a CSS `@keyframes` animation that cycles opacity between `1` and `0.3` over 2.5 seconds.

---

## 6. Responsiveness

The layout is fully responsive using:
- `clamp()` for fluid font sizing on the hero heading.
- CSS Grid with `auto-fit` and `minmax()` for skills and project cards.
- `flex-wrap` on contact links and experience meta rows.
- A `@media (max-width: 600px)` breakpoint that reduces font sizes and stacks flex items vertically.


---

## Conclusion

This design documentation outlines the key decisions made for the portfolio. The system uses a dark monochrome base with a consistent purple accent to create a clean, developer-oriented aesthetic. Typography choices between Space Grotesk and Space Mono establish a clear visual hierarchy between readable content and technical labels. The single-file structure keeps the portfolio lightweight and easy to host anywhere.
