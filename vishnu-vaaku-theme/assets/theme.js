/**
 * Vishnu Vaaku Theme - JavaScript
 * Celestial Terracotta Theme for VishnuVaaku.com
 */

(function() {
  'use strict';

  // ===================================
  // Header Scroll Effect
  // ===================================
  const header = document.querySelector('.header');
  let lastScrollY = 0;

  function handleHeaderScroll() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    
    lastScrollY = currentScrollY;
  }

  if (header) {
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();
  }

  // ===================================
  // Mobile Menu Toggle
  // ===================================
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('mobile-menu--open');
      
      if (isOpen) {
        mobileMenu.classList.remove('mobile-menu--open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.add('mobile-menu--open');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-menu__link');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('mobile-menu--open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--open')) {
        mobileMenu.classList.remove('mobile-menu--open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ===================================
  // Smooth Scroll for Anchor Links
  // ===================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===================================
  // Intersection Observer for Animations
  // ===================================
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      elements.forEach(el => observer.observe(el));
    }
  };

  animateOnScroll();

  // ===================================
  // Product Quantity Selector
  // ===================================
  document.querySelectorAll('.quantity-selector').forEach(selector => {
    const decrementBtn = selector.querySelector('.quantity-selector__btn--decrement');
    const incrementBtn = selector.querySelector('.quantity-selector__btn--increment');
    const input = selector.querySelector('.quantity-selector__input');

    if (decrementBtn && incrementBtn && input) {
      decrementBtn.addEventListener('click', function() {
        const currentValue = parseInt(input.value) || 1;
        if (currentValue > 1) {
          input.value = currentValue - 1;
          input.dispatchEvent(new Event('change'));
        }
      });

      incrementBtn.addEventListener('click', function() {
        const currentValue = parseInt(input.value) || 1;
        const maxValue = parseInt(input.max) || 999;
        if (currentValue < maxValue) {
          input.value = currentValue + 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
  });

  // ===================================
  // Add to Cart Form Handler
  // ===================================
  document.querySelectorAll('form[action="/cart/add"]').forEach(form => {
    form.addEventListener('submit', function(e) {
      const submitButton = form.querySelector('[type="submit"]');
      if (submitButton) {
        submitButton.classList.add('is-loading');
        submitButton.disabled = true;
        
        setTimeout(() => {
          submitButton.classList.remove('is-loading');
          submitButton.disabled = false;
        }, 3000);
      }
    });
  });

  // ===================================
  // FAQ Accordion
  // ===================================
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');
    
    if (question && answer) {
      question.style.cursor = 'pointer';
      question.addEventListener('click', function() {
        document.querySelectorAll('.faq-item--open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('faq-item--open');
          }
        });
        item.classList.toggle('faq-item--open');
      });
    }
  });

  // ===================================
  // Initialize on DOM Ready
  // ===================================
  document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('is-loaded');
    
    const mainContent = document.getElementById('MainContent');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
    }
  });

})();
