import React from 'react';

const ProjectLinks = ({
  websiteAnchorHref,
  githubAnchorHref,
  web,
  gH
}) => {

  return (
    <div className="projectLinks">
      <ul>
        <a
          href={websiteAnchorHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>{web}</li>
        </a>
        <a
          href={githubAnchorHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>{gH}</li>
        </a>
      </ul>
    </div>
  )
}

export default ProjectLinks
