import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import HTML5 from "../components/svgs/html5-component"
import CSS3 from "../components/svgs/css3-component"
import JS from "../components/svgs/js-component"
import Github from "../components/svgs/github-component"
import ReactJS from "../components/svgs/react-js-component"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query allImages {
      nasaScreenshot: imageSharp(
        fluid: {
          src: {
            eq: "/static/49508c599e206dc960bc9e1ff6d0184b/af144/nasa-project-screenshot.png"
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

  const nasaImage = data.nasaScreenshot.fluid.src
  const nasaImageAlt = data.nasaScreenshot.fluid.originalName

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
                During my first build week at Lambda School, I built a landing
                page using the skills I learnt, which included HTML5, CSS3, LESS
                and JavaScript.
              </p>
              <p>
                This project was meant to test my understanding of the concepts
                I had previously learned.
              </p>
              <div className="projectIcons">
                <HTML5 />
                <CSS3 />
                <JS />
                <Github />
              </div>
            </div>
            <div className="imageCon">
              <img src={pintereach} alt={pintereachAlt} />
            </div>
          </div>
        </div>
      </div>

      <div className="projectCard">
        <div className="contentCon">
          <div className="cardHead">
            <h4>Nasa Photo of the Day</h4>

            <ul>
              <a
                href="https://nasa-photo-of-the-day.evansibok.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Website</li>
              </a>
              <a
                href="https://github.com/evansibok/nasa-photo-of-the-day"
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
                A ReactJS app which queries NASA's api to display astronomical
                photo of the day.
              </p>
              <p>
                This project showed mastery on certain react app building
                concepts like making Asynchronous api calls and displaying
                received data for consumption.
              </p>
              <div className="projectIcons">
                <HTML5 />
                <CSS3 />
                <ReactJS />
                <Github />
              </div>
            </div>
            <div className="imageCon">
              <img src={nasaImage} alt={nasaImageAlt} />
            </div>
          </div>
        </div>
      </div>
      <SocialLinks />
    </Layout>
  )
}

export default ProjectsPage
