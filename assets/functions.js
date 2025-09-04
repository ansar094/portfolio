// --- Always reload at the top ---
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", () => {
  // Always reset scroll before leaving
  window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
  // Remove hash if present
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
  // Force scroll to top
  window.scrollTo(0, 0);
});

// --- Glowing Cursor Effect ---
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Set a CSS variable for glow position
  document.documentElement.style.setProperty("--cursor-x", x + "px");
  document.documentElement.style.setProperty("--cursor-y", y + "px");
});
