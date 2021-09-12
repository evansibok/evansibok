import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import ProjectCard from "../components/projectCard"
import LPPSkills from "../components/skills/LPPSkills"
import DroomSkills from "../components/skills/DroomSkills"
import LambdaDoorSkills from "../components/skills/LambdaDoorSkills"


const projectsData = [
  {
    projectTitle: 'Lambda Door v2.0',
    web: 'Frontend',
    gH: 'Backend',
    websiteAnchorHref: 'https://github.com/Labs-EU4/lambda-door-client',
    githubAnchorHref: 'https://github.com/Labs-EU4/lambda-door-server',
    pTag1: 'A job information platform for Lambda Students.',
    pTag2: 'Took over this project from a previous team. Built within an 8 weeks period that involved agile project planning and implementation. Together with my team we implemented a new dashboard redesign to enhance user experience and a peer chat feature between job seekers and hiring contact. This involved using technologies like firebase firestore, cron scheduler, slack authentication, ant design system and styled components.',
    cardImageSrc: '',
    cardImageAlt: '',
    skills: <LambdaDoorSkills />
  },
  {
    projectTitle: 'Droom',
    web: 'Live Api',
    gH: 'GitHub',
    websiteAnchorHref: 'https://droom-jobs.herokuapp.com/',
    githubAnchorHref: 'https://github.com/droom-build-week/Back-end',
    pTag1: 'Backend Api that supports a Tinder-like app for job seekers and hiring companies.',
    pTag2: 'Started from scratch, this project was built remotely within a week with a team. The Api allows for authentication and CRUD operations for user, admin and company accounts. Tasks involved setting up an express server that utilised Node.js runtime environment, an SQLite development and test DB, Postgres production DB on Heroku and ESLinting and Jest configuration. A minor test was initiated using Supertest to verify that the Api server was live and ready for use.',
    cardImageSrc: '',
    cardImageAlt: '',
    skills: <DroomSkills />
  },
  {
    projectTitle: 'Local Park Passport',
    web: 'Website',
    gH: 'GitHub',
    websiteAnchorHref: 'https://front-end-deployed.vercel.app',
    githubAnchorHref: 'https://github.com/Local-Park-Passport-Lambda-BW/Front-End',
    pTag1: 'Local Park Passport enables you find the best parks around your neighbourhood.',
    pTag2: 'This project was built within a week in a remote environment that utilised agile methodology. The team consisted of both backend and frontend architects. Working as one of the frontend architects, it was a great learning experience on remote team collaboration. This project demonstrates mastery on certain frontend application building concepts like making asynchronous api calls, frontend authentication, routing, react custom hook creation and design system implementation (Reactstrap).',
    cardImageSrc: '../images/local-park-passport-screenshot.png',
    cardImageAlt: 'local-park-passport',
    skills: <LPPSkills />
  },
]


const ProjectsPage = () => {

  return (
    <Layout>
      <Seo title="Projects" />
      <PageLabel name="Projects" />
      
      {
        projectsData && projectsData.map((pro) => (
          <ProjectCard
            key={pro.projectTitle}
            projectTitle={pro.projectTitle}
            web={pro.web}
            gH={pro.gH}
            websiteAnchorHref={pro.websiteAnchorHref}
            githubAnchorHref={pro.githubAnchorHref}
            pTag1={pro.pTag1}
            pTag2={pro.pTag2}
            cardImageSrc={pro.cardImageSrc}
            cardImageAlt={pro.cardImageAlt}
            skills={pro.skills}
          />
        ))
      }
      <SocialLinks />
    </Layout>
  )
}

export default ProjectsPage
