/**
 * Main Application Entry Point
 * Imports modules and initializes application features and form validation.
 */

import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initAnimations, showToast } from './animations.js';
import { initProjectsModal } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Modules
  initTheme();
  initNavigation();
  initAnimations();
  initProjectsModal();

  // Initialize Contact Form Validation
  initContactForm();
});

/**
 * Contact Form Real-Time Validation & Submission Engine
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // Input Event Listeners for real-time error removal
  nameInput?.addEventListener('input', () => validateName(nameInput, nameError));
  emailInput?.addEventListener('input', () => validateEmail(emailInput, emailError));
  messageInput?.addEventListener('input', () => validateMessage(messageInput, messageError));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName(nameInput, nameError);
    const isEmailValid = validateEmail(emailInput, emailError);
    const isMessageValid = validateMessage(messageInput, messageError);

    if (isNameValid && isEmailValid && isMessageValid) {
      // Simulate successful form submission
      showToast('Message sent successfully! I will get back to you soon.');
      form.reset();
      
      // Clear error styles
      [nameInput, emailInput, messageInput].forEach(input => {
        input?.classList.remove('input-error');
      });
    } else {
      showToast('Please fix the errors in the form before submitting.');
    }
  });
}

function validateName(input, errorEl) {
  if (!input || !errorEl) return false;
  const value = input.value.trim();
  if (value.length < 2) {
    input.classList.add('input-error');
    errorEl.textContent = 'Please enter your name (at least 2 characters).';
    return false;
  }
  input.classList.remove('input-error');
  errorEl.textContent = '';
  return true;
}

function validateEmail(input, errorEl) {
  if (!input || !errorEl) return false;
  const value = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    input.classList.add('input-error');
    errorEl.textContent = 'Please enter a valid email address.';
    return false;
  }
  input.classList.remove('input-error');
  errorEl.textContent = '';
  return true;
}

function validateMessage(input, errorEl) {
  if (!input || !errorEl) return false;
  const value = input.value.trim();
  if (value.length < 10) {
    input.classList.add('input-error');
    errorEl.textContent = 'Please enter a message (at least 10 characters).';
    return false;
  }
  input.classList.remove('input-error');
  errorEl.textContent = '';
  return true;
}
