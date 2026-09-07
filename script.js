/* ================================================================
   Gloria Nziengi Portfolio — Main Script
   ================================================================ */

(function () {
  "use strict";

  let currentLang = "fr";
  let typingInterval = null;

  // ─── Language Switcher ────────────────────────────────────────
  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update active button
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Translate all data-translate elements
    document.querySelectorAll("[data-translate]").forEach((el) => {
      const key = el.dataset.translate;
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Restart typing animation
    startTypingAnimation();
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // ─── Typing Animation ────────────────────────────────────────
  function startTypingAnimation() {
    const el = document.getElementById("typingText");
    if (!el) return;
    if (typingInterval) clearInterval(typingInterval);

    const phrases = translations[currentLang].hero_typing;
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let pauseEnd = 0;

    function tick() {
      const now = Date.now();
      if (now < pauseEnd) return;

      const phrase = phrases[phraseIdx];
      if (!isDeleting) {
        el.textContent = phrase.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === phrase.length) {
          isDeleting = true;
          pauseEnd = now + 2000;
        }
      } else {
        el.textContent = phrase.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }
    }

    typingInterval = setInterval(tick, 70);
  }

  // ─── Navbar Scroll Effect ────────────────────────────────────
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle("scrolled", scrollY > 50);

    // Active section highlighting
    document.querySelectorAll("section[id]").forEach((section) => {
      const top = section.offsetTop - 120;
      const bottom = top + section.offsetHeight;
      const link = document.querySelector(
        `.nav-links a[href="#${section.id}"]`
      );
      if (link) {
        link.classList.toggle(
          "active",
          scrollY >= top && scrollY < bottom
        );
      }
    });
    lastScroll = scrollY;
  });

  // ─── Mobile Menu ─────────────────────────────────────────────
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("mobile-open");
    document.body.classList.toggle("no-scroll");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      navLinks.classList.remove("mobile-open");
      document.body.classList.remove("no-scroll");
    });
  });

  // ─── Smooth Scroll ───────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offset = navbar.offsetHeight + 10;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // ─── Scroll-Reveal Animations ────────────────────────────────
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      ".skill-category, .project-card, .timeline-item, .contact-card, .about-grid, .stat-card, .reference-card"
    )
    .forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

  // ─── Hero Particles ──────────────────────────────────────────
  function createParticles() {
    const container = document.getElementById("heroParticles");
    if (!container) return;
    const count = window.innerWidth < 768 ? 20 : 45;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.width = particle.style.height =
        Math.random() * 4 + 1 + "px";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = Math.random() * 8 + 6 + "s";
      container.appendChild(particle);
    }
  }

  // ─── Initialize ──────────────────────────────────────────────
  createParticles();
  setLanguage("fr");
})();
