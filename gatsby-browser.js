/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
// this import causes a warning so I moved the import to layout and index.
//import 'bootstrap/dist/css/bootstrap.min.css';

exports.onClientEntry = () => {
  // Check local storage
  var localStoredTheme = localStorage.getItem("data-bs-theme")
  var themeToSet = localStoredTheme

  // If local storage is not set then check OS preference
  if (!localStoredTheme) {
    themeToSet = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }
  // Finally set the attribute to the one determined above.
  document.documentElement.setAttribute("data-bs-theme", themeToSet)
}

exports.onInitialClientRender = () => {
  const root_elem = document.documentElement
  // see what the theme is set to
  var currentTheme = root_elem.getAttribute("data-bs-theme")
  //console.log({currentTheme})
  const toggleOff = document.getElementById("toggle-off")
  const toggleOn = document.getElementById("toggle-on")
  // Set the correct icon's visiblity based on the current theme
  if (currentTheme === "dark") {
    toggleOff.classList.remove("visible")
    toggleOff.classList.add("invisible")
    toggleOn.classList.remove("invisible")
    toggleOn.classList.add("visible")
  } else {
    toggleOff.classList.remove("invisible")
    toggleOff.classList.add("visible")
    toggleOn.classList.remove("visible")
    toggleOn.classList.add("invisible")
  }
}
