import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Evans Ibok" />

    <div className="home">
      <div className="avatar">
        <StaticImage
          src='../images/dopey-ape.png'
          alt='brand-logo'
          layout='constrained'
        />
      </div>

      <h1 className="h1-home">
        <p>
          <span className="letCol">H</span>ello, <span className="letCol">I </span><span className="letCol">a</span>m <span className="letCol">E</span>vans
        </p>
      </h1>

      <h4>Software Engineer and Human at heart 😜</h4>

      <div className="content">
        <p>
          I build and optimize web and mobile applications, <a
            href="https://anchor.fm/your-fave-space"
            target="_blank"
            rel="noopener noreferrer"
          >
            co-host a podcast
          </a>, and <a
            href="https://blog.evansibok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            write technical articles
          </a>. My free time is spent watching fantasy shows and animes, listening to audiobooks, music, and spending time in nature.
        </p>

        <p>
          Talk to me about{' '} software development, web3 development and{' '}
          <a
            href="mailto:evansibok@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            speaking at your events
          </a>.
        </p>
      </div>

      {/* <div className='work-container'>
        <h4>Work</h4>
        <div className='work-info'>
            <h6 className='company'>ApeSwap Finance - </h6>
            <p className='role'>Jr. Frontend Developer</p>
            <p className='timeline'>(2021 - 2022)</p>
        </div>
      </div> */}
    </div>
  </Layout>
)

export default IndexPage
