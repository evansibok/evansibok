import React from 'react'

import { Link } from 'gatsby';

const Footer = () => {
  return (
    <div>
      &copy; {new Date().getFullYear()}. Designed &amp; Developed with love
        by
          {` `}
      <Link to="/">E V \ N S</Link>
    </div>
  )
}

export default Footer;