import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { useDarkMode } from "./hooks/useDarkMode"
import Menu from "./svgs/menu-component"
import CloseIcon from "./svgs/close-component"

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false)

  const toggleHandler = evt => {
    evt.preventDefault()
    setDarkMode(!darkMode)
  }

  const data = useStaticQuery(graphql`
    query brandImage {
      file(relativePath: { eq: "evans-logo.png" }) {
        childImageSharp {
          fluid {
            src
            originalName
          }
        }
      }
    }
  `)
  const brandImage = data.file.childImageSharp.fluid.src
  const brandImageName = data.file.childImageSharp.fluid.originalName

  const menuClick = () => {
    const navigationMenu = document.querySelector("#navigation")
    navigationMenu.style.display = "inherit"
  }

  const closeClick = () => {
    const navigationMenu = document.querySelector("#navigation")
    navigationMenu.style.display = "none"
  }

  return (
    <header>
      <div className="leftCon">
        <div className="brandLogoCon">
          <Link to="/">
            <img src={brandImage} alt={brandImageName} />
          </Link>
        </div>

        <div className="toggleMenu">
          <div className="toggleCon">
            <button className="dark-mode__toggle" onClick={toggleHandler}>
              <div className={darkMode ? "toggle toggled" : "toggle"} />
            </button>
          </div>

          <Menu onClick={menuClick} />
        </div>
      </div>

      <nav id="navigation">
        <CloseIcon onClick={closeClick} />
        <div>
          <Link to="/about">About Me</Link>
        </div>

        <div>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
