/**
 * Projects & Case Study Modal Module
 * Stores rich technical case study data and manages accessible modal overlay interactions.
 */

const PROJECTS_DATA = {
  'taiga-io': {
    title: 'TAIGA.IO (TEAM PROJECT)',
    subtitle: 'Agile & ClickUp-Style Collaborative Task & Project Management Platform',
    image: 'assets/images/taiga-io.png',
    overview: 'taiga.io is an Agile project management and workspace collaboration tool built with a team, enabling members to split project tasks, manage deadlines, and streamline workflows using interactive drag-and-drop boards.',
    challenge: 'Enabling real-time collaborative task updates and multi-member assignments with low latency, preventing state desynchronization across active team members.',
    solution: 'Implemented Feature-Sliced Design (FSD) architecture with React, TanStack Query, and Mantine UI. Managed token-based secure authentication and optimized optimistic UI updates for drag-and-drop task movements.',
    features: [
      'Interactive Drag-and-Drop Task Kanban boards with status columns',
      'Team task splitting, member assignment, and workload distribution',
      'Deadline tracking, milestone scheduling, and urgent alert badges',
      'Feature-Sliced Design (FSD) modular frontend structure',
      'Token-based authentication and secure session state sync',
      'Comprehensive Unit Testing suite ensuring reliable component state'
    ],
    technicalDecisions: 'Built with React, Mantine UI, and TanStack Query for server-side state synchronization. Architecture scaled using FSD guidelines and verified with TypeScript static typing and automated unit tests.',
    demoUrl: 'https://github.com/softwareaka',
    githubUrl: 'https://github.com/softwareaka'
  },
  'kilowatt-tracker': {
    title: 'KILOWATT TRACKER',
    subtitle: 'Electricity Consumption Calculator & Utility Analytics for Education Centers',
    image: 'assets/images/kilowatt-tracker.png',
    overview: 'Kilowatt Tracker is a specialized electricity consumption management web application tailored for educational institutions to monitor daily power usage, forecast kilowatt duration, and manage starter credit deposits.',
    challenge: 'Education centers needed an intuitive tool to track starter deposits, predict remaining days of electricity balance, and generate monthly financial reports with zero delay.',
    solution: 'Engineered dynamic energy calculation formulas using React, TypeScript, and Mantine UI with multi-language (i18n) support. Integrated real-time deposit threshold warnings and comprehensive monthly report generators.',
    features: [
      'Starter credit deposit tracking with automated low-balance alert warnings',
      'Kilowatt duration calculator forecasting remaining supply days based on consumption rate',
      'Multi-period analytics: Daily, 3-day, and monthly usage metrics for kWh and credits',
      'Monthly reporting dashboard summarizing total spent, average kWh usage, and credit history',
      'Dynamic multi-language support (i18n engine) for seamless localization'
    ],
    technicalDecisions: 'Leveraged React, Mantine UI, and TypeScript for high type safety and fluid UI components. Implemented i18n localization for instant language switches and client-side calculations for instant results.',
    demoUrl: 'https://github.com/softwareaka',
    githubUrl: 'https://github.com/softwareaka'
  },
  'anor-shop': {
    title: 'ANOR SHOP',
    subtitle: 'Role-Based E-Commerce Platform with Client Catalog & Admin Dashboard',
    image: 'assets/images/anor-shop.png',
    overview: 'ANOR SHOP is a modern e-commerce web application engineered with Feature-Sliced Design (FSD) architecture, offering distinct Client and Admin role features and optimized pagination for high performance.',
    challenge: 'Delivering fast catalog loading for large product sets while providing administrators complete control over inventory management, pricing metrics, and product categories.',
    solution: 'Built client features for instant search, dynamic multi-filtering, and detailed product views alongside an Admin dashboard with full CRUD capabilities for products and categories, paginated lists, and average price calculations.',
    features: [
      'Client Portal: Instant product search, multi-criteria filtering, detail views & paginated catalog',
      'Admin Portal: Full CRUD operations for products and categories with average price metrics',
      'Optimized pagination for fast catalog rendering and lower payload overhead',
      'Feature-Sliced Design (FSD) architecture with TypeScript & Unit Tests',
      'Token-based session management and TanStack Query state caching'
    ],
    technicalDecisions: 'Utilized React, TypeScript, Mantine UI, Zustand, and TanStack Query to manage complex e-commerce state, REST API calls with automated retry logic, and FSD modular boundaries.',
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
