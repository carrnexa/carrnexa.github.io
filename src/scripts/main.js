/**
 * Theme Management
 * Handles dark/light theme switching and persistence
 * Uses data-theme attribute with CSS prefers-color-scheme
 */

// Theme color constants (match CSS variables)
const THEME_COLORS = {
  dark: "#1c2833",
  light: "#f4f6f6",
};

// Initialize theme meta tag on page load
(function initializeTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const effectiveTheme = currentTheme || (prefersDark ? "dark" : "light");
  const themeColorMeta = document.getElementById("theme-color-meta");

  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", THEME_COLORS[effectiveTheme]);
  }
})();

/**
 * DOM Ready Handler
 * Executes when DOM is fully loaded
 */
function onDOMReady() {
  initializeYearDisplay();
  initializeThemeToggle();
}

/**
 * Update footer with current year
 */
function initializeYearDisplay() {
  const currentYearElement = document.getElementById("current-year");

  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Setup theme toggle functionality
 */
function initializeThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeColorMeta = document.getElementById("theme-color-meta");

  if (!themeToggle) {
    console.warn("Theme toggle element not found");
    return;
  }

  // Determine current effective theme
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkMode = currentTheme === "dark" || (!currentTheme && prefersDark);

  themeToggle.checked = isDarkMode;

  // Handle theme changes
  themeToggle.addEventListener("change", () => {
    const newTheme = themeToggle.checked ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", THEME_COLORS[newTheme]);
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onDOMReady);
} else {
  // DOM already loaded
  onDOMReady();
}
