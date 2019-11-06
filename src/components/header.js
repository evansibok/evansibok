import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => {
  return (
    <header
      style={{
        maxWidth: `100vw`,
      }}
    >
      <div
        className="headerContentContainer"
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `0px 1.0875rem`,
          paddingTop: 0,
        }}
      >
        <div>
          <Link to="/" style={{ margin: 0, padding: 0 }}>
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
