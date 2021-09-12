import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import CSS3 from "../svgs/css3-component"
import JsComp from "../svgs/js-component"
import Sass from "../svgs/sass-component"
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
      <JsComp />
      <img src={gatsbyImage} alt={gatsbyImageAlt} />
      <GraphQL />
      <Sass />
    </div >
  )
}

export default EvnsSkills;