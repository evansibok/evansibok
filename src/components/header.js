import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { useDarkMode } from "./hooks/useDarkMode"

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false)

  const toggleHandler = evt => {
    evt.preventDefault()
    setDarkMode(!darkMode)
  }

  const data = useStaticQuery(graphql`
    query brandImageQuery {
      imageSharp(
        fluid: {
          src: {
            eq: "/static/e152b5cfbba58a414f35c976307c3c1d/25835/evnsvec.png"
          }
        }
      ) {
        fluid {
          src
        }
      }
    }
  `)

  return (
    <header>
      <div className="headerContentContainer">
        <div className="brandLogoCon">
          <Link to="/">
            <img src={data.imageSharp.fluid.src} alt="brand logo" />
          </Link>
        </div>

        <div className="rightCon">
          <div className="toggleCon">
            <div className="dark-mode__toggle" onClick={toggleHandler}>
              <div className={darkMode ? "toggle toggled" : "toggle"} />
            </div>
          </div>
          <nav>
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
        </div>
      </div>
    </header>
  )
}

export default Header
