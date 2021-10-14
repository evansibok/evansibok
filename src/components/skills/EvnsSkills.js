import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import CSS3 from "../svgs/css3-component"
import JsComp from "../svgs/js-component"
import Sass from "../svgs/sass-component"
import GraphQL from "../svgs/graphql-component"


const EvnsSkills = () => {

  return (
    < div className="projectIcons" >
      <CSS3 />
      <JsComp />
      <div style={{ marginRight: '0.8em' }}>
        <StaticImage
          src='../../images/gatsby-icon.png' alt='gatsby'
          placeholder="blurred"
          layout="constrained"
          width={27}
          height={27}
        />
      </div>
      <GraphQL />
      <Sass />
    </div >
  )
}

export default EvnsSkills;