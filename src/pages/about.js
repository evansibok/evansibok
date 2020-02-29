import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import { skills } from "../components/skills/skills-utils"
import HTML5 from "../components/svgs/html5-component"
import CSS3 from "../components/svgs/css3-component"
import JS from "../components/svgs/js-component"
import SASS from "../components/svgs/sass-component"
import ReactJS from "../components/svgs/react-js-component"
import GraphQLIcon from "../components/svgs/graphql-component"
import Github from "../components/svgs/github-component"
import Trello from "../components/svgs/trello-component"
import NodeJS from "../components/svgs/node-js"
import ExpressJS from "../components/svgs/express-js"
import Redux from "../components/svgs/redux"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query aboutImages {
      evansImage: imageSharp(
        fluid: {
          src: {
            eq: "/static/8ab3b947b1252d44d0090d87ae787e60/b17c1/ev.jpg"
          }
        }
      ) {
        fluid {
          src
          originalName
        }
      }
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
      figmaIcon: imageSharp(
        fluid: {
          src: {
            eq: "/static/a786ce194a5c509fc76de9ec7f101529/7e783/figma-icon.png"
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

  const figmaImage = data.figmaIcon.fluid.src
  const figmaImageAlt = data.figmaIcon.fluid.originalName

  const evansImage = data.evansImage.fluid.src
  const evansImageAlt = data.evansImage.fluid.originalName

  return (
    <Layout>
      <SEO title="About" />
      <PageLabel name="About Me" />
      <div className="aboutCon">
        <div className="leftCon">
          <p>Human <span role="img" aria-label="wink">😜</span></p>
          <p>
            I design and build websites using well crafted human-centered design
            approaches, modern tools and a combination of both sides of my
            brain.
          </p>
          <p>
            When I'm not designing beautiful user experiences or writing
            functional code for websites, I listen to music, watch fantasy
            shows, drink coffee, read a book or write a poem.
          </p>
          <p>Interests include VR/AR & Machine Learning</p>
          <div>
            <p>My skills include:</p>
            {
              skills.map(skill => {
                return <ul>
                  <li>{skill}</li>
                </ul>
              })
            }
            {/* <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>LESS</li>
              <li>SASS</li>
              <li>JS</li>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>Postgres</li>
              <li>Knex.js</li>
              <li>GatsbyJS</li>
              <li>Github</li>
              <li>Figma</li>
              <li>Trello</li>
            </ul> */}
          </div>
        </div>

        <div className="rightCon">
          {/* <HTML5 />
          <CSS3 />
          <JS />
          <ReactJS />
          <Redux />
          <SASS />
          <NodeJS />
          <ExpressJS />
          <GraphQLIcon />
          <img src={gatsbyImage} alt={gatsbyImageAlt} />
          <Github />
          <img src={figmaImage} alt={figmaImageAlt} className="fig" />
          <Trello /> */}
          <img src={evansImage} alt={evansImageAlt} />
        </div>
      </div>
      <SocialLinks />
    </Layout>
  )
}

export default AboutPage
