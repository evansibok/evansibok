import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <PageLabel name="Projects"/>
      <div className="projectCon">

      </div>
      <SocialLinks />
    </Layout>
  )
}

export default ProjectsPage
