const PluginManager = window.PluginManager;

import "./main/header-state.js";

import StickyAddToCart from "./plugin/sticky-add-to-cart/sticky-add-to-cart.plugin";
import NavHoverIntent from "./plugin/nav-hover-intent/nav-hover-intent.plugin";

PluginManager.register(
  "StickyAddToCart",
  StickyAddToCart,
  "[data-sticky-add-to-cart]"
);
PluginManager.register(
  "NavHoverIntent",
  NavHoverIntent,
  "[data-nav-hover-intent]"
);
