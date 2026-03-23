// ============================================
// MAIN JS — Chronicles of War
// ============================================

// Wars data (used across pages)
window.WARS_DATA = [
  {
    id: 'seven-years-war',
    name: "Seven Years' War",
    year: 1756,
    era: 'Early Modern',
    eraSlug: 'early-modern',
    file: 'pages/war-seven-years.html',
    tagline: "The world's first world war — before it was cool",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Kunersdorf_by_Alexander_Kotzebue.jpg',
    color: '#5A4A2A'
  },
  {
    id: 'american-revolution',
    name: "American Revolutionary War",
    year: 1775,
    era: 'Early Modern',
    eraSlug: 'early-modern',
    file: 'pages/war-american-revolution.html',
    tagline: "Britain: The most expensive tea complaint in history",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Scene_at_the_Signing_of_the_Constitution_of_the_United_States.jpg',
    color: '#2A3A5A'
  },
  {
    id: 'french-revolution',
    name: "French Revolutionary Wars",
    year: 1792,
    era: 'Early Modern',
    eraSlug: 'early-modern',
    file: 'pages/war-french-revolution.html',
    tagline: "Liberty, Equality, Fraternity — and a lot of guillotines",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg',
    color: '#3A1A1A'
  },
  {
    id: 'napoleonic-wars',
    name: "Napoleonic Wars",
    year: 1803,
    era: 'Early Modern',
    eraSlug: 'early-modern',
    file: 'pages/war-napoleonic.html',
    tagline: "One man's extremely ambitious European road trip",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg',
    color: '#1A2A3A'
  },
  {
    id: 'crimean-war',
    name: "Crimean War",
    year: 1853,
    era: '19th Century',
    eraSlug: '19th-century',
    file: 'pages/war-crimean.html',
    tagline: "Russia vs. everybody — not for the last time",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Charge%20of%20the%20Light%20Brigade.jpg',
    color: '#2A1A3A'
  },
  {
    id: 'american-civil-war',
    name: "American Civil War",
    year: 1861,
    era: '19th Century',
    eraSlug: '19th-century',
    file: 'pages/war-american-civil.html',
    tagline: "America: When a nation truly couldn't agree to disagree",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/A_lone_Confederate_soldier.jpg',
    color: '#2A1A1A'
  },
  {
    id: 'opium-wars',
    name: "Opium Wars",
    year: 1839,
    era: '19th Century',
    eraSlug: '19th-century',
    file: 'pages/war-opium.html',
    tagline: "Britain: Forcing drug trade on China since 1839",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/First_Opium_War_collage.png',
    color: '#1A2A1A'
  },
  {
    id: 'franco-prussian',
    name: "Franco-Prussian War",
    year: 1870,
    era: '19th Century',
    eraSlug: '19th-century',
    file: 'pages/war-franco-prussian.html',
    tagline: "The war that accidentally created Germany. Oops.",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gravelotte.jpg',
    color: '#3A3A1A'
  },
  {
    id: 'ww1',
    name: "World War I",
    year: 1914,
    era: 'WW1',
    eraSlug: 'ww1',
    file: 'pages/war-ww1.html',
    tagline: "One assassination. Four years. Thirty-seven million casualties.",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cheshire_Regiment_trench_Somme_1916.jpg',
    color: '#2A1A0A'
  },
  {
    id: 'russian-revolution',
    name: "Russian Revolution",
    year: 1917,
    era: 'Interwar',
    eraSlug: 'interwar',
    file: 'pages/war-russian-revolution.html',
    tagline: "Tsar Nicholas II: The last man to underestimate a cold, hungry population",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lenin_Cheka.jpg',
    color: '#3A0A0A'
  },
  {
    id: 'russian-civil-war',
    name: "Russian Civil War",
    year: 1918,
    era: 'Interwar',
    eraSlug: 'interwar',
    file: 'pages/war-russian-civil.html',
    tagline: "Red vs White: A sequel nobody wanted",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stalin_Full_Image.jpg',
    color: '#3A0A0A'
  },
  {
    id: 'spanish-civil-war',
    name: "Spanish Civil War",
    year: 1936,
    era: 'Interwar',
    eraSlug: 'interwar',
    file: 'pages/war-spanish-civil.html',
    tagline: "A dress rehearsal for WW2. Everyone watched and took notes.",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Milicianas.jpg',
    color: '#3A1A0A'
  },
  {
    id: 'chinese-civil-war',
    name: "Chinese Civil War",
    year: 1927,
    era: 'Interwar',
    eraSlug: 'interwar',
    file: 'pages/war-chinese-civil.html',
    tagline: "Mao vs Chiang: China's longest reality show",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mao_Proclaiming_New_China.jpg',
    color: '#3A0A0A'
  },
  {
    id: 'ww2',
    name: "World War II",
    year: 1939,
    era: 'WW2',
    eraSlug: 'ww2',
    file: 'pages/war-ww2.html',
    tagline: "The sequel. Bigger, worse, somehow more global.",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-H28422%2C_Paris%2C_Adolf_Hitler_in_der_Oper.jpg',
    color: '#0A1A0A'
  },
  {
    id: 'korean-war',
    name: "Korean War",
    year: 1950,
    era: 'Cold War',
    eraSlug: 'cold-war',
    file: 'pages/war-korean.html',
    tagline: "The 'Forgotten War' — largely because nobody could explain why it started",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/US_Army_Korea_1950.jpg',
    color: '#0A1A2A'
  },
  {
    id: 'vietnam-war',
    name: "Vietnam War",
    year: 1955,
    era: 'Cold War',
    eraSlug: 'cold-war',
    file: 'pages/war-vietnam.html',
    tagline: "America's most expensive geography lesson",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Saigon-68-helicopter.jpg',
    color: '#0A2A0A'
  },
  {
    id: 'cuban-revolution',
    name: "Cuban Revolution",
    year: 1953,
    era: 'Cold War',
    eraSlug: 'cold-war',
    file: 'pages/war-cuban-revolution.html',
    tagline: "Castro: The man who outlasted ten US presidents",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guevara_1963.jpg',
    color: '#1A2A0A'
  },
  {
    id: 'algerian-war',
    name: "Algerian War",
    year: 1954,
    era: 'Cold War',
    eraSlug: 'cold-war',
    file: 'pages/war-algerian.html',
    tagline: "France's messiest breakup — 132 years in the making",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Algerian_women_in_the_algerian_War_of_Independence.jpg',
    color: '#2A1A0A'
  },
  {
    id: 'soviet-afghan',
    name: "Soviet-Afghan War",
    year: 1979,
    era: 'Cold War',
    eraSlug: 'cold-war',
    file: 'pages/war-soviet-afghan.html',
    tagline: "Afghanistan: The graveyard of empires, part ∞",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Soviet_soldiers_in_Afghanistan.jpg',
    color: '#1A1A2A'
  },
  {
    id: 'gulf-war',
    name: "Gulf War",
    year: 1990,
    era: 'Post-Cold War',
    eraSlug: 'post-cold-war',
    file: 'pages/war-gulf.html',
    tagline: "The first war televised live. CNN had their moment.",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gulf_war_soldiers.jpg',
    color: '#2A2A0A'
  },
  {
    id: 'yugoslav-wars',
    name: "Yugoslav Wars",
    year: 1991,
    era: 'Post-Cold War',
    eraSlug: 'post-cold-war',
    file: 'pages/war-yugoslav.html',
    tagline: "What happens when a country decides to stop being a country",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Siege_of_Sarajevo.png',
    color: '#1A1A2A'
  },
  {
    id: 'iraq-war',
    name: "Iraq War",
    year: 2003,
    era: 'Post-Cold War',
    eraSlug: 'post-cold-war',
    file: 'pages/war-iraq.html',
    tagline: "The WMDs were in our hearts all along",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/US_Marines_Iraq_2003.JPEG',
    color: '#2A1A0A'
  },
  {
    id: 'syrian-civil-war',
    name: "Syrian Civil War",
    year: 2011,
    era: 'Modern',
    eraSlug: 'modern',
    file: 'pages/war-syrian.html',
    tagline: "What began as protest became the world's most complex conflict",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aleppo_Syria.jpg',
    color: '#2A0A0A'
  },
  {
    id: 'ukraine-russia',
    name: "Russia-Ukraine War",
    year: 2022,
    era: 'Modern',
    eraSlug: 'modern',
    file: 'pages/war-ukraine.html',
    tagline: "History rhymes, and this verse is expensive",
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kharkiv_after_Russian_bombardment%2C_2022-03-01.jpg',
    color: '#0A0A2A'
  }
];

