import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"

const ScrollToTopButton = () => {
  const [topScrollVisible, setTopScrollVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setTopScrollVisible(true)
      } else {
        setTopScrollVisible(false)
      }
    })
  }, [])

  const scrollUp = () => {
    // May need to change the top value to account for the navbar
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div>
      {topScrollVisible && (
        <Button variant="secondary" style={{
          position: "fixed",
          bottom: "100px",
          right: "60px"
        }} onClick={scrollUp}>
          <i class="bi bi-caret-up-fill"></i>
        </Button>
      )}
    </div>
  )
}

export default ScrollToTopButton
