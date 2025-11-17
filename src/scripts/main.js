/**
 * Theme Management
 * Handles dark/light theme switching and persistence
 */

// Initialize theme before page render to prevent flash
(function initializeTheme() {
  const theme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themeColorMeta = document.getElementById("theme-color-meta");

  const isDark = theme === "dark" || (!theme && prefersDark);

  document.documentElement.classList.toggle("dark", isDark);

  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", isDark ? "#1C2833" : "#F4F6F6");
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

  // Sync checkbox with current theme
  const isDarkMode = document.documentElement.classList.contains("dark");
  themeToggle.checked = isDarkMode;

  // Handle theme changes
  themeToggle.addEventListener("change", () => {
    const isDark = themeToggle.checked;

    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", isDark ? "#1C2833" : "#F4F6F6");
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
