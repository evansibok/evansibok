import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import { skills } from "../components/skills/skills-utils"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query aboutImages {
      file(relativePath: { eq: "evans.jpg" }) {
        childImageSharp {
          fluid {
            src
            originalName
          }
        }
      }
    }
  `)

  const evansImage = data.file.childImageSharp.fluid.src
  const evansImageAlt = data.file.childImageSharp.fluid.originalName

  return (
    <Layout>
      <Seo title="About" />
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
          <p>I find that VR/AR & Machine Learning intrigue me.</p>
          <div className="skills">
            <p>My skills include:</p>
            <ul>
              {
                skills.map((skill, i) => {
                  return (
                      <li key={i}>
                        {skill}
                      </li>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className="rightCon">
          <img src={evansImage} alt={evansImageAlt} />
        </div>
      </div>
      <SocialLinks />
    </Layout>
  )
}

export default AboutPage
