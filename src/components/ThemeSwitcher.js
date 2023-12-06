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
      
      <Button variant="secondary" size="sm" onClick={themeToggle} className="" aria-hidden="true"><i className="bi bi-brightness-high-fill pe-1"></i><i className="bi bi-moon-fill ps-1"></i></Button>
    </div>
  )
}
export default ThemeSwitcher
