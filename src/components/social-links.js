import React from 'react'

const SocialLinks = () => {
  return (
    <div>
      <ul>
        <a href="https://twitter.com/evansibok" target="_blank"
          rel="noopener noreferrer">
          <li>Twitter</li>
        </a>
        <a href="https://linkedin.com/evansibok" target="_blank"
          rel="noopener noreferrer">
          <li>LinkedIn</li>
        </a>
        {/* <a href="#" target="_blank"
					rel="noopener noreferrer">
					<li>Podcast</li>
				</a> */}
        <a href="https://github.com/evansibok" target="_blank"
          rel="noopener noreferrer">
          <li>Github</li>
        </a>
        <a href="mailto:evansibok@gmail.com" target="_blank"
          rel="noopener noreferrer">
          <li>Email</li>
        </a>
      </ul>
    </div>
  )
}

export default SocialLinks
