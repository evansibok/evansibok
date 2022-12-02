import React from "react"

import SocialLinks from '../components/social-links'

const Footer = () => (
  <footer>
    <SocialLinks />
    <p>
      &copy;{new Date().getFullYear()}. Designed &amp; Developed with{" "}
      <i className="em-svg em-hearts"></i> by {` `}
      <span className="footCol">
        <button
          onClick={() => window.open('https://drive.google.com/file/d/1OoJdOcEAQbh1ScxKWWGiMamf10YqpO1-/view?usp=sharing', '_blank')} className='ev'
        >
          E V \ N S
        </button>
      </span>
    </p>
  </footer>
)


export default Footer
