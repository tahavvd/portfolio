const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));
const brandLink = document.querySelector('.brand');
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const languageToggle = document.getElementById('language-toggle');
const typingText = document.getElementById('typing-text');
const copyButton = document.getElementById('copy-credentials');
const copyFeedback = document.getElementById('copy-feedback');
const contactForm = document.getElementById('contact-form');

const translations = {
  fr: {
    'Scroll to top': 'Revenir en haut',
    'Toggle navigation': 'Ouvrir ou fermer la navigation',
    'Primary navigation': 'Navigation principale',
    About: 'À propos',
    Skills: 'Compétences',
    'Focus Areas': "Domaines d'expertise",
    Project: 'Projet',
    Contact: 'Contact',
    'Backend Developer • Laravel & PHP': 'Développeur backend • Laravel & PHP',
    'I build': 'Je crée',
    "I'm a backend-focused developer who builds complete, production-ready web applications with Laravel — from database design to deployment — with hands-on experience shipping real projects solo.": "Je suis un développeur spécialisé en backend. Je construis des applications web Laravel complètes et prêtes pour la production, de la conception de la base de données au déploiement, avec une expérience concrète de projets réalisés en autonomie.",
    'Get In Touch': 'Me contacter',
    'View My Work': 'Voir mes projets',
    'Current focus': 'Projet actuel',
    'Building an appointment booking system with Laravel.': 'Création d’un système de prise de rendez-vous avec Laravel.',
    'Backend-focused developer with hands-on Laravel experience.': 'Développeur backend avec une expérience concrète de Laravel.',
    "I'm Taha Touil, a 20-year-old third-year Computer Science Engineering student with over a year of hands-on programming experience building real Laravel applications.": "Je suis Taha Touil, étudiant de 20 ans en troisième année d’ingénierie informatique, avec plus d’un an d’expérience pratique en programmation et dans la création de véritables applications Laravel.",
    "I focus on backend development with Laravel — building role-based systems, database-driven logic, and admin tools with Filament — and I'm continuing to grow into full ownership of projects from database to deployment.": "Je me concentre sur le développement backend avec Laravel : création de systèmes basés sur les rôles, de logiques pilotées par les bases de données et d’outils d’administration avec Filament. Je continue également à développer ma capacité à prendre en charge des projets de la base de données jusqu’au déploiement.",
    'What I bring': "Ce que j'apporte",
    'Solid backend fundamentals in PHP and Laravel': 'De solides bases backend en PHP et Laravel',
    'End-to-end feature development, from database schema to working UI': "Développement complet de fonctionnalités, du schéma de base de données à l'interface fonctionnelle",
    'Clean, role-aware systems that are easy to maintain and extend': 'Des systèmes propres et adaptés aux rôles, faciles à maintenir et à faire évoluer',
    'Core technologies and stacks I use every day.': "Les technologies et stacks que j'utilise au quotidien.",
    Languages: 'Langages',
    'Main Stack': 'Stack principale',
    'What I\'ve built experience in.': "Les domaines dans lesquels j'ai de l'expérience.",
    'Inventory & Stock Systems': 'Systèmes d’inventaire et de stock',
    'Real-time tracking, stock movement, and order lifecycle logic built with Laravel.': 'Suivi en temps réel, mouvements de stock et gestion du cycle de vie des commandes avec Laravel.',
    'Laravel + Filament Admin Panels': 'Panneaux d’administration Laravel + Filament',
    'Building admin dashboards and management interfaces with clean CRUD flows.': 'Création de tableaux de bord et d’interfaces de gestion avec des flux CRUD clairs.',
    'Role-Based Access Systems': 'Systèmes d’accès par rôles',
    'Designing permission and role structures so different users see only what they need.': 'Conception de permissions et de rôles pour que chaque utilisateur voie uniquement ce dont il a besoin.',
    'Reactive UI with Livewire & Alpine': 'Interfaces réactives avec Livewire et Alpine',
    'Adding interactivity to server-rendered pages without a separate JS framework.': 'Ajout d’interactivité aux pages rendues côté serveur sans framework JavaScript séparé.',
    'Featured Projects': 'Projets mis en avant',
    "Projects I've built and I'm building.": "Les projets que j'ai réalisés et que je développe actuellement.",
    'Real Laravel applications, from a completed inventory system to a work-in-progress booking platform.': 'De vraies applications Laravel, d’un système d’inventaire terminé à une plateforme de réservation en cours de développement.',
    'Live Demo': 'Démo en ligne',
    'View Code': 'Voir le code',
    'Demo Credentials': 'Identifiants de démo',
    Copy: 'Copier',
    'Use these credentials on the demo page to explore the app.': 'Utilisez ces identifiants sur la page de démo pour découvrir l’application.',
    Email: 'E-mail',
    Password: 'Mot de passe',
    'Work in Progress': 'En cours de développement',
    'Salon Appointment Booking System': 'Système de prise de rendez-vous pour salon',
    'A real-time booking system built for a small hair & beauty salon, replacing a paper notebook that was causing double-bookings and scheduling mistakes. Covers the complete client-facing flow: service and stylist selection, live slot availability, and booking confirmation — with no app download or account required.': 'Un système de réservation en temps réel créé pour un petit salon de coiffure et de beauté. Il remplace un carnet papier qui provoquait des doubles réservations et des erreurs de planning. Il couvre tout le parcours client : choix du service et du coiffeur, disponibilités en direct et confirmation, sans téléchargement ni compte requis.',
    'Real-time inventory tracking per product and warehouse': 'Suivi des stocks en temps réel par produit et par entrepôt',
    'Automatic stock deduction and restoration on orders and cancellations': 'Déduction et restauration automatiques du stock lors des commandes et annulations',
    'Race-condition-safe transactions with row locking and database protection': 'Transactions protégées contre les conflits avec verrouillage des lignes et protection de la base de données',
    'Full stock transaction audit trail for incoming and outgoing movement': 'Historique complet des transactions de stock pour les mouvements entrants et sortants',
    'Order lifecycle management from Pending to Processing to Completed': 'Gestion du cycle de vie des commandes, de En attente à En traitement puis Terminée',
    'Role-based access with Admin and Employee experiences': 'Accès par rôles avec des espaces Admin et Employé',
    "Custom availability engine that converts a stylist's schedule and existing bookings into open time slots": 'Moteur de disponibilités qui transforme le planning du coiffeur et les réservations existantes en créneaux libres',
    'Race-condition-safe booking using database transactions with row locking, so two clients can never double-book the same slot': 'Réservation protégée contre les conflits grâce aux transactions et au verrouillage des lignes, pour empêcher deux clients de réserver le même créneau',
    "Server-side re-validation of every booking before it's saved, never trusting the client's submitted time slot": 'Revalidation côté serveur de chaque réservation avant son enregistrement, sans faire confiance au créneau envoyé par le client',
    'Multi-step session-backed booking wizard with guarded steps': 'Assistant de réservation multi-étapes basé sur la session, avec des étapes protégées',
    'Owner/staff admin dashboard in progress': 'Tableau de bord administrateur pour le propriétaire et le personnel en cours de développement',
    "Let's talk about opportunities.": 'Parlons des opportunités.',
    Name: 'Nom',
    'Your name': 'Votre nom',
    Message: 'Message',
    'Write your message': 'Écrivez votre message',
    'Send Message': 'Envoyer le message',
    'This static site uses a simple mailto fallback; connect EmailJS or Formspree later if needed.': 'Ce site statique utilise un simple lien mailto ; EmailJS ou Formspree pourra être ajouté plus tard si nécessaire.',
    '© 2026 Taha Touil. Built with pure HTML, CSS, and JavaScript.': '© 2026 Taha Touil. Créé uniquement avec HTML, CSS et JavaScript.',
  },
};

