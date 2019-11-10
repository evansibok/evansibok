import React from 'react'

import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer>
      <p>

      &copy; {new Date().getFullYear()}. Designed &amp; Developed with &hearts;
        by {` `} {` `}
      <span className="letCol">
        <Link to="/">E V \ N S</Link>
      </span>
      </p>

    </footer>
  )
}

export default Footer;