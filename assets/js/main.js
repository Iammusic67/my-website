/* ============================================================
   MAIN.JS — Populates the page from SITE_CONTENT
   ============================================================ */
(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => [...(root || document).querySelectorAll(sel)];
  const el = (tag, attrs, children) => {
    const node = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    if (typeof children === "string") node.innerHTML = children;
    else if (Array.isArray(children)) children.forEach((c) => c && node.appendChild(c));
    return node;
  };

  /* ---------- populate static text ---------- */
  const C = window.SITE_CONTENT;
  if (!C) return;

  // Title + meta
  document.title = `${C.name} — ${C.role}`;
  const metaDesc = $('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", C.tagline);

  // Hero
  setText("#hero-eyebrow", C.hero.eyebrow);
  setText("#hero-headline", C.hero.headline);
  setText("#hero-subtext", C.hero.subtext);
  setCTA("#hero-cta-primary", C.hero.primaryCta);
  setCTA("#hero-cta-secondary", C.hero.secondaryCta);

  // About
  setText("#about-heading", C.about.heading);
  const aboutContainer = $("#about-paragraphs");
  if (aboutContainer) {
    aboutContainer.innerHTML = "";
    C.about.paragraphs.forEach((p) => {
      aboutContainer.appendChild(el("p", null, p));
    });
  }
  const avatar = $("#avatar-initials");
  if (avatar) {
    const initials = C.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    avatar.textContent = initials;
  }

  // Education
  setText("#education-heading", C.education.heading);
  const eduEntries = $("#education-entries");
  if (eduEntries && C.education) {
    eduEntries.innerHTML = "";
    C.education.entries.forEach((entry) => {
      const card = el("div", { class: "edu-card" }, [
        el("h3", null, entry.institution),
        el("div", { class: "edu-meta" }, `${entry.location} · ${entry.period}`),
        el("div", { class: "edu-qual" }, entry.qualification),
      ]);
      if (entry.details && entry.details.length) {
        const ul = el("ul", { class: "edu-details" }, null);
        entry.details.forEach((d) => ul.appendChild(el("li", null, d)));
        card.appendChild(ul);
      }
      eduEntries.appendChild(card);
    });
    if (C.education.aspiration) {
      setText("#education-aspiration", C.education.aspiration);
    }
  }

  // Timeline
  const timeline = $("#timeline-list");
  if (timeline) {
    timeline.innerHTML = "";
    C.journey.forEach((item) => {
      const li = el("li", null, [
        el("span", { class: "tl-date" }, item.date),
        el("h3", null, item.title),
        el("p", null, item.description),
      ]);
      timeline.appendChild(li);
    });
  }

  // Skills
  setText("#skills-heading", C.skills.heading);
  const skillTags = $("#skills-tags");
  if (skillTags) {
    skillTags.innerHTML = "";
    C.skills.tags.forEach((t) => skillTags.appendChild(el("span", null, t)));
  }

  // Certificates
  const certGrid = $("#cert-grid");
  if (certGrid) {
    certGrid.innerHTML = "";
    C.certificates.forEach((cert) => {
      const card = el("div", { class: "cert-card" }, [
        el("h4", null, cert.title),
        el("div", { class: "cert-meta" }, `${cert.issuer} · ${cert.date}`),
      ]);
      if (cert.screenshot) {
        const img = el("a", { href: cert.file || "#", target: "_blank", rel: "noopener" }, [
          el("img", { class: "cert-screenshot", src: cert.screenshot, alt: `${cert.title} certificate`, loading: "lazy" }),
        ]);
        card.appendChild(img);
      }
      if (cert.file) {
        card.appendChild(
          el(
            "a",
            { class: "btn-small", href: cert.file, target: "_blank", rel: "noopener" },
            "View certificate ↗"
          )
        );
      } else if (!cert.screenshot) {
        card.appendChild(el("span", { class: "cert-placeholder" }, "Certificate pending upload"));
      }
      certGrid.appendChild(card);
    });
  }

  // Projects
  const projectGrid = $("#project-grid");
  if (projectGrid) {
    projectGrid.innerHTML = "";
    C.projects.forEach((proj) => {
      const tags = el(
        "div",
        { class: "project-tags" },
        proj.tags.map((t) => el("span", null, t))
      );
      const actions = el("div", { class: "project-actions" });
      if (proj.repoUrl) {
        actions.appendChild(
          el(
            "a",
            { class: "btn-small", href: proj.repoUrl, target: "_blank", rel: "noopener" },
            "Repository ↗"
          )
        );
      }
      if (proj.demoUrl) {
        actions.appendChild(
          el(
            "a",
            { class: "btn-small", href: proj.demoUrl, target: "_blank", rel: "noopener" },
            "Live demo ↗"
          )
        );
      }
      if (proj.caseStudyUrl) {
        actions.appendChild(
          el(
            "a",
            { class: "btn-small", href: proj.caseStudyUrl, target: "_blank", rel: "noopener" },
            "Case study ↗"
          )
        );
      }
      const card = el("div", { class: "project-card" }, [
        el("h3", null, proj.name),
        el("p", null, proj.description),
        tags,
        actions,
      ]);
      projectGrid.appendChild(card);
    });
  }

  // Contact
  setText("#contact-heading", C.contact.heading);
  setText("#contact-subtext", C.contact.subtext);
  const contactLinks = $("#contact-links");
  if (contactLinks) {
    contactLinks.innerHTML = "";
    const links = [];
    if (C.contact.email) {
      links.push({ label: "Email", value: C.contact.email, href: `mailto:${C.contact.email}` });
    }
    if (C.contact.github) {
      links.push({ label: "GitHub", value: C.contact.github.replace("https://", ""), href: C.contact.github });
    }
    if (C.contact.linkedin) {
      links.push({ label: "LinkedIn", value: C.contact.linkedin.replace("https://", ""), href: C.contact.linkedin });
    }
    if (C.contact.phone) {
      links.push({ label: "Phone", value: C.contact.phone, href: `tel:${C.contact.phone.replace(/\s/g, "")}` });
    }
    links.forEach((link) => {
      const a = el("a", { class: "contact-link", href: link.href, target: "_blank", rel: "noopener" }, [
        el("span", { class: "cl-label" }, link.label),
        el("span", { class: "cl-value" }, link.value),
      ]);
      contactLinks.appendChild(a);
    });
  }

  // Footer
  setText("#footer-note", C.footer.note);
  const yearEl = $("#footer-year");
  if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()}`;

  /* ---------- SVG hero graphic ---------- */
  buildAscentSVG();

  /* ---------- mobile nav ---------- */
  const toggle = $(".nav-toggle");
  const nav = $(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // close on link click
    $$("a", nav).forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- scroll-reveal ---------- */
  initReveal();

  /* ==========================================================
     FUNCTIONS
     ========================================================== */

  function setText(sel, text) {
    const node = $(sel);
    if (node) node.textContent = text;
  }
  function setCTA(sel, cta) {
    const node = $(sel);
    if (node && cta) {
      node.textContent = cta.label;
      node.setAttribute("href", cta.href);
    }
  }

  /* --- Animated "ascent" SVG --- */
  function buildAscentSVG() {
    const svg = $("#ascent-svg");
    if (!svg) return;

    const W = 420,
      H = 420;
    const cx = W / 2,
      cy = H / 2;

    // Concentric rings
    let rings = "";
    for (let r = 40; r <= 190; r += 30) {
      rings += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(244,242,237,0.05)" stroke-width="1"/>`;
    }

    // Ascending bars (like growth chart)
    const barW = 28,
      gap = 14;
    const bars = [0.3, 0.45, 0.55, 0.7, 0.82, 0.95];
    const startX = cx - ((bars.length * (barW + gap) - gap) / 2);
    let barsSVG = "";
    bars.forEach((h, i) => {
      const x = startX + i * (barW + gap);
      const barH = h * 200;
      const y = cy + 100 - barH;
      const isGold = i % 2 === 0;
      const color = isGold ? "var(--gold)" : "var(--teal)";
      const opacity = isGold ? "0.7" : "0.5";
      barsSVG += `<rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="6" fill="${color}" opacity="${opacity}">
        <animate attributeName="height" from="0" to="${barH}" dur="0.8s" begin="${0.1 * i}s" fill="freeze"/>
        <animate attributeName="y" from="${cy + 100}" to="${y}" dur="0.8s" begin="${0.1 * i}s" fill="freeze"/>
      </rect>`;
    });

    // Ascending line
    const linePoints = bars
      .map((h, i) => {
        const x = startX + i * (barW + gap) + barW / 2;
        const y = cy + 100 - h * 200;
        return `${x},${y}`;
      })
      .join(" ");
    const lineSVG = `<polyline points="${linePoints}" fill="none" stroke="var(--gold)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.8">
      <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.2s" fill="freeze"/>
    </polyline>`;

    // Center dot
    const dotSVG = `<circle cx="${cx}" cy="${cy - 60}" r="5" fill="var(--gold)">
      <animate attributeName="r" from="0" to="5" dur="0.4s" begin="0.8s" fill="freeze"/>
    </circle>`;

    svg.innerHTML = rings + barsSVG + lineSVG + dotSVG;
  }

  /* --- Scroll reveal --- */
  function initReveal() {
    var sections = $$(".section");
    if (!sections.length) return;

    // If IntersectionObserver is not available, keep everything visible
    if (!("IntersectionObserver" in window)) {
      sections.forEach(function(s) { s.style.opacity = '1'; });
      return;
    }

    sections.forEach(function(s) {
      s.style.opacity = '0';
      s.style.transform = 'translateY(24px)';
    });

    var observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02 }
    );

    sections.forEach(function(s) { observer.observe(s); });

    // Safety net: reveal everything after 2s regardless
    setTimeout(function() {
      sections.forEach(function(s) {
        s.style.transition = 'opacity 0.4s ease';
        s.style.opacity = '1';
        s.style.transform = 'translateY(0)';
      });
    }, 2000);
  }
})();
