// Timeline builder and drag-scroll
(function() {
  const track = document.getElementById('timelineTrack');
  const container = document.getElementById('timelineScroll');
  if (!track || !container || !window.WARS_DATA) return;

  const wars = [...window.WARS_DATA].sort((a, b) => a.year - b.year);
  const minYear = 1700;
  const maxYear = 2025;
  const trackWidth = 2400;
  const padding = 100;

  function yearToX(year) {
    return padding + ((year - minYear) / (maxYear - minYear)) * (trackWidth - padding * 2);
  }

  wars.forEach((war, i) => {
    const dot = document.createElement('div');
    dot.className = `timeline-dot ${i % 2 === 0 ? 'above' : 'below'}`;
    dot.style.left = yearToX(war.year) + 'px';
    dot.innerHTML = `
      <div class="dot-label">${war.name}</div>
      <div class="dot-line"></div>
      <div class="dot-circle"></div>
      <div class="dot-year">${war.year}</div>
    `;
    if (i % 2 !== 0) {
      dot.innerHTML = `
        <div class="dot-year">${war.year}</div>
        <div class="dot-circle"></div>
        <div class="dot-line"></div>
        <div class="dot-label">${war.name}</div>
      `;
    }
    dot.addEventListener('click', () => {
      window.location.href = war.file;
    });
    track.appendChild(dot);
  });

  // Era labels
  const eras = [
    { label: 'Early Modern', year: 1750 },
    { label: '19th Century', year: 1850 },
    { label: 'WW1', year: 1916 },
    { label: 'Interwar', year: 1928 },
    { label: 'WW2', year: 1942 },
    { label: 'Cold War', year: 1965 },
    { label: 'Post-Cold War', year: 1995 },
    { label: 'Modern', year: 2015 },
  ];
  eras.forEach(era => {
    const label = document.createElement('div');
    label.style.cssText = `
      position: absolute;
      left: ${yearToX(era.year)}px;
      top: 50%;
      transform: translate(-50%, 32px);
      font-family: 'Cinzel', serif;
      font-size: 10px;
      letter-spacing: 0.2em;
      color: rgba(201,168,76,0.2);
      white-space: nowrap;
      pointer-events: none;
    `;
    label.textContent = era.label.toUpperCase();
    track.appendChild(label);
  });

  // Drag to scroll
  let isDown = false, startX, scrollLeft;
  container.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
  });
  container.addEventListener('mouseleave', () => { isDown = false; container.style.cursor = 'grab'; });
  container.addEventListener('mouseup', () => { isDown = false; container.style.cursor = 'grab'; });
  container.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });

  // Touch support
  let touchStartX, touchScrollLeft;
  container.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = container.scrollLeft;
  });
  container.addEventListener('touchmove', e => {
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 1.5;
    container.scrollLeft = touchScrollLeft - walk;
  });
})();
