import React from 'react';

const ProjectCard = ({
  projectTitle,
  websiteAnchorHref,
  githubAnchorHref,
  pTag1,
  pTag2,
  cardImageSrc,
  cardImageAlt,
  skills
}) => {
  return (
    <div className="projectCard">
      <div className="contentCon">
        <div className="cardHead">
          <h4>{projectTitle}</h4>

          <ul>
            <a
              href={websiteAnchorHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Website</li>
            </a>
            <a
              href={githubAnchorHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Github</li>
            </a>
          </ul>
        </div>

        <div className="cardBody">
          <div className="leftCon">
            <p>
              {pTag1}
            </p>
            <p>
              {pTag2}
            </p>
            {skills}
          </div>
          <div className="imageCon">
            <img src={cardImageSrc} alt={cardImageAlt} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
