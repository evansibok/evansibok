import React from "react"
import { getImageData } from 'gatsby-plugin-image';
import Layout from "../components/layout"
import Seo from "../components/seo"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import ProjectCard from "../components/projectCard"
import projects from "../utils/projects";

const ProjectsPage = () => {

  return (
    <Layout>
      <Seo title="Projects" />
      <PageLabel name="Projects" />

      {
        projects && projects.map((pro) => {
          console.log('evnsData', pro.cardImageData);

          return (
            <ProjectCard
              key={pro.projectTitle}
              projectTitle={pro.projectTitle}
              web={pro.web}
              gH={pro.gH}
              websiteAnchorHref={pro.websiteAnchorHref}
              githubAnchorHref={pro.githubAnchorHref}
              pTag1={pro.pTag1}
              pTag2={pro.pTag2}
              cardImageData={getImageData(pro.cardImageData)}
              cardImageAlt={pro.cardImageAlt}
              skills={pro.skills}
            />
          )
        }
        )
      }
      <SocialLinks />
    </Layout>
  )
}

export default ProjectsPage
