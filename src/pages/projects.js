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
              <a href="" target="_blank" rel="noopener noreferrer">
                <li>Website</li>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <li>Github</li>
              </a>
            </ul>
          </div>

          <div className="cardBody">
            <div className="leftCon">
              <p>
                Fort NG is a fashion company based in Nigeria. Customers place
                orders by viewing items on instagram and sending messages. They
                wanted an E-Commerce website for users to purchase items from as
                well as a website where potential customers would get the latest
                news.
                <br />
                <br />
                The E-Commerce website was built from scratch using Laravel. An
                admin portal was also built to enable admins manage news,
                products, orders as well as website content.
              </p>
              <div className="projectIcons">
                <HTML5 />
                <CSS3 />
                <JS />
                <Figma />
                <Github />
                <Menu />
                <ReactJS />
                <Sass />
                <Trello />
                <GraphQLIcon />
                <img
                  src={gatsbyImage}
                  alt={gatsbyImageAlt}
                  width="20px"
                  marginBottom={0}
                />
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