const deviceLocale = navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
const savedLocale = localStorage.getItem('portfolio-language');
const locale = savedLocale === 'en' || savedLocale === 'fr' ? savedLocale : deviceLocale;
const isFrench = locale === 'fr';

function translatePage() {
  document.documentElement.lang = locale;
  languageToggle.textContent = isFrench ? 'EN' : 'FR';
  languageToggle.setAttribute('aria-label', isFrench ? 'Switch to English' : 'Passer en français');
  languageToggle.setAttribute('title', isFrench ? 'Switch to English' : 'Passer en français');
  if (!isFrench) return;

  const dictionary = translations.fr;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node;

  while ((node = walker.nextNode())) textNodes.push(node);

  textNodes.forEach((textNode) => {
    const source = textNode.textContent.trim().replace(/\s+/g, ' ');
    if (dictionary[source]) textNode.textContent = textNode.textContent.replace(textNode.textContent.trim(), dictionary[source]);
  });

  const attributes = {
    title: 'Taha Touil | Développeur backend (Laravel & PHP)',
    description: 'Taha Touil est un développeur web backend spécialisé en Laravel et PHP.',
  };
  document.title = attributes.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', attributes.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', attributes.title);
  document.querySelector('.brand')?.setAttribute('aria-label', dictionary['Scroll to top']);
  document.querySelector('.menu-toggle')?.setAttribute('aria-label', dictionary['Toggle navigation']);
  document.querySelector('.site-nav')?.setAttribute('aria-label', dictionary['Primary navigation']);
  document.querySelectorAll('img[alt]').forEach((image) => {
    const translated = dictionary[image.getAttribute('alt')];
    if (translated) image.setAttribute('alt', translated);
  });
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach((input) => {
    const translated = dictionary[input.getAttribute('placeholder')];
    if (translated) input.setAttribute('placeholder', translated);
  });
}

