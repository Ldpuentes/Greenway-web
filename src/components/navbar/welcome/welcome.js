import anime from "animejs";

/** initWelcomeAnimations(rootEl, { mode: "trigger" | "scrub" }) */
export function initWelcomeAnimations(rootEl, opts = {}) {
  if (!rootEl) return () => {};
  const mode = opts.mode === "scrub" ? "scrub" : "trigger";

  const titleWrap  = rootEl.querySelector(".gw-title");
  const lines      = Array.from(rootEl.querySelectorAll(".gw-line"));
  const underline  = rootEl.querySelector(".gw-underline");
  const tagline    = rootEl.querySelector(".gw-tagline");
  const particlesCt= rootEl.querySelector(".gw-particles");

  // --- Split letters (una sola vez)
  if (titleWrap && titleWrap.dataset.split !== "done") {
    lines.forEach(line => {
      const parts = [];
      line.childNodes.forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) {
          [...n.textContent].forEach(ch => {
            const span = document.createElement("span");
            span.className = "gw-letter";
            span.textContent = ch;
            parts.push(span);
          });
        } else parts.push(n.cloneNode(true));
      });
      line.replaceChildren(...parts);
    });
    titleWrap.dataset.split = "done";
  }
  const lettersByLine = lines.map(l => Array.from(l.querySelectorAll(".gw-letter")));

  // --- Partículas decorativas
  const dotsCount = 18;
  for (let i = 0; i < dotsCount; i++) {
    const d = document.createElement("div");
    d.className = "gw-dot";
    d.style.left = `${anime.random(4, 96)}%`;
    d.style.top  = `${anime.random(60, 90)}%`;
    particlesCt.appendChild(d);
  }
  const dots = Array.from(rootEl.querySelectorAll(".gw-dot"));

  // --- Timeline base (sin autoplay si usas scroll-scrub)
  const tl = anime.timeline({ autoplay: mode !== "scrub", easing: "easeOutQuad" });

  // Línea 1
  if (lettersByLine[0]?.length) {
    tl.add({
      targets: lettersByLine[0],
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 700,
      delay: anime.stagger(26),
    }, 0);
  } else if (lines[0]) {
    tl.add({ targets: lines[0], opacity: [0, 1], translateY: [24, 0], duration: 600 }, 0);
  }

  // Línea 2 (GreenWay)
  if (lettersByLine[1]?.length) {
    tl.add({
      targets: lettersByLine[1],
      opacity: [0, 1],
      translateY: [28, 0],
      scale: [{ value: 0.96 }, { value: 1 }],
      duration: 760,
      delay: anime.stagger(28),
    }, "+=80");
  } else if (lines[1]) {
    tl.add({ targets: lines[1], opacity: [0, 1], translateY: [28, 0], duration: 640 }, "+=80");
  }

  // Subrayado
  if (underline){
    tl.add({ targets: underline, width: ["0%", "60%"], duration: 650 }, "-=180");
  }

  // Tagline (entrada inicial)
  if (tagline){
    tl.add({
      targets: tagline,
      opacity: [0, 1],
      translateY: [16, 0],
      scale: [{ value: 0.96 }, { value: 1 }],
      duration: 620
    }, "-=60");
  }

  // Partículas en loop (arrancan cuando el componente está visible)
  const leafAnims = dots.map((dot, idx) => anime({
    targets: dot,
    opacity: [{ value: 1, duration: 400 }, { value: 0, duration: 800 }],
    translateY: [{ value: -anime.random(60, 120), duration: anime.random(2200, 3400) }],
    translateX: [
      { value: anime.random(-14, 14), duration: anime.random(1200, 1600) },
      { value: anime.random(-8, 8), duration: anime.random(1200, 1600) },
    ],
    easing: "easeInOutSine",
    delay: idx * 90,
    loop: true,
    direction: "alternate",
    autoplay: false
  }));

  // ====== CONTROL DE ENTRADA (trigger o scrub) ======
  let io, rafId, onScrollScrub, playingParticles = false;

  if (mode === "trigger") {
    io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.intersectionRatio >= 0.3) {
            tl.play();
            if (!playingParticles) { leafAnims.forEach(a => a.play()); playingParticles = true; }
            io.disconnect();
          }
        });
      },
      { threshold: [0, 0.3, 1] }
    );
    io.observe(rootEl);
  } else {
    // SCRUB: timeline.seek basado en posición del bloque
    const total = () => tl.duration || 1;
    onScrollScrub = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = rootEl.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const start = vh * 0.9;
        const end = vh * 0.2 + rect.height;
        const y = start - rect.top;
        let p = y / (start + rect.height - end);
        p = Math.max(0, Math.min(1, p));
        tl.seek(p * total());
        if (!playingParticles && p > 0) { leafAnims.forEach(a => a.play()); playingParticles = true; }
      });
    };
    onScrollScrub();
    window.addEventListener("scroll", onScrollScrub, { passive: true });
    window.addEventListener("resize", onScrollScrub);
  }

  // ====== NUEVO: Mostrar/Ocultar tagline según dirección de scroll ======
  let lastY = window.scrollY;
  let tagState = "shown"; // "shown" | "hidden"
  let rafDir, onScrollDir;

  const hideTagline = () => {
    if (!tagline || tagState === "hidden") return;
    tagState = "hiding";
    anime({
      targets: tagline,
      opacity: 0,
      translateY: 24,
      duration: 260,
      easing: "easeOutQuad",
      complete: () => { tagState = "hidden"; }
    });
  };

  const showTagline = () => {
    if (!tagline || tagState === "shown") return;
    tagState = "showing";
    anime({
      targets: tagline,
      opacity: 1,
      translateY: 0,
      duration: 280,
      easing: "easeOutQuad",
      complete: () => { tagState = "shown"; }
    });
  };

  // Solo reaccionar cuando el componente esté en viewport (para no parpadear fuera de pantalla)
  const inViewport = () => {
    const r = rootEl.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return r.top < vh * 0.85 && r.bottom > vh * 0.15;
    // puedes ajustar los porcentajes si quieres más o menos sensibilidad
  };

  onScrollDir = () => {
    cancelAnimationFrame(rafDir);
    rafDir = requestAnimationFrame(() => {
      const y = window.scrollY;
      const down = y > lastY + 2;
      const up   = y < lastY - 2;

      if (inViewport()) {
        if (down) hideTagline();
        else if (up) showTagline();
      }
      lastY = y;
    });
  };

  // Activa control de dirección siempre
  window.addEventListener("scroll", onScrollDir, { passive: true });

  // Limpieza
  const cleanup = () => {
    try { io && io.disconnect(); } catch {}
    if (onScrollScrub) {
      window.removeEventListener("scroll", onScrollScrub);
      window.removeEventListener("resize", onScrollScrub);
    }
    window.removeEventListener("scroll", onScrollDir);
    cancelAnimationFrame(rafId);
    cancelAnimationFrame(rafDir);
    anime.running.forEach(a => a.pause && a.pause());
    dots.forEach(d => d.remove());
  };

  return cleanup;
}

export function destroyWelcomeAnimations(cleanupFn) {
  if (typeof cleanupFn === "function") cleanupFn();
}
