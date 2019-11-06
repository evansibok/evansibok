import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => {
  return (
    <header>
      <div>
          <Link to="/">
            <img
              src="/static/e152b5cfbba58a414f35c976307c3c1d/25835/evnsvec.png"
              alt="brand logo"
            />
          </Link>
      </div>
      <div>
        <Link to="/about-me">About Me</Link>
        <Link to="/projects">Projects</Link>
        <button>View Resume</button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
