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
        projectTitle="Local Park Passport"
        web="Website"
        gH="GitHub"
        websiteAnchorHref="https://front-end-deployed.now.sh/"
        githubAnchorHref="https://github.com/Local-Park-Passport-Lambda-BW/Front-End"
        pTag1="Local Park Passport enables you find the best parks around your neighbourhood."
        pTag2="This project was built within a week in a remote environment that utilised agile methodology. The team consisted of both backend and frontend architects. Working as one of the frontend architects, it was a great learning experience on remote team collaboration. This project demonstrates mastery on certain frontend application building concepts like making asynchronous api calls, frontend authentication, routing, react custom hook creation and design system implementation (Reactstrap)."
        cardImageSrc={lpp}
        cardImageAlt={lppAlt}
        skills={lppSkills}
      />

      <ProjectCard
        projectTitle="e v \ n s (This Website)"
        gH="GitHub"
        githubAnchorHref="https://github.com/evansibok/evansibok.github.io"
        pTag1="This is the portfolio website of Evans Ibok."
        pTag2="This website was built to introduce myself, showcase my past and current projects and technologies I'm proficient with."
        cardImageSrc={evns}
        cardImageAlt={evnsAlt}
        skills={evnsSkills}
      />

      <ProjectCard
        projectTitle="Pintereach Landing Page"
        web="Website"
        gH="GitHub"
        websiteAnchorHref="https://pintereach-ev1.netlify.com/"
        githubAnchorHref="https://github.com/Build-Week-Pintereach-1/Marketing-page-Evans"
        pTag1="This is a marketing page project built during my first build week at Lambda School, I had learnt HTML5, CSS3, LESS and JavaScript."
        pTag2="This project demonstrated mastery of the concepts I had been taught."
        cardImageSrc={pintereach}
        cardImageAlt={pintereachAlt}
        skills={pintSkills}
      />

      <SocialLinks />
    </Layout>
  )
}

export default ProjectsPage
