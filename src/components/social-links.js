import React from "react"

export const SocialLinks = () => {
  return (
    <div className="socialLinkCon">
      <ul>
        <a
          href="https://linkedin.com/in/evansibok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>LinkedIn</li>
        </a>
        <a
          href="https://twitter.com/evansibok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Twitter</li>
        </a>
        <a
          href="https://github.com/evansibok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>GitHub</li>
        </a>
        <a
          href="mailto:evansibok@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className='hire-me'
        >
          <li>Hire Me</li>
        </a>
      </ul>
    </div>
  )
}
