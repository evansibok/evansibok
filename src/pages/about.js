import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageLabel } from "../components/page-label"
import SocialLinks from "../components/social-links"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <PageLabel />
      <div className="aboutCon">
        <div className="leftCon">
          <p>I design and build websites using weell crafted human-centered design approaches, modern tools and a combination of both sides of my brain.
          </p>
          <p>When I'm not designing beautiful user experiences or writing functional code for websites, I listen to music, watch fantasy shows, drink coffee, read a book or write a poem.
          </p>
        </div>

        <div className="rightCon">
          <p>images</p>  
        </div>
      </div>
      <SocialLinks />
    </Layout>
  )
}

export default AboutPage
