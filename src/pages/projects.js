import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import HTML5 from "../components/svgs/html5-component"
import CSS3 from "../components/svgs/css3-component"
import JS from "../components/svgs/js-component"
import Figma from "../components/svgs/figma-component"
import Github from "../components/svgs/github-component"
import Menu from "../components/svgs/menu-component"
import ReactJS from "../components/svgs/react-js-component"
import Sass from "../components/svgs/sass-component"
import Trello from "../components/svgs/trello-component"
import GraphQLIcon from "../components/svgs/graphql-component"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query allImages {
      gatsbyIcon: imageSharp(
        fluid: {
          src: {
            eq: "/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png"
          }
        }
      ) {
        fluid {
          src
          originalName
        }
      }
      pintereachScreenshot: imageSharp(
        fluid: {
          src: {
            eq: "/static/e7b012f31370b5d97e350b212adffdee/af144/pintereach-screenshot.png"
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

  const pintereach = data.pintereachScreenshot.fluid.src
  const pintereachAlt = data.pintereachScreenshot.fluid.originalName

  const gatsbyImage = data.gatsbyIcon.fluid.src
  const gatsbyImageAlt = data.gatsbyIcon.fluid.originalName

  return (
    <Layout>
      <SEO title="Projects" />
      <PageLabel name="Projects" />
      <div className="projectCard">
        <div className="contentCon">
          <div className="cardHead">
            <h4>Pintereach Landing Page</h4>

            <ul>
              <a
                href="https://pintereach-ev1.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Website</li>
              </a>
              <a
                href="https://github.com/Build-Week-Pintereach-1/Marketing-page-Evans"
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
                During my first build week with Lambda School, I built a landing
                page using the skills I learnt, which included HTML5, CSS3, LESS
                and JavaScript.
                <br />
                <br />
                This project was meant to test my understanding of the concepts
                I had previously learned.
              </p>
              <div className="projectIcons">
                <HTML5 />
                <CSS3 />
                <JS />
              </div>
            </div>
            <div className="imageCon">
              <img src={pintereach} alt={pintereachAlt} />
            </div>
          </div>
        </div>
      </div>
      <SocialLinks />
    </Layout>
  )
}

export default ProjectsPage
