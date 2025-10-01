document.addEventListener("DOMContentLoaded", () => {
  const onScroll = () => {
    if (window.scrollY > 4) {
      document.body.classList.add("is-scrolled");
    } else {
      document.body.classList.remove("is-scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Falls direkt unter dem Header ein Hero steht, gib dem Body eine Klasse
  const hero = document.querySelector(
    ".ft-hero-section, .cms-block-hero, .js-ft-hero"
  );
  if (hero) document.body.classList.add("is-over-hero");
});
