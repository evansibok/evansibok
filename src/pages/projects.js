import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import PintereachSkills from "../components/skills/pintereachSkills"
import ProjectCard from "../components/projectCard"
import NPOD from "../components/skills/npodSkills"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query projectsImages {
      nasaScreenshot: imageSharp(fluid: {src: {eq: "/static/49508c599e206dc960bc9e1ff6d0184b/a54c6/nasa-project-screenshot.png"}}) {
    fluid {
      src
      originalName
    }
  }
  pintereachScreenshot: imageSharp(fluid: {src: {eq: "/static/e7b012f31370b5d97e350b212adffdee/a54c6/pintereach-screenshot.png"}}) {
    fluid {
      src
      originalName
    }
  }
    }
  `)

  const pintereach = data.pintereachScreenshot.fluid.src
  const pintereachAlt = data.pintereachScreenshot.fluid.originalName

  const pintSkills = <PintereachSkills />;
  const npodSkills = <NPOD />;
  return (
    <Layout>
      <SEO title="Projects" />
      <PageLabel name="Projects" />

      <ProjectCard
        projectTitle="Pintereach Landing Page"
        web="Website"
        gH="Github"
        websiteAnchorHref="https://pintereach-ev1.netlify.com/"
        githubAnchorHref="https://github.com/Build-Week-Pintereach-1/Marketing-page-Evans"
        pTag1="During my first build week at Lambda School, I built a landing page using the skills I learnt, which included HTML5, CSS3, LESS and JavaScript."
        pTag2="This project was meant to test my understanding of the concepts I had previously learned."
        cardImageSrc={pintereach}
        cardImageAlt={pintereachAlt}
        skills={pintSkills}
      />

      <ProjectCard
        projectTitle="Local Park Passport"
        web="Website"
        gH="Github"
        websiteAnchorHref="https://front-end-deployed.now.sh/"
        githubAnchorHref="https://github.com/Local-Park-Passport-Lambda-BW/Front-End"
        pTag1="LPP was built as part of my one (1) week Lambda School sprint. The project was built as a means to make it easier for people to find conducive parks in their locales."
        pTag2="During the build sprint, I worked remotely as a frontend architect on a team of two (2). It was a great learning experience on remote team collaboration. This project helped show mastery on certain react app building concepts like making Asynchronous api calls, authentication, routing and custom hook creation."
        cardImageSrc={pintereach}
        cardImageAlt={pintereachAlt}
        skills={pintSkills}
      />

      {/* <ProjectCard
        projectTitle="EXPRESSJS/REACT APP BOILERPLATE"
        gH="Github"
        githubAnchorHref="https://github.com/evansibok/express-react-monolith"
        pTag1=""
        pTag2=""
        cardImageSrc={nasaImage}
        cardImageAlt={nasaImageAlt}
        skills={npodSkills}
      /> */}

      <SocialLinks />
    </Layout>
  )
}

export default ProjectsPage
