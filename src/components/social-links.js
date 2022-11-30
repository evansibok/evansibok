import React from "react"
import HireMeButton from "./HireMeButton/HireMeButton"

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
          href="https://twitter.com/fairygodfatherv"
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
        <HireMeButton />
      </ul>
    </div>
  )
}

export default SocialLinks
