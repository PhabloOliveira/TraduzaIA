// Remove Vercel/Next.js badges and dev tools
(function() {
  'use strict';
  
  const removeElements = () => {
    const selectors = [
      '.__next-dev-overlay-error-body',
      '.__next-dev-overlay',
      '[data-nextjs-scroll-focus-boundary]',
      '.vercel-live-feedback',
      '.vercel-badge',
      '[id*="vercel"]',
      '[class*="vercel"]',
      '[data-vercel]',
      '.__vercel',
      '.__vercel_toolbar',
      '[data-nextjs-portal]',
      '[id*="nextjs"]',
      '.__nextjs_original-stack-frame',
      'button[aria-label*="Feedback"]',
      '[class*="feedback"][class*="button"]',
      '[aria-label="Open Vercel Toolbar"]',
      '[data-overlay]',
      '[data-nextjs-toast]'
    ];
    
    selectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el && el.parentNode) {
            el.remove();
          }
        });
      } catch (e) {
        // Silent fail for invalid selectors
      }
    });
  };
  
  // Remove on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeElements);
  } else {
    removeElements();
  }
  
  // Monitor for dynamically added elements
  const observer = new MutationObserver(() => {
    removeElements();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'id', 'data-vercel', 'data-nextjs-portal']
  });
  
  // Cleanup function
  window.addEventListener('beforeunload', () => {
    observer.disconnect();
  });
})();