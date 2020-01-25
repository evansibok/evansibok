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
import ProjectCard from "../components/projectCard"

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

  const nasaImage = data.nasaScreenshot.fluid.src
  const nasaImageAlt = data.nasaScreenshot.fluid.originalName

  return (
    <Layout>
      <SEO title="Projects" />
      <PageLabel name="Projects" />

      <ProjectCard
        projectTitle="Pintereach Landing Page"
        websiteAnchorHref="https://pintereach-ev1.netlify.com/"
        githubAnchorHref="https://github.com/Build-Week-Pintereach-1/Marketing-page-Evans"
        pTag1="During my first build week at Lambda School, I built a landing page using the skills I learnt, which included HTML5, CSS3, LESS and JavaScript."
        pTag2="This project was meant to test my understanding of the concepts I had previously learned."
        cardImageSrc={pintereach}
        cardImageAlt={pintereachAlt}
      />

      <ProjectCard
        projectTitle="Nasa Photo of the Day"
        websiteAnchorHref="https://nasa-photo-of-the-day.evansibok.now.sh/"
        githubAnchorHref="https://github.com/evansibok/nasa-photo-of-the-day"
        pTag1="A ReactJS app which queries NASA's api to display astronomical photo of the day."
        pTag2="This project showed mastery on certain react app building concepts like making Asynchronous api calls and displaying received data for consumption."
        cardImageSrc={nasaImage}
        cardImageAlt={nasaImageAlt}
      />

      <SocialLinks />
    </Layout>
  )
}

// Pintereach Skills
{/* <div className="projectIcons">
  <HTML5 />
  <CSS3 />
  <JS />
  <Github />
</div> */}

// NPOD Skills
{/* <div className="projectIcons">
  <HTML5 />
  <CSS3 />
  <JS />
  <Github />
</div> */}

export default ProjectsPage
