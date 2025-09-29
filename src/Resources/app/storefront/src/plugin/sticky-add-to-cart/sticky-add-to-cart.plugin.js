export default class StickyAddToCart {
  init() {
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, { passive: true });
    this.onScroll();
  }
  onScroll() {
    const trigger = document.querySelector("[data-buy-widget]");
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const stuck = rect.bottom < 0;
    this.el.classList.toggle("is-visible", stuck);
  }
  destroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
}
