import React from "react"
import { useEffect } from "react"
import Button from "react-bootstrap/Button"

const ThemeSwitcher = () => {
  useEffect(() => {
    /* Initial code to setup icons */

    // get the root element (it is <html>)
    const root_elem = document.documentElement
    // see what the theme is set to
    const currentTheme = root_elem.getAttribute("data-bs-theme")

    // Get the classList of both elements
    var moonClassList = document.getElementById("toggle-on").classList
    var sunClassList = document.getElementById("toggle-off").classList

    // Set the icon visibility according to the current theme
    if (currentTheme === "dark") {
        sunClassList.remove("visible")
      sunClassList.add("invisible")
      moonClassList.remove("invisible")
      moonClassList.add("visible")
    } else {
      sunClassList.remove("invisible")
      sunClassList.add("visible")
      moonClassList.remove("invisible")
      moonClassList.add("invisible")
    }
  })
  /***
    onClick toggle function
  */
  const themeToggle = () => {
    // get the root element (it is <html>)
    const root_elem = document.documentElement
    // see what the theme is set to
    var currentTheme = root_elem.getAttribute("data-bs-theme")

    // Get the classList of both elements
    var moonClassList = document.getElementById("toggle-on").classList
    var sunClassList = document.getElementById("toggle-off").classList
    
    // toggle the current theme
    if (currentTheme === "dark") {
      currentTheme = "light"
      sunClassList.remove("invisible")
      sunClassList.add("visible")
      moonClassList.remove("visible")
      moonClassList.add("invisible")
    } else {
      currentTheme = "dark"
      sunClassList.remove("visible")
      sunClassList.add("invisible")
      moonClassList.remove("invisible")
      moonClassList.add("visible")
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
      id="darkmode-btn"
      onClick={themeToggle}
    >
      <span>
        <i id="toggle-on" className="bi bi-moon-fill invisible"></i>
        <i id="toggle-off" className="bi bi-sun invisible"></i>
      </span>
    </Button>
  )
}
export default ThemeSwitcher
