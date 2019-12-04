import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import HTML5 from "../components/svgs/html5-component"
import CSS3 from "../components/svgs/css3-component"
import JS from "../components/svgs/js-component"
import SASS from "../components/svgs/sass-component"
import ReactJS from "../components/svgs/react-js-component"
import GraphQLIcon from "../components/svgs/graphql-component"
import Github from "../components/svgs/github-component"
import Trello from "../components/svgs/trello-component"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query aboutImages {
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
      figmaIcon: imageSharp(
        fluid: {
          src: {
            eq: "/static/a786ce194a5c509fc76de9ec7f101529/774d6/figma-icon.png"
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

  return (
    <Layout>
      <SEO title="About" />
      <PageLabel name="About Me" />
      <div className="aboutCon">
        <div className="leftCon">
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
        </div>

        <div className="rightCon">
          <HTML5 />
          <CSS3 />
          <JS />
          <ReactJS />
          <SASS />
          <GraphQLIcon />
          <img src={gatsbyImage} alt={gatsbyImageAlt} />
          <Github />
          <img src={figmaImage} alt={figmaImageAlt} className="fig" />
          <Trello />
        </div>
      </div>
      <SocialLinks />
    </Layout>
  )
}

export default AboutPage
