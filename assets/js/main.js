/* Kalliste Vending — site de test : interactions (sans dépendance) */

/* Adresse du formulaire Formspree (https://formspree.io) — voir README.md */
const FORM_ENDPOINT = "https://formspree.io/f/VOTRE_ID_FORMSPREE";

(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- En-tête : fond au défilement ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("is-solid", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector(".menu-toggle");
  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    }
  };
  if (toggle) {
    toggle.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
    document.querySelectorAll(".mobile-menu a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  }

  /* ---------- Apparition au défilement ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Compteurs animés ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const animate = (el) => {
    const to = Number(el.dataset.count);
    const from = Number(el.dataset.from || 0);
    const t0 = performance.now();
    const dur = 1600;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window && !reduce) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { animate(en.target); co.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => co.observe(el));
  }

  /* ---------- Parallaxe légère ---------- */
  const layers = document.querySelectorAll("[data-parallax]");
  if (layers.length && !reduce) {
    let ticking = false;
    const update = () => {
      layers.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        const raw = (r.top + r.height / 2 - innerHeight / 2) * -0.12;
        const shift = Math.max(-60, Math.min(60, raw)); // amplitude limitée
        el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.12)`;
      });
      ticking = false;
    };
    window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }

  /* ---------- Année du pied de page ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Formulaires ---------- */
  document.querySelectorAll("form.js-form").forEach((form) => {
    const status = form.querySelector(".form-status");
    const btn = form.querySelector('button[type="submit"]');
    const say = (msg, cls) => { status.textContent = msg; status.className = "form-status " + (cls || ""); };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (FORM_ENDPOINT.includes("VOTRE_ID")) {
        say("Formulaire en cours de configuration : appelez-nous au 04 95 20 31 34.", "err");
        return;
      }
      btn.disabled = true;
      say("Envoi en cours…");
      try {
        const res = await fetch(FORM_ENDPOINT, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        say("Merci ! Votre demande a bien été envoyée.", "ok");
      } catch {
        say("Oups, l'envoi a échoué. Réessayez ou appelez le 04 95 20 31 34.", "err");
      } finally {
        btn.disabled = false;
      }
    });
  });
})();
