import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import NodeJS from "../svgs/node-js"
import ExpressJS from "../svgs/express-js"
import PostGres from "../svgs/postgres-component";
import Jest from '../svgs/jest-component';
import ReactJS from '../svgs/react-js-component';
import Redux from '../svgs/redux-component';
import AntDesign from '../svgs/antd-component';

const LambdaDoorSkills = () => {

  return (
    <div className="projectIcons">
      <ReactJS />
      <Redux />
      <AntDesign />
      <NodeJS />
      <ExpressJS />
      <PostGres />
      <div style={{ marginRight: '0.8em' }}>
        <StaticImage
          src='../../images/knex.png' alt='knex'
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

export default LambdaDoorSkills;