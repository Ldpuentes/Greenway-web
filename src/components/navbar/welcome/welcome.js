import anime from "animejs";

/**
 * Anima líneas y letras desde abajo hacia arriba,
 * dibuja subrayado y lanza partículas sutiles ascendentes.
 */
export function initWelcomeAnimations(rootEl) {
    if (!rootEl) return () => { };
    const titleWrap = rootEl.querySelector(".gw-title");
    const lines = Array.from(rootEl.querySelectorAll(".gw-line"));
    const underline = rootEl.querySelector(".gw-underline");
    const tagline = rootEl.querySelector(".gw-tagline");
    const particlesCt = rootEl.querySelector(".gw-particles");

    // Split por letras para cada línea (si no se ha hecho)
    if (titleWrap && titleWrap.dataset.split !== "done") {
        lines.forEach(line => {
            const parts = [];
            line.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent;
                    [...text].forEach(ch => {
                        const span = document.createElement("span");
                        span.className = "gw-letter";
                        span.textContent = ch;
                        parts.push(span);
                    });
                } else {
                    parts.push(node.cloneNode(true));
                }
            });
            line.innerHTML = "";
            parts.forEach(n => line.appendChild(n));
        });
        titleWrap.dataset.split = "done";
    }

    const lettersByLine = lines.map(line => Array.from(line.querySelectorAll(".gw-letter")));

    // Partículas
    const dotsCount = 18;
    for (let i = 0; i < dotsCount; i++) {
        const d = document.createElement("div");
        d.className = "gw-dot";
        d.style.left = `${anime.random(4, 96)}%`;
        d.style.top = `${anime.random(60, 90)}%`;
        particlesCt.appendChild(d);
    }
    const dots = Array.from(rootEl.querySelectorAll(".gw-dot"));

    // Timeline principal
    const tl = anime.timeline({ autoplay: true, easing: "easeOutQuad" });

    // LÍNEA 1 (letras desde abajo)
    if (lettersByLine[0]?.length) {
        tl.add({
            targets: lettersByLine[0],
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 650,
            delay: anime.stagger(26),
        }, 0);
    } else if (lines[0]) {
        tl.add({
            targets: lines[0],
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 550
        }, 0);
    }

    // LÍNEA 2 (GreenWay) con leve rebote
    if (lettersByLine[1]?.length) {
        tl.add({
            targets: lettersByLine[1],
            opacity: [0, 1],
            translateY: [28, 0],
            scale: [{ value: 0.96 }, { value: 1 }],
            duration: 720,
            delay: anime.stagger(28),
        }, "+=80");
    } else if (lines[1]) {
        tl.add({
            targets: lines[1],
            opacity: [0, 1],
            translateY: [28, 0],
            duration: 620
        }, "+=80");
    }

    // Subrayado “dibujado”
    if (underline) {
        tl.add({
            targets: underline,
            width: ["0%", "60%"],
            duration: 650
        }, "-=180");
    }

    // Tagline
    if (tagline) {
        tl.add({
            targets: tagline,
            opacity: [0, 1],
            translateY: [16, 0],
            duration: 560
        }, "-=80");
    }

    // Partículas ascendentes en loop suave
    dots.forEach((dot, idx) => {
        const originTop = parseFloat(dot.style.top);
        anime({
            targets: dot,
            opacity: [{ value: 1, duration: 400 }, { value: .0, duration: 800 }],
            translateY: [
                { value: -anime.random(60, 120), duration: anime.random(2200, 3400) }
            ],
            translateX: [
                { value: anime.random(-14, 14), duration: anime.random(1200, 1600) },
                { value: anime.random(-8, 8), duration: anime.random(1200, 1600) }
            ],
            easing: "easeInOutSine",
            delay: idx * 90,
            loop: true,
            direction: "alternate",
            begin: () => { dot.style.top = originTop + "%"; }
        });
    });

    // Limpieza al desmontar
    const cleanup = () => {
        anime.running.forEach(a => a.pause && a.pause());
        dots.forEach(d => d.remove());
    };
    return cleanup;
}

export function destroyWelcomeAnimations(cleanupFn) {
    if (typeof cleanupFn === "function") cleanupFn();
}