// Quotes
const QUOTES = [
  { text: "In war, truth is the first casualty.", source: "— Aeschylus, 458 BC. Nothing has changed." },
  { text: "To jaw-jaw is always better than to war-war.", source: "— Winston Churchill, who did a lot of both." },
  { text: "History is the version of past events that people have decided to agree upon.", source: "— Napoleon Bonaparte, who had an agenda." },
  { text: "All wars are civil wars, because all men are brothers.", source: "— François Fénelon, naively." },
  { text: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.", source: "— Albert Einstein, physicist and reluctant prophet." },
  { text: "The supreme art of war is to subdue the enemy without fighting.", source: "— Sun Tzu, 500 BC. Still undefeated in theory." },
  { text: "Anyone who has ever looked into the glazed eyes of a soldier dying on the battlefield will think hard before starting a war.", source: "— Otto von Bismarck, who started several anyway." },
];

// ============================================
// PRELOADER — always dismisses, never blocks
// ============================================
function dismissPreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader && !preloader.classList.contains('loaded')) {
    preloader.classList.add('loaded');
  }
}
// Dismiss after DOM is ready (fast path)
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(dismissPreloader, 800);
});
// Hard fallback: always dismiss after 3 seconds no matter what
setTimeout(dismissPreloader, 3000);
// Also on window load if it fires quickly
window.addEventListener('load', () => setTimeout(dismissPreloader, 400));

