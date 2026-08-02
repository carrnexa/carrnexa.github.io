/**
 * Theme Management and Dynamic Year Display.
 *
 * This script handles the following functionalities:
 * 1. Initializes the theme based on user preference or system settings.
 * 2. Updates the footer with the current year.
 * 3. Updates the theme color meta tag to match the active theme.
 */

function getThemeColorFromCss() {
  return getComputedStyle(document.documentElement).getPropertyValue("--color-theme-meta").trim();
}

function updateThemeColorMeta() {
  const themeColorMeta = document.getElementById("theme-color-meta");
  if (!themeColorMeta) {
    return;
  }

  const themeColor = getThemeColorFromCss();
  if (themeColor) {
    themeColorMeta.setAttribute("content", themeColor);
  }
}

function readStoredTheme() {
  try {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : null;
  } catch {
    return null;
  }
}

function writeStoredTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Ignore storage access failures and keep the theme change in-memory.
  }
}

// Initialize theme meta tag on page load
(function initializeTheme() {
  updateThemeColorMeta();
})();

/**
 * Update the footer with the current year.
 */
function initializeYearDisplay() {
  const currentYearElement = document.getElementById("current-year");

  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Set up theme toggle functionality.
 */
function initializeThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");

  if (!themeToggle) {
    console.warn("Theme toggle element not found");
    return;
  }

  // Determine current effective theme
  const currentTheme = readStoredTheme() ?? document.documentElement.getAttribute("data-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkMode = currentTheme === "dark" || (!currentTheme && prefersDark);

  themeToggle.checked = isDarkMode;

  // Handle theme changes
  themeToggle.addEventListener("change", () => {
    const newTheme = themeToggle.checked ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    writeStoredTheme(newTheme);

    updateThemeColorMeta();
  });
}

/**
 * Initialize all functions once the DOM is fully loaded.
 */
function onDOMReady() {
  initializeYearDisplay();
  initializeThemeToggle();
  updateThemeColorMeta(); // Safety check in case js runs before CSS is fully applied
}

// Initialize the script when the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onDOMReady);
} else {
  // DOM already loaded
  onDOMReady();
}
