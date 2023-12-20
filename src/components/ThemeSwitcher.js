import React from "react"
import Button from "react-bootstrap/Button"

const ThemeSwitcher = () => {
  /* Initial code to setup icons */

  // get the root element (it is <html>)
  const root_elem = document.documentElement
  // see what the theme is set to
  const currentTheme = root_elem.getAttribute("data-bs-theme")

  var moonClass = "invisible"
  var sunClass = "visible"

  // Set the icon visibility according to the current theme
  if (currentTheme === "dark") {
    sunClass = "bi bi-sun invisible"
    moonClass = "bi bi-moon-fill visible"
  } else {
    sunClass = "bi bi-sun visible"
    moonClass = "bi bi-moon-fill invisible"
  }

  /***
    onClick toggle function
  */
  const themeToggle = () => {
    // get the root element (it is <html>)
    const root_elem = document.documentElement
    // see what the theme is set to
    var currentTheme = root_elem.getAttribute("data-bs-theme")

    // toggle the current theme
    if (currentTheme === "dark") {
      currentTheme = "light"
      document.getElementById("toggle-off").classList.remove("invisible")
      document.getElementById("toggle-off").classList.add("visible")
      document.getElementById("toggle-on").classList.remove("visible")
      document.getElementById("toggle-on").classList.add("invisible")
    } else {
      currentTheme = "dark"
      document.getElementById("toggle-off").classList.remove("visible")
      document.getElementById("toggle-off").classList.add("invisible")
      document.getElementById("toggle-on").classList.remove("invisible")
      document.getElementById("toggle-on").classList.add("visible")
    }
    // Set the theme in the root element.
    root_elem.setAttribute("data-bs-theme", currentTheme)

    // Get the current theme from local storage, if it exists
    var savedTheme = localStorage.getItem("data-bs-theme")
    if (savedTheme !== currentTheme) {
      localStorage.setItem("data-bs-theme", currentTheme)
    }
  }
  return (
    <Button
      variant="outline-secondary"
      size="sm"
      /* className="pe-3" */ onClick={themeToggle}
    >
      <span>
        <i id="toggle-on" className={moonClass}></i>
        <i id="toggle-off" className={sunClass}></i>
      </span>
    </Button>
  )
}
export default ThemeSwitcher
