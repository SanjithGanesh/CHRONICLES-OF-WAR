// ============================================
// IMAGE FIX — no-referrer + graceful fallbacks
// The <meta name="referrer" content="no-referrer"> in each
// HTML file handles Wikipedia hotlink blocking for <img> tags.
// This script adds fallback placeholders for any that still fail.
// ============================================
(function() {

  function applyFallback(img) {
    if (img.dataset.fbDone) return;
    img.dataset.fbDone = '1';
    img.addEventListener('error', function() {
      if (this.dataset.fbDone === 'replaced') return;
      this.dataset.fbDone = 'replaced';
      const ph = document.createElement('div');
      // Match the image's dimensions as best we can
      const h = this.height || this.style.height || '200px';
      ph.style.cssText = [
        'background:linear-gradient(135deg,#1a1208 0%,#2d2010 50%,#1a1208 100%)',
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'min-height:' + (typeof h === 'number' ? h + 'px' : (h || '160px')),
        'width:100%',
        'color:rgba(201,168,76,0.2)',
        'font-family:serif',
        'font-size:11px',
        'letter-spacing:3px',
        'border:1px solid rgba(201,168,76,0.08)',
        'box-sizing:border-box'
      ].join(';');
      ph.textContent = '· HISTORICAL IMAGE ·';
      if (this.parentNode) this.parentNode.replaceChild(ph, this);
    });
    // Trigger if already broken
    if (img.complete && img.src && img.naturalWidth === 0) {
      img.dispatchEvent(new Event('error'));
    }
  }

  function processImages() {
    document.querySelectorAll('img').forEach(applyFallback);
  }

  // Run immediately, on DOM ready, and on load
  processImages();
  document.addEventListener('DOMContentLoaded', processImages);
  window.addEventListener('load', processImages);

  // Watch for dynamically added images (e.g. featured war section)
  if (window.MutationObserver) {
    const mo = new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1) {
            if (node.tagName === 'IMG') applyFallback(node);
            node.querySelectorAll && node.querySelectorAll('img').forEach(applyFallback);
          }
        });
      });
    });
    mo.observe(document.body || document.documentElement, { childList: true, subtree: true });
  }

})();
