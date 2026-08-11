/**
 * Theme Manager Module
 * Handles Light/Dark theme toggling, system preference detection, and localStorage persistence.
 */

const THEME_KEY = 'sanjar_portfolio_theme';

export function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // 1. Determine initial theme: localStorage > system preference > default dark
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let initialTheme = 'dark';
  if (savedTheme) {
    initialTheme = savedTheme;
  } else if (prefersDark === false) {
    initialTheme = 'light';
  }

  setTheme(initialTheme);

  // 2. Toggle Event Listener
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // 3. Listen to system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}
