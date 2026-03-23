[README.txt](https://github.com/user-attachments/files/26172631/README.txt)
# ⚔ CHRONICLES OF WAR
### A History Website

---

## OVERVIEW

Chronicles of War is a visually stunning, fully self-contained history website covering 24 major wars from the Seven Years' War (1756) to the Russia-Ukraine War (2022+). It features animated backgrounds, a custom gold cursor, floating particles, parallax scrolling, and rich satirical storytelling in the style of the OverSimplified YouTube channel — with the aesthetic of harrypotter.com.

---

## HOW TO RUN

**Option 1 — Double click:**
Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

**Option 2 — VS Code Live Server (recommended):**
1. Open the project folder in VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

No build steps, no npm install, no server required. Pure HTML/CSS/JavaScript.

---

## FILE STRUCTURE

```
warhistory/
├── index.html                    ← Main landing page
├── css/
│   ├── main.css                  ← Global styles (nav, story pages, footer)
│   └── landing.css               ← Landing-specific styles (hero, era cards, timeline)
├── js/
│   ├── main.js                   ← Wars data, quote rotator, scroll effects
│   ├── particles.js              ← Floating ember/particle animation
│   ├── cursor.js                 ← Custom gold cursor
│   ├── timeline.js               ← Horizontal drag-scroll timeline
│   └── war-stories.js            ← (Legacy) inline war story content
└── pages/
    ├── all-wars.html             ← Full grid of all 24 wars with era filters
    ├── war-template.html         ← Dynamic template (reads ?war= URL param)
    │
    ├── ERA PAGES (7):
    ├── era-early-modern.html     ← 1700-1815: Seven Years' War through Napoleon
    ├── era-19th-century.html     ← 1815-1900: Crimea through Franco-Prussian
    ├── era-ww1.html              ← 1914-1918: World War I
    ├── era-interwar.html         ← 1917-1939: Revolution through Spanish Civil War
    ├── era-ww2.html              ← 1939-1945: World War II
    ├── era-cold-war.html         ← 1950-1991: Korea through Soviet-Afghan
    ├── era-post-cold-war.html    ← 1990-2011: Gulf War through Iraq War
    ├── era-modern.html           ← 2011+: Syria and Ukraine
    │
    └── WAR PAGES (24):
        ├── war-seven-years.html
        ├── war-american-revolution.html
        ├── war-french-revolution.html
        ├── war-napoleonic.html
        ├── war-crimean.html
        ├── war-american-civil.html
        ├── war-opium.html
        ├── war-franco-prussian.html
        ├── war-ww1.html
        ├── war-russian-revolution.html
        ├── war-russian-civil.html
        ├── war-spanish-civil.html
        ├── war-chinese-civil.html
        ├── war-ww2.html
        ├── war-korean.html
        ├── war-vietnam.html
        ├── war-cuban-revolution.html
        ├── war-algerian.html
        ├── war-soviet-afghan.html
        ├── war-gulf.html
        ├── war-yugoslav.html
        ├── war-iraq.html
        ├── war-syrian.html
        └── war-ukraine.html
```

---

## DESIGN

**Color Palette:**
- Void black: `#0A0804`
- Blood red: `#8B1A1A`
- Gold: `#C9A84C`
- Parchment: `#F2E8D0`

**Fonts (Google Fonts — CDN, no install needed):**
- Cinzel Decorative — display headings
- Cinzel — section headings
- Crimson Pro — body text
- Special Elite — accents/labels

**Features:**
- Custom animated gold cursor + follower ring
- Canvas-based floating ember particles (80 particles)
- Parallax hero image on scroll
- IntersectionObserver scroll-reveal animations
- Horizontal drag-scroll timeline on landing page
- Era filter buttons on all-wars page
- Quote rotator (7 historical quotes, 6-second intervals)
- Random "Featured War" section on landing
- Preloader with progress bar
- Mobile-responsive hamburger menu

---

## CONTENT STYLE

Each war page contains:
- **Hero section** with full-bleed parallax image, metadata strip (dates, location, casualties, result)
- **Multiple narrative chapters** (3–6 per war) in an OverSimplified satirical style
- **Historical images** from Wikipedia Commons (CDN — no local images needed)
- **Pull quotes** from historical figures
- **Fun Facts / Historical Notes** callout boxes
- **Key Figures** photo grids (on major wars)
- **"Why It Matters"** closing section on lasting historical significance
- **Previous/Next navigation** between wars

---

## NOTES

- All images are loaded from Wikipedia Commons and CDN sources. An internet connection is required to display images.
- The Syria and Ukraine pages cover ongoing/very recent conflicts — content reflects the situation as of late 2024/early 2025.
- The `war-template.html` file is a fallback that reads a `?war=` URL parameter — used if any war page is missing.

---

## WARS COVERED (CHRONOLOGICAL)

| War | Years | Era |
|-----|-------|-----|
| Seven Years' War | 1756–1763 | Early Modern |
| American Revolutionary War | 1775–1783 | Early Modern |
| French Revolutionary Wars | 1789–1799 | Early Modern |
| Napoleonic Wars | 1803–1815 | Early Modern |
| Opium Wars | 1839–1860 | 19th Century |
| Crimean War | 1853–1856 | 19th Century |
| American Civil War | 1861–1865 | 19th Century |
| Franco-Prussian War | 1870–1871 | 19th Century |
| World War I | 1914–1918 | WW1 |
| Russian Revolution | 1917 | Interwar |
| Russian Civil War | 1917–1922 | Interwar |
| Chinese Civil War | 1927–1949 | Interwar |
| Spanish Civil War | 1936–1939 | Interwar |
| World War II | 1939–1945 | WW2 |
| Korean War | 1950–1953 | Cold War |
| Cuban Revolution | 1953–1959 | Cold War |
| Algerian War | 1954–1962 | Cold War |
| Vietnam War | 1955–1975 | Cold War |
| Soviet-Afghan War | 1979–1989 | Cold War |
| Gulf War | 1990–1991 | Post-Cold War |
| Yugoslav Wars | 1991–2001 | Post-Cold War |
| Iraq War | 2003–2011 | Post-Cold War |
| Syrian Civil War | 2011–present | Modern |
| Russia-Ukraine War | 2022–present | Modern |

---

*"History is the greatest story ever told. We just add context — and occasional sarcasm."*

⚔ Chronicles of War © 2024
