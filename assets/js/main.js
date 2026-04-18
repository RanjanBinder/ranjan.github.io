/* ==============================================
   Portfolio JS — dark mode, nav, scroll effects
   ============================================== */

/* ---- Dark mode toggle (persisted) ---- */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.setAttribute('data-theme', savedTheme);

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ---- Mobile nav ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

/* Close mobile nav when a link is clicked */
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ---- Navbar scroll state ---- */
const navbar = document.getElementById('navbar');
const onScroll = () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---- Scroll reveal (Intersection Observer) ---- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---- Footer year ---- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href*="#${entry.target.id}"]`);
        active?.classList.add('active');
      }
    });
  },
  { rootMargin: '-30% 0px -60% 0px' }
);

sections.forEach(s => activeObserver.observe(s));

/* ---- Contact form handler ---- */
const form = document.getElementById('contactForm');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  const orig = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;

  /* Swap in a real form service (Formspree, EmailJS, etc.) here */
  setTimeout(() => {
    btn.textContent = 'Message sent!';
    form.reset();
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
    }, 3000);
  }, 1000);
});
