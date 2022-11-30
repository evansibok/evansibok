import React from "react"

import { Link } from "gatsby"
import SocialLinks from '../components/social-links'

const Footer = () => {
  return (
    <footer>
    <SocialLinks />
      <p>
        &copy;{new Date().getFullYear()}. Designed &amp; Developed with{" "}
        <i className="em-svg em-hearts"></i> by {` `}
        <span className="footCol">
          <Link to="/">E V \ N S</Link>
        </span>
      </p>
    </footer>
  )
}

export default Footer
