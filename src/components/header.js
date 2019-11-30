import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { useDarkMode } from "./hooks/useDarkMode"
import Menu from "./svgs/menu-component"

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
      closeIcon: imageSharp(
        fluid: {
          src: {
            eq: "/static/e4f189b598ca4ca44bf279c23f04f3a7/929d0/close-button.png"
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

  const closeButton = data.closeIcon.fluid.src
  const closeButtonName = data.closeIcon.fluid.originalName

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
        <img src={closeButton} alt={closeButtonName} />
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