translatePage();

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


function initBrandScrollTop() {
  brandLink?.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initTypingEffect() {
  const phrases = isFrench
    ? [
      'des applications web Laravel complètes.',
      'des panneaux d’administration avec Filament.',
      'des applications rendues côté serveur avec Blade et Livewire.',
      'des systèmes backend fiables à partir de zéro.',
    ]
    : [
      'complete Laravel web applications.',
      'role-based admin panels with Filament.',
      'server-rendered apps with Blade & Livewire.',
      'reliable backend systems from scratch.',
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

function initLanguageToggle() {
  languageToggle?.addEventListener('click', () => {
    localStorage.setItem('portfolio-language', isFrench ? 'en' : 'fr');
    window.location.reload();
  });
}

function initCopyCredentials() {
  copyButton?.addEventListener('click', async () => {
    const textToCopy = 'Email: admin@gmail.com\nPassword: passwordAaBb';
    try {
      await navigator.clipboard.writeText(textToCopy);
      copyFeedback.textContent = isFrench ? 'Copié !' : 'Copied!';
      copyButton.textContent = isFrench ? 'Copié' : 'Copied';
      setTimeout(() => {
        copyFeedback.textContent = isFrench
          ? translations.fr['Use these credentials on the demo page to explore the app.']
          : 'Use these credentials on the demo page to explore the app.';
        copyButton.textContent = isFrench ? translations.fr.Copy : 'Copy';
      }, 1800);
    } catch (error) {
      copyFeedback.textContent = isFrench
        ? 'L’accès au presse-papiers est indisponible dans ce navigateur.'
        : 'Clipboard access is unavailable in this browser.';
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
    const subject = encodeURIComponent(isFrench ? `Contact portfolio de ${name}` : `Portfolio contact from ${name}`);
    const body = encodeURIComponent(isFrench
      ? `Nom : ${name}\nE-mail : ${email}\n\nMessage :\n${message}`
      : `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:tahatouiloffi@gmail.com?subject=${subject}&body=${body}`;
  });
}

initNav();
initTypingEffect();
initScrollAnimations();
initMobileNav();
initLanguageToggle();
initCopyCredentials();
initContactForm();
initBrandScrollTop();
