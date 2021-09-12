import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import NodeJS from "../svgs/node-js"
import ExpressJS from "../svgs/express-js"
import PostGres from "../svgs/postgres-component";
import Jest from '../svgs/jest-component';
import ReactJS from '../svgs/react-js-component';
import Redux from '../svgs/redux-component';
import AntDesign from '../svgs/antd-component';

const LambdaDoorSkills = () => {
  const data = useStaticQuery(graphql`
    query lambdaSkillsImage {
      knexIcon: imageSharp(
        fluid: {
          src: {
            eq: "/static/d9b1340e0ae100fbfa381a942f0e0c0c/7e783/knex.png"
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

  const knexIcon = data.knexIcon.fluid.src
  const knexIconAlt = data.knexIcon.fluid.originalName

  return (
    <div className="projectIcons">
      <ReactJS />
      <Redux />
      <AntDesign />
      <NodeJS />
      <ExpressJS />
      <PostGres />
      <img src={knexIcon} alt={knexIconAlt} />
      <Jest />
    </div>
  )
}

export default LambdaDoorSkills;