(() => {
  if (!document.body.classList.contains("template-search")) return;

  const mq = window.matchMedia("(min-width: 1024px)");
  const hovered = new Set();

  function getItem(card) {
    return card?.querySelector?.(".productitem");
  }

  function applyOpen(card) {
    const item = getItem(card);
    if (!item) return;

    item.setAttribute("data-animation-state", "open");
    item.setAttribute("data-animation", "closed=>open");
    card.setAttribute("data-open", "");
  }

  function applyClosed(card) {
    const item = getItem(card);
    if (!item) return;

    item.setAttribute("data-animation-state", "closed");
    item.setAttribute("data-animation", "open=>closed");
    card.removeAttribute("data-open");
  }

  // Event delegation so it works even when results re-render
  document.addEventListener(
    "pointerover",
    (e) => {
      if (!mq.matches) return;
      const card = e.target.closest(".productgrid--item");
      if (!card) return;
      if (e.relatedTarget && card.contains(e.relatedTarget)) return;
      hovered.add(card);
      applyOpen(card);
    },
    true
  );

  document.addEventListener(
    "pointerout",
    (e) => {
      if (!mq.matches) return;
      const card = e.target.closest(".productgrid--item");
      if (!card) return;
      if (e.relatedTarget && card.contains(e.relatedTarget)) return;
      hovered.delete(card);
      applyClosed(card);
    },
    true
  );

  document.addEventListener(
    "focusin",
    (e) => {
      if (!mq.matches) return;
      const card = e.target.closest(".productgrid--item");
      if (!card) return;
      hovered.add(card);
      applyOpen(card);
    },
    true
  );

  document.addEventListener(
    "focusout",
    (e) => {
      if (!mq.matches) return;
      const card = e.target.closest(".productgrid--item");
      if (!card) return;
      hovered.delete(card);
      applyClosed(card);
    },
    true
  );

  // Keep open enforced while hovered (beats theme JS resets)
  function tick() {
    if (mq.matches) hovered.forEach(applyOpen);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();