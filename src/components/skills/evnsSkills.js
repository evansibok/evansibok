import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import CSS3 from "../svgs/css3-component"
import JS from "../svgs/js-component"
import Github from "../svgs/github-component"
import SASS from "../svgs/sass-component"
import GraphQL from "../svgs/graphql-component"


const EvnsSkills = () => {
  const data = useStaticQuery(graphql`
    query evnsSkillsImage {
      gatsbyIcon: imageSharp(
        fluid: {
          src: {
            eq: "/static/4a9773549091c227cd2eb82ccd9c5e3a/7e783/gatsby-icon.png"
          }
        }
      ) {
        fluid {
          src
          originalName
        }
      }
    }
  `)

  const gatsbyImage = data.gatsbyIcon.fluid.src
  const gatsbyImageAlt = data.gatsbyIcon.fluid.originalName

  return (
    < div className="projectIcons" >
      <CSS3 />
      <JS />
      <img src={gatsbyImage} alt={gatsbyImageAlt} />
      <GraphQL />
      <SASS />
      <Github />
    </div >
  )
}

export default EvnsSkills;