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
    query navImageQuery {
      brandImage: imageSharp(
        fluid: {
          src: {
            eq: "/static/e152b5cfbba58a414f35c976307c3c1d/25835/evans-logo.png"
          }
        }
      ) {
        fluid {
          src
          originalName
        }
      }
    }
  `)
  const brandImage = data.brandImage.fluid.src
  const brandImageName = data.brandImage.fluid.originalName

  const menuButton = document.querySelector("#menu")
  console.log(menuButton)

  const closeButton = document.querySelector("#close")
  console.log(closeButton)

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
            <div className="dark-mode__toggle" onClick={toggleHandler}>
              <div className={darkMode ? "toggle toggled" : "toggle"} />
            </div>
          </div>

          <Menu />
        </div>
      </div>

      <nav>
        <CloseIcon />
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <a
          className="buttonAnchor"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Resume</button>
        </a>
      </nav>
    </header>
  )
}

export default Header
