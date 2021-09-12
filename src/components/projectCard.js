import React, { useState } from 'react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { StaticImage } from "gatsby-plugin-image"

import ProjectLinks from './projectLinks';


const ProjectCard = ({
  projectTitle,
  websiteAnchorHref,
  githubAnchorHref,
  pTag1,
  pTag2,
  cardImageSrc,
  cardImageAlt,
  skills,
  web,
  gH
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openProject = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="projectCard">
      <div className="cardHead" onClick={openProject}>
        <h4>{projectTitle}</h4>

        <div className="rightHead">
          <ProjectLinks
            websiteAnchorHref={websiteAnchorHref}
            githubAnchorHref={githubAnchorHref}
            web={web}
            gH={gH}
            extraClass={`bigScreen`}
          />

          {isOpen ? <FiChevronDown /> : <FiChevronRight />}
        </div>
      </div>

      <div className="cardBodyCon" style={{ display: isOpen ? 'unset' : 'none' }}>
        <ProjectLinks
          websiteAnchorHref={websiteAnchorHref}
          githubAnchorHref={githubAnchorHref}
          web={web}
          gH={gH}
          extraClass={`smallScreen`}
        />
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
            <StaticImage
              src={cardImageSrc}
              alt={cardImageAlt}
              placeholder="blurred"
              layout="constrained"
              // width={27}
              // height={27}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard
