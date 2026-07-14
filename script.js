const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const typingText = document.getElementById('typing-text');
const copyButton = document.getElementById('copy-credentials');
const copyFeedback = document.getElementById('copy-feedback');
const contactForm = document.getElementById('contact-form');

function initNav() {
  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveLink(id);
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: '-10% 0px -40% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));

  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function initTypingEffect() {
  const phrases = [
    'custom inventory systems.',
    'Laravel & Filament apps.',
    'TALL stack products.',
    'real-world business tools.',
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    const current = phrases[phraseIndex];
    typingText.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex += 1;
    } else if (!deleting && charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1400);
      return;
    } else if (deleting && charIndex > 0) {
      charIndex -= 1;
    } else {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(type, deleting ? 70 : 95);
  };

  type();
}

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function initMobileNav() {
  menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function initCopyCredentials() {
  copyButton?.addEventListener('click', async () => {
    const textToCopy = 'Email: admin@gmail.com\nPassword: passwordAaBb';
    try {
      await navigator.clipboard.writeText(textToCopy);
      copyFeedback.textContent = 'Copied!';
      copyButton.textContent = 'Copied';
      setTimeout(() => {
        copyFeedback.textContent = 'Use these credentials on the demo page to explore the app.';
        copyButton.textContent = 'Copy';
      }, 1800);
    } catch (error) {
      copyFeedback.textContent = 'Clipboard access is unavailable in this browser.';
    }
  });
}

function initContactForm() {
  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || 'Hello';
    const email = formData.get('email')?.toString().trim() || 'no-reply@example.com';
    const message = formData.get('message')?.toString().trim() || '';
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:tahatouiloffi@gmail.com?subject=${subject}&body=${body}`;
  });
}

initNav();
initTypingEffect();
initScrollAnimations();
initMobileNav();
initCopyCredentials();
initContactForm();
