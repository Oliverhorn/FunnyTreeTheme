export default class NavHoverIntent {
  init() {
    this.timeout = null;
    this.el.addEventListener("mouseenter", () => this.toggle(true));
    this.el.addEventListener("mouseleave", () => this.toggle(false));
  }
  toggle(state) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.el.classList.toggle("is-hover", state);
    }, 80);
  }
}
