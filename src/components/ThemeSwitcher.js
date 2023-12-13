import React from "react"
import { Button } from "react-bootstrap"

const ThemeSwitcher = () => {
  const themeToggle = () => {
    // get the root element (it is <html>)
    const elem = document.documentElement

    // see what the theme is set to
    var currentTheme = elem.getAttribute("data-bs-theme")
    if (currentTheme === "dark") {
      currentTheme = "light"
    } else {
      currentTheme = "dark"
    }
    elem.setAttribute("data-bs-theme", currentTheme)

    // Get the current theme from local storage, if it exists
    var savedTheme = localStorage.getItem("data-bs-theme")
    if (savedTheme !== currentTheme) {
      localStorage.setItem("data-bs-theme", currentTheme)
      console.log("currentTheme", currentTheme)
    }
  }
  return (
    <div>
      {/* <i class="bi bi-sun-fill"></i>
      <i class="bi bi-moon"></i> */}
      {/* <i className="bi bi-toggle-on fs-4" onClick={themeToggle} ></i> */}
      <Button
        variant="tertiary"
        size="sm"
        onClick={themeToggle}
        className=""
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-toggle-on"
          viewBox="0 0 16 16"
        >
          <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
        </svg>
      </Button>
    </div>
  )
}
export default ThemeSwitcher
