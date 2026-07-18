/* ============================================================
   SS TAXY — SITE SCRIPT
   Reads everything from CONFIG (js/config.js) so content, rates,
   and contact details stay in one place. Split into small render
   functions per section — safe to call even if a section's
   container isn't present on the current page.
   ============================================================ */

(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function waLink(message) {
    const text = encodeURIComponent(message || CONFIG.contact.whatsappDefaultMessage);
    return `https://wa.me/${CONFIG.contact.phoneRaw}?text=${text}`;
  }

  /* ---------- Header / contact details ---------- */
  function renderContactBits() {
    $$("#headerPhone").forEach((el) => {
      el.textContent = CONFIG.contact.phoneDisplay;
      el.setAttribute("href", `tel:+${CONFIG.contact.phoneRaw}`);
    });
    $$("#footerTagline").forEach((el) => {
      el.textContent = CONFIG.brand.tagline + ".";
    });
    $$("#footerCopy").forEach((el) => {
      el.textContent = `© ${new Date().getFullYear()} ${CONFIG.brand.legalName}. All rights reserved.`;
    });
    $$("#waFloat, #heroWaBtn, #ctaWaBtn").forEach((el) => {
      if (el) el.setAttribute("href", waLink());
    });
    const callBtn = $("#ctaCallBtn");
    if (callBtn) callBtn.setAttribute("href", `tel:+${CONFIG.contact.phoneRaw}`);

    const socialRow = $("#socialRow");
    if (socialRow) {
      const icons = {
        facebook: "f",
        instagram: "IG",
        youtube: "YT",
        linkedin: "in",
      };
      socialRow.innerHTML = Object.entries(CONFIG.social)
        .map(([key, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${key}">${icons[key] || "•"}</a>`)
        .join("");
    }

    const infoList = $("#contactInfoList");
    if (infoList) {
      infoList.innerHTML = `
        <li><span class="label">Phone</span><a href="tel:+${CONFIG.contact.phoneRaw}">${CONFIG.contact.phoneDisplay}</a></li>
        <li><span class="label">WhatsApp</span><a href="${waLink()}" target="_blank" rel="noopener">Message dispatch</a></li>
        <li><span class="label">Email</span><a href="mailto:${CONFIG.contact.email}">${CONFIG.contact.email}</a></li>
        <li><span class="label">Address</span><span>${CONFIG.contact.address}</span></li>
        <li><span class="label">Hours</span><span>${CONFIG.contact.hours}</span></li>
      `;
    }
  }

  /* ---------- Fleet ---------- */
  const fleetIcons = {
    sedan: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5"/><rect x="2" y="13" width="20" height="6" rx="1"/><circle cx="7" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg>',
    suv: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 13l1.5-6A2 2 0 0 1 5.4 6h13.2a2 2 0 0 1 1.9 1.4L22 13"/><rect x="1.5" y="13" width="21" height="6" rx="1"/><circle cx="6.5" cy="19" r="1.5"/><circle cx="17.5" cy="19" r="1.5"/></svg>',
    premium: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12l2-6a2 2 0 0 1 2-1.4h12a2 2 0 0 1 2 1.4l2 6"/><rect x="1.5" y="12" width="21" height="7" rx="1.5"/><circle cx="6.5" cy="19.5" r="1.7"/><circle cx="17.5" cy="19.5" r="1.7"/></svg>',
  };

  function renderFleet() {
    const grid = $("#fleetGrid");
    if (!grid) return;
    grid.innerHTML = CONFIG.fleet
      .map(
        (v) => `
      <div class="fleet-card">
        <div class="fleet-icon">${fleetIcons[v.icon] || ""}</div>
        <h3>${v.name}</h3>
        <div class="fleet-cap">${v.capacity}</div>
        <p class="desc">${v.bestFor}</p>
        <div class="fleet-rate">
          <span class="amount">₹${v.rate}<span>/km</span></span>
          <a class="btn btn-ghost" href="${waLink(`Hi SS TAXY, I'd like to book the ${v.name} (${v.capacity}). My pickup city is ___ and destination is ___.`)}" target="_blank" rel="noopener">Book</a>
        </div>
      </div>`
      )
      .join("");
  }

  /* ---------- Routes ---------- */
  function renderRoutes() {
    const grid = $("#routeGrid");
    if (!grid) return;
    grid.innerHTML = CONFIG.routes
      .map(
        (r) => `
      <a class="ticket" href="${waLink(`Hi SS TAXY, I'd like a fare quote from ${r.from} to ${r.to}.`)}" target="_blank" rel="noopener">
        <div class="ticket-main">
          <div class="ticket-route">${r.from} <span class="arrow">→</span> ${r.to}</div>
          <div class="ticket-meta">
            <span>${r.distanceKm} km</span>
            <span>${r.vehicle}</span>
          </div>
        </div>
        <div class="ticket-stub">
          <span class="rate">₹${r.startingFare}</span>
          <span class="rate-label">per km, starting</span>
        </div>
      </a>`
      )
      .join("");
  }

  /* ---------- Services ---------- */
  function renderServices() {
    const grid = $("#serviceGrid");
    if (!grid) return;
    grid.innerHTML = CONFIG.services
      .map(
        (s) => `
      <div class="service-card">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="rate-from">From ₹${s.rateFrom}${s.unit || "/km"}</div>
      </div>`
      )
      .join("");
  }

  /* ---------- FAQ ---------- */
  function renderFaq() {
    const list = $("#faqList");
    if (!list) return;
    list.innerHTML = CONFIG.faqs
      .map(
        (f, i) => `
      <div class="faq-item" data-idx="${i}">
        <button class="faq-q" aria-expanded="false">
          <span>${f.q}</span>
          <span class="plus">+</span>
        </button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`
      )
      .join("");

    $$(".faq-item", list).forEach((item) => {
      const btn = $(".faq-q", item);
      const answer = $(".faq-a", item);
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        item.classList.toggle("open", !isOpen);
        btn.setAttribute("aria-expanded", String(!isOpen));
        answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : "0px";
      });
    });
  }

  /* ---------- Testimonials ---------- */
  function renderTestimonials() {
    const track = $("#testimonialTrack");
    if (!track) return;
    track.innerHTML = CONFIG.testimonials
      .map(
        (t) => `
      <div class="testimonial-card">
        <p class="quote">"${t.quote}"</p>
        <div class="who">${t.name} — ${t.city}</div>
      </div>`
      )
      .join("");
  }

  /* ---------- Nav toggle ---------- */
  function initNav() {
    const toggle = $("#navToggle");
    const links = $("#navLinks");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    $$("#navLinks a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
  }

  /* ---------- Booking tabs (visual only — same form underneath) ---------- */
  function initBookingTabs() {
    const tabs = $$(".booking-tabs button");
    if (!tabs.length) return;
    tabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabs.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  /* ---------- Booking form -> WhatsApp ---------- */
  function initBookingForm() {
    const form = $("#bookingForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const pickup = $("#pickup").value.trim();
      const drop = $("#drop").value.trim();
      const date = $("#date").value;
      const vehicle = $("#vehicle").value;
      const phone = $("#phone").value.trim();
      const msg = `Hi SS TAXY, I'd like to book a cab.\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${date || "flexible"}\nVehicle: ${vehicle}\nCall me back on: ${phone}`;
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  function initContactForm() {
    const form = $("#contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#cName").value.trim();
      const phone = $("#cPhone").value.trim();
      const message = $("#cMsg").value.trim();
      const msg = `Hi SS TAXY, my name is ${name} (${phone}).\n${message}`;
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const els = $$("[data-reveal]");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderContactBits();
    renderFleet();
    renderRoutes();
    renderServices();
    renderFaq();
    renderTestimonials();
    initNav();
    initBookingTabs();
    initBookingForm();
    initContactForm();
    initReveal();
  });
})();
