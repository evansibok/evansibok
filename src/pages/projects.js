import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import ProjectCard from "../components/projectCard"
import PintereachSkills from "../components/skills/pintereachSkills"
import LPPSkills from "../components/skills/lppSkills"
import ExpressReactSkills from "../components/skills/expressReactSkills"
import EvnsSkills from "../components/skills/evnsSkills"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query projectsImages {
      pintereachScreenshot: imageSharp(fluid: {src: {eq: "/static/e7b012f31370b5d97e350b212adffdee/a54c6/pintereach-screenshot.png"}}) {
        fluid {
          src
          originalName
        }
      }
      lppScreenshot: imageSharp(fluid: {src: {eq: "/static/143fde9da20fac00cee6a7abbba6ff9d/a54c6/local-park-passport-screenshot.png"}}) {
        fluid {
          src
          originalName
        }
      }
      expressReactScreenshot: imageSharp(fluid: {src: {eq: "/static/7399338059123b56c9fcfdc47bd009fb/a54c6/express-react-app-screenshot.png"}}) {
        fluid {
          src
          originalName
        }
      }
      evnsScreenshot: imageSharp(fluid: {src: {eq: "/static/8b2e364da024b4b76012337b9eb5ecf3/a54c6/evns-screenshot.png"}}) {
        fluid {
          src
          originalName
        }
      }
    }
  `)

  const pintereach = data.pintereachScreenshot.fluid.src
  const pintereachAlt = data.pintereachScreenshot.fluid.originalName

  const lpp = data.lppScreenshot.fluid.src
  const lppAlt = data.lppScreenshot.fluid.originalName

  const expressReactApp = data.expressReactScreenshot.fluid.src
  const expressReactAppAlt = data.expressReactScreenshot.fluid.originalName

  const evns = data.evnsScreenshot.fluid.src
  const evnsAlt = data.evnsScreenshot.fluid.originalName

  const pintSkills = <PintereachSkills />;
  const lppSkills = <LPPSkills />;
  const expressReactSkills = <ExpressReactSkills />;
  const evnsSkills = <EvnsSkills />;

  return (
    <Layout>
      <SEO title="Projects" />
      <PageLabel name="Projects" />

      <ProjectCard
        projectTitle="Pintereach Landing Page"
        web="Website"
        gH="GITHUB"
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
        gH="GITHUB"
        websiteAnchorHref="https://front-end-deployed.now.sh/"
        githubAnchorHref="https://github.com/Local-Park-Passport-Lambda-BW/Front-End"
        pTag1="LPP was built as part of my one (1) week Lambda School sprint. The project was built as a means to make it easier for people to find conducive parks in their locales."
        pTag2="During the build sprint, I worked remotely as a frontend architect on a team of two (2). It was a great learning experience on remote team collaboration. This project helped show mastery on certain react app building concepts like making Asynchronous api calls, authentication, routing and custom hook creation."
        cardImageSrc={lpp}
        cardImageAlt={lppAlt}
        skills={lppSkills}
      />

      <ProjectCard
        projectTitle="EXPRESSJS/REACT APP BOILERPLATE"
        web="Live App"
        gH="GITHUB"
        websiteAnchorHref="https://express-react-monolith.herokuapp.com/"
        githubAnchorHref="https://github.com/evansibok/express-react-monolith"
        pTag1="This app demonstrates the steps that are taken to get a minimal app that uses nodejs and expressjs for backend and react for frontend running."
        pTag2="The skills involved in building this project includes, creating an express server, an api to allow for test CRUD operations, integrating a React project in the same directory and finally deploying to the Heroku platform."
        cardImageSrc={expressReactApp}
        cardImageAlt={expressReactAppAlt}
        skills={expressReactSkills}
      />

      <ProjectCard
        projectTitle="e v \ n s (This Website)"
        gH="GITHUB"
        githubAnchorHref="https://github.com/evansibok/evansibok.github.io"
        pTag1="This is the portfolio website of Evans Ibok."
        pTag2="This website was built as a means to showcase projects I've worked on and technologies I'm proficient with."
        cardImageSrc={evns}
        cardImageAlt={evnsAlt}
        skills={evnsSkills}
      />

      <SocialLinks />
    </Layout>
  )
}

export default ProjectsPage