// ============================================
// NAV SCROLL
// ============================================
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }
});

// ============================================
// SCROLL REVEAL
// ============================================
// ============================================
// SCROLL REVEAL — fixed
// ============================================
function showEl(el) {
  el.style.opacity = '1';
  el.style.transform = 'translateY(0)';
  el.dataset.revealed = 'true';
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      showEl(entry.target);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

// Wait for DOM then set up reveals
// On story pages, NEVER hide .story-body content — that's the article text
function initReveal() {
  const isStoryPage = document.body.classList.contains('story-page');

  document.querySelectorAll('.reveal, .era-card, .section-header').forEach(el => {
    // Never hide story chapters / body content
    if (isStoryPage && (el.closest('.story-body') || el.classList.contains('story-chapter'))) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      el.style.transition = 'none';
    } else {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      revealObserver.observe(el);
    }
  });
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}
// Also run after full load (images etc)
window.addEventListener('load', () => {
  initReveal();
  // Force-show anything still hidden after 1.5s as a safety net
  setTimeout(() => {
    document.querySelectorAll('.reveal, .era-card, .section-header').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 1500);
});

// ============================================
// QUOTE ROTATOR
// ============================================
let quoteIndex = 0;
const quoteText = document.getElementById('quoteText');
const quoteSource = document.getElementById('quoteSource');

function showQuote(i) {
  if (!quoteText || !quoteSource) return;
  const q = QUOTES[i % QUOTES.length];
  quoteText.style.opacity = '0';
  quoteSource.style.opacity = '0';
  setTimeout(() => {
    quoteText.textContent = q.text;
    quoteSource.textContent = q.source;
    quoteText.style.opacity = '1';
    quoteSource.style.opacity = '1';
  }, 500);
}
showQuote(0);
setInterval(() => { quoteIndex++; showQuote(quoteIndex); }, 6000);

// ============================================
// FEATURED WAR (random)
// ============================================
const featuredContent = document.getElementById('featuredContent');
if (featuredContent && window.WARS_DATA) {
  const war = WARS_DATA[Math.floor(Math.random() * WARS_DATA.length)];
  featuredContent.innerHTML = `
    <div class="featured-image">
      <img src="${war.image}" alt="${war.name}" onerror="this.src='https://commons.wikimedia.org/wiki/Special:FilePath/Charge%20of%20the%20Light%20Brigade.jpg'"/>
    </div>
    <div class="featured-text">
      <div class="featured-era">${war.era.toUpperCase()} · ${war.year}</div>
      <h3 class="featured-title">${war.name}</h3>
      <p class="featured-excerpt">${war.tagline}</p>
      <a href="${war.file}" class="featured-read-btn">READ THE STORY <span>→</span></a>
    </div>
  `;
}

// ============================================
// SMOOTH SCROLL ANCHOR
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================
// STORY PAGE HERO PARALLAX
// ============================================
const storyHeroBg = document.querySelector('.story-hero-bg');
if (storyHeroBg) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    storyHeroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.3}px)`;
  });
  setTimeout(() => storyHeroBg.classList.add('loaded'), 100);
}

// ============================================
// MOBILE MENU
// ============================================
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.right = '20px';
    navLinks.style.background = 'rgba(10,8,4,0.98)';
    navLinks.style.padding = '20px';
    navLinks.style.border = '1px solid rgba(201,168,76,0.2)';
    navLinks.style.borderRadius = '4px';
    navLinks.style.gap = '20px';
  });
}

// ============================================
// IMAGE ERROR HANDLER — replace broken images with styled placeholder
// ============================================
(function() {
  function handleBrokenImages() {
    document.querySelectorAll('img').forEach(img => {
      if (!img.dataset.errorHandled) {
        img.dataset.errorHandled = 'true';
        img.addEventListener('error', function() {
          // Style the broken image as a dark placeholder with text
          this.style.background = 'linear-gradient(135deg, #1a1208 0%, #2d2010 100%)';
          this.style.minHeight = '160px';
          this.style.display = 'block';
          // Replace with a div placeholder if possible
          const ph = document.createElement('div');
          ph.style.cssText = 'background:linear-gradient(135deg,#1a1208,#2d2010);display:flex;align-items:center;justify-content:center;min-height:160px;width:100%;font-family:serif;color:rgba(201,168,76,0.3);font-size:13px;letter-spacing:2px;border:1px solid rgba(201,168,76,0.1);';
          ph.textContent = '[ IMAGE ]';
          if (this.parentNode) this.parentNode.replaceChild(ph, this);
        });
        // Trigger error if already broken
        if (img.complete && img.naturalWidth === 0) {
          img.dispatchEvent(new Event('error'));
        }
      }
    });
  }

  // Run now and after DOM loads
  if (document.readyState !== 'loading') handleBrokenImages();
  document.addEventListener('DOMContentLoaded', handleBrokenImages);
  window.addEventListener('load', handleBrokenImages);
})();
