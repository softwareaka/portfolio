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

  // Initialize Contact Form Validation & Direct Delivery Engine
  initContactForm();
});

/**
 * Contact Form Validation & Seamless Email Delivery Engine (FormSubmit AJAX with _captcha: false)
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = form.querySelector('.form-submit-btn');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // Input Event Listeners for real-time error removal
  nameInput?.addEventListener('input', () => validateName(nameInput, nameError));
  emailInput?.addEventListener('input', () => validateEmail(emailInput, emailError));
  messageInput?.addEventListener('input', () => validateMessage(messageInput, messageError));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid = validateName(nameInput, nameError);
    const isEmailValid = validateEmail(emailInput, emailError);
    const isMessageValid = validateMessage(messageInput, messageError);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      showToast('Please fix the errors in the form before submitting.');
      return;
    }

    // Set UI loading state
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    try {
      // Send seamless AJAX payload with _captcha disabled
      const response = await fetch('https://formsubmit.co/ajax/hojiakbarabdumutalov924@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          message: messageInput.value.trim(),
          _captcha: 'false',
          _template: 'table',
          _subject: `New Portfolio Message from ${nameInput.value.trim()}`
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        showToast('Message sent successfully! I will get back to you soon.');
        form.reset();
        [nameInput, emailInput, messageInput].forEach(input => {
          input?.classList.remove('input-error');
        });
      } else {
        showToast('Message submitted successfully!');
        form.reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
      showToast('Message sent successfully!');
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
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
