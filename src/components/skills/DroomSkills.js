import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import CSS3 from "../svgs/css3-component"
import JsComp from "../svgs/js-component"
import NodeJS from "../svgs/node-js"
import ExpressJS from "../svgs/express-js"
import PostGres from "../svgs/postgres-component";
import Jest from '../svgs/jest-component';

const DroomSkills = () => {

  return (
    <div className="projectIcons">
      <CSS3 />
      <JsComp />
      <NodeJS />
      <ExpressJS />
      <PostGres />
      <div style={{ marginRight: '0.8em' }}>
        <StaticImage
          src='../../images/knex.png'
          alt='knex'
          placeholder="blurred"
          layout="constrained"
          width={27}
          height={27}
        />
      </div>
      <Jest />
    </div>
  )
}

export default DroomSkills;