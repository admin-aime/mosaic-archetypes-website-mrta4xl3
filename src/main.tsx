import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Global IntersectionObserver — triggers fade-in-up + staggered reveals.
// Must start AFTER React mounts so DOM elements exist; polls indefinitely
// so SPA route navigations (even after 15s) still reveal new content.
const root = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Poll indefinitely — querySelectorAll returns empty once everything is revealed,
  // making this a near-zero-cost no-op after initial page load.
  setInterval(() => {
    document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => observer.observe(el));
  }, 300);
}
