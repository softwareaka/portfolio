/**
 * Projects & Case Study Modal Module
 * Stores rich technical case study data and manages accessible modal overlay interactions.
 */

const PROJECTS_DATA = {
  'anor-shop': {
    title: 'ANOR SHOP',
    subtitle: 'Real-World E-Commerce Platform with Feature-Sliced Design (FSD)',
    image: 'assets/images/anor-shop.png',
    overview: 'ANOR SHOP is a high-performance, responsive e-commerce web application engineered with React, TypeScript, and Feature-Sliced Design (FSD) architecture, demonstrating client-side state caching and real-time catalog search.',
    challenge: 'Users required a frictionless interface to browse, filter, and compare large product catalogs without full page reloads, while retaining dynamic deep-link URLs for sharing specific search and filter states.',
    solution: 'Engineered a URL-synchronized filtering pipeline using React, TanStack Query, and Zustand. State changes update URL query parameters seamlessly, preserving search state across browser history and social sharing.',
    features: [
      'Feature-Sliced Design (FSD) modular architecture',
      'User Authentication state & session management',
      'Multi-criteria product search with debounced text indexing',
      'Persistent shopping cart & wishlist using LocalStorage sync',
      'REST API integration with automated retry and error boundary handling'
    ],
    technicalDecisions: 'Chosen Zustand over Redux for lightweight state management without boilerplate overhead. Applied TanStack Query for asynchronous caching and background refetching alongside Mantine UI components.',
    demoUrl: 'https://github.com/softwareaka',
    githubUrl: 'https://github.com/softwareaka'
  },
  'kilowatt-tracker': {
    title: 'KILOWATT TRACKER',
    subtitle: 'Energy Consumption Analytics & Multi-Language Monitoring Portal',
    image: 'assets/images/kilowatt-tracker.png',
    overview: 'Kilowatt Tracker is a real-time utility monitoring platform providing interactive energy usage charts, multi-language localization (EN, RU, UZ), and historical cost analytics.',
    challenge: 'Handling multi-language string transformations dynamically across complex data tables and interactive charts without introducing DOM flickering or performance degradation.',
    solution: 'Built a lightweight custom i18n engine with JSON dictionary maps, enabling instant, zero-reload language switching. Chart datasets re-render reactively with localized date formats and currency symbols.',
    features: [
      'Interactive Canvas/SVG chart rendering for daily and monthly kWh usage',
      'Instant multi-language switching (English, Russian, Uzbek)',
      'Configurable energy tariff baseline calculation engine',
      'Exportable utility reports and usage history filter',
      'Fully responsive UI optimized for low-bandwidth mobile devices'
    ],
    technicalDecisions: 'Utilized Vanilla JavaScript ES6+ modules and pure CSS Grid to achieve maximum rendering speed and zero framework dependencies. State persistence handled safely via LocalStorage API.',
    demoUrl: 'https://github.com/softwareaka',
    githubUrl: 'https://github.com/softwareaka'
  },
  'deposit-manager': {
    title: 'DEPOSIT MANAGER',
    subtitle: 'Financial Baseline & Automated Reporting Web Application',
    image: 'assets/images/deposit-manager.png',
    overview: 'Deposit Manager is a financial asset application designed for tracking baseline investments, calculating monthly compound interest schedules, and outputting clean audit reports.',
    challenge: 'Ensuring absolute precision in client-side financial calculations while maintaining customizable baseline edits and dynamic reporting dates.',
    solution: 'Designed strict TypeScript data models and reusable hook logic for real-time interest compounding, complete with automated rounding validation and customizable baseline thresholds.',
    features: [
      'Main Deposit baseline configuration and monthly edit workflow',
      'Automated monthly compounding yield calculations & schedule tables',
      'Print-ready audit report views with PDF export layout support',
      'Persistent dark and light visual themes with high-contrast accessibility'
    ],
    technicalDecisions: 'Leveraged Vite for lightning-fast module bundling and strict TypeScript typings to prevent runtime arithmetic errors and type mismatches in financial calculations.',
    demoUrl: 'https://github.com/softwareaka',
    githubUrl: 'https://github.com/softwareaka'
  },
  'devstudio-portal': {
    title: 'DEVSTUDIO PORTAL',
    subtitle: 'Client Onboarding & Project Intake Portal',
    image: 'assets/images/devstudio-portal.png',
    overview: 'DevStudio Portal is a lightweight, high-speed project intake web application created to streamline client registration, project scoping, and asset collection.',
    challenge: 'Guiding non-technical clients through complex multi-step technical questionnaires while validating payloads before submission.',
    solution: 'Created an accessible multi-stage form wizard with client-side field validation, step restore capabilities, and interactive preview cards.',
    features: [
      'Multi-stage guided form wizard with instant step restoration',
      'Real-time client-side field validation with accessibility ARIA alerts',
      'Payload file upload validator with file-type checking',
      '100/100 Lighthouse performance score with zero external dependencies'
    ],
    technicalDecisions: 'Built using pure HTML5 semantic elements, modular Vanilla CSS, and modern Fetch API calls to deliver an instant loading experience without heavy external libraries.',
    demoUrl: 'https://github.com/softwareaka',
    githubUrl: 'https://github.com/softwareaka'
  }
};

export function initProjectsModal() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggerBtns = document.querySelectorAll('.open-modal-btn');

  if (!modal || !modalBody || !closeBtn) return;

  // Open Modal Handler
  function openModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    modalBody.innerHTML = `
      <div class="modal-header-block">
        <h3 class="modal-title">${data.title}</h3>
        <div class="modal-subtitle">${data.subtitle}</div>
      </div>

      <div class="modal-section">
        <h4>Project Overview</h4>
        <p>${data.overview}</p>
      </div>

      <div class="modal-section">
        <h4>The Engineering Challenge</h4>
        <div class="modal-callout-box">
          <strong>Problem:</strong> ${data.challenge}
        </div>
      </div>

      <div class="modal-section">
        <h4>The Technical Solution</h4>
        <div class="modal-callout-box">
          <strong>Solution:</strong> ${data.solution}
        </div>
      </div>

      <div class="modal-section">
        <h4>Key Features</h4>
        <ul class="bullet-list">
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4>Technical Decisions &amp; Architecture</h4>
        <p>${data.technicalDecisions}</p>
      </div>

      <div class="modal-actions" style="display: flex; gap: 12px; margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border);">
        <a href="${data.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <span>Live Demo ↗</span>
        </a>
        <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <span>View Source ↗</span>
        </a>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    closeBtn.focus();
  }

  // Close Modal Handler
  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Event Listeners for Open Triggers
  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute('data-project-id');
      if (projectId) openModal(projectId);
    });
  });

  // Event Listener for Close Button
  closeBtn.addEventListener('click', closeModal);

  // Click Backdrop to Close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Escape Key to Close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
