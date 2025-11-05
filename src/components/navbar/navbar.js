import anime from 'animejs' // o 'animejs/lib/anime.es.js'

export function initNavbarAnimations(rootEl){
  if(!rootEl) return;

  const logo = rootEl.querySelector('.gw-icon');
  const links = rootEl.querySelectorAll('.gw-link');
  const underline = rootEl.querySelector('.gw-underline');
  const menu = rootEl.querySelector('.gw-menu');

  if (links.length){
    anime({
      targets: links,
      translateY: [12, 0],
      opacity: [0, 1],
      delay: anime.stagger(70, { start: 120 }),
      duration: 520,
      easing: 'easeOutQuad'
    });
  }

  if (logo){
    anime({
      targets: logo,
      scale: [{ value: 1.06, duration: 900 }, { value: 1, duration: 900 }],
      easing: 'easeInOutSine',
      loop: true,
      delay: 300
    });
  }

  if (menu && underline){
    const moveUnderline = (el) => {
      const menuRect = menu.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      const left = rect.left - menuRect.left;
      anime({
        targets: underline,
        width: rect.width,
        translateX: left,
        opacity: 1,
        duration: 260,
        easing: 'easeOutCubic'
      });
    };
    links.forEach(link => link.addEventListener('mouseenter', () => moveUnderline(link)));
    menu.addEventListener('mouseleave', () => {
      anime({ targets: underline, opacity: 0, duration: 180, easing: 'easeOutCubic' });
    });
  }
}

/** timelines robustos (sin begin/complete) */
export function createMobileTimelines({ overlayEl, panelEl }){
  // Si no hay nodos, devolvemos no-ops
  if (!overlayEl || !panelEl) {
    const noop = { play(){}, pause(){}, seek(){}, restart(){} };
    return { openTl: noop, closeTl: noop };
  }

  // Estado inicial garantizado
  overlayEl.style.opacity = 0;
  panelEl.style.transform = 'translateX(100%)';

  const mobileLinks = panelEl.querySelectorAll('a');

  const openTl = anime.timeline({ autoplay: false })
    .add({
      targets: overlayEl,
      opacity: [0, 1],
      duration: 200,
      easing: 'easeOutQuad'
    })
    .add({
      targets: panelEl,
      translateX: ['100%', '0%'],
      duration: 320,
      easing: 'easeOutCubic'
    }, 0)
    .add({
      targets: mobileLinks,
      translateX: [12, 0],
      opacity: [0, 1],
      delay: anime.stagger(50),
      duration: 260,
      easing: 'easeOutCubic'
    }, 80);

  const closeTl = anime.timeline({ autoplay: false })
    .add({
      targets: panelEl,
      translateX: ['0%', '100%'],
      duration: 280,
      easing: 'easeInCubic'
    })
    .add({
      targets: overlayEl,
      opacity: [1, 0],
      duration: 200,
      easing: 'easeInQuad'
    }, 0);

  return { openTl, closeTl };
}

/** binding a prueba de fallos */
/** binding a prueba de fallos + dispose para cleanup */
export function bindMobileInteractions(rootEl, timelines, refs) {
  const { overlayEl: overlayFromRefs, panelEl: panelFromRefs } = refs ?? {};
  const { openTl, closeTl } = timelines || {};
  const burger = rootEl?.querySelector('.gw-burger');
  const navEl  = rootEl; // <nav class="gw-navbar">

  const overlayEl = overlayFromRefs || document.querySelector('.gw-overlay');
  const panelEl   = panelFromRefs   || document.querySelector('.gw-mobile');
  if (!burger || !overlayEl || !panelEl || !openTl || !closeTl) return;

  if (burger.dataset.bound === '1') return;
  burger.dataset.bound = '1';

  if (overlayEl.style.opacity === '') overlayEl.style.opacity = 0;
  if (panelEl.style.transform === '') panelEl.style.transform = 'translateX(100%)';
  burger.setAttribute('aria-expanded', 'false');

  const isOpen = () => panelEl.getAttribute('data-open') === 'true';

  const open = () => {
    document.documentElement.classList.add('gw-mobile-open');
    try { closeTl.pause(); openTl.seek(0); openTl.play(); } catch {}
    panelEl.setAttribute('data-open', 'true');
    burger.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    try { openTl.pause(); closeTl.seek(0); closeTl.play(); } catch {}
    panelEl.removeAttribute('data-open');
    document.documentElement.classList.remove('gw-mobile-open');
    burger.setAttribute('aria-expanded', 'false');
  };

  const toggle = () => (isOpen() ? close() : open());

  const onBurger  = () => toggle();
  const onOverlay = () => close();
  const onKeydown = (e) => { if (e.key === 'Escape' && isOpen()) close(); };

  // 👇 NUEVO: cerrar al hacer click FUERA de nav/panel (útil si no tocan el overlay)
  const onDocumentClick = (e) => {
    if (!isOpen()) return;
    const t = e.target;
    // si el click NO fue dentro del nav ni dentro del panel → cerrar
    if (!navEl.contains(t) && !panelEl.contains(t)) close();
  };

  // Evitar que clicks dentro del panel/burger propaguen al documento y disparen cierre
  const stop = (e) => e.stopPropagation();
  burger.addEventListener('click', onBurger);
  burger.addEventListener('click', stop);
  panelEl.addEventListener('click', stop);

  overlayEl.addEventListener('click', onOverlay);
  const linkNodes = Array.from(panelEl.querySelectorAll('a'));
  linkNodes.forEach((a) => a.addEventListener('click', onOverlay));
  window.addEventListener('keydown', onKeydown);

  // Escucha global (modo captura para priorizar el cierre)
  document.addEventListener('click', onDocumentClick, true);

  const dispose = () => {
    burger.removeEventListener('click', onBurger);
    burger.removeEventListener('click', stop);
    panelEl.removeEventListener('click', stop);
    overlayEl.removeEventListener('click', onOverlay);
    linkNodes.forEach((a) => a.removeEventListener('click', onOverlay));
    window.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onDocumentClick, true);
    delete burger.dataset.bound;
  };

  return { open, close, toggle, dispose };
}
