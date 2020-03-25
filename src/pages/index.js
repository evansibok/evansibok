import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Evans Ibok" />

    <div className="homeCon">
      <h1 className="h1HomeCon">
        <p>
          <span className="letCol">H</span>ello,
        </p>
        <p>
          I <span className="letCol">a</span>m <span className="letCol">E</span>
          vans
        </p>
      </h1>

      <h4 className="h4HomeCon">
        <p>A software developer living in Nigeria with an eye for minimalistic design and love for user experience.</p>
      </h4>

      <ul>
        <a
          href="https://twitter.com/evansibok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Twitter</li>
        </a>
        <a
          href="https://linkedin.com/in/evansibok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>LinkedIn</li>
        </a>
        {/* <a href="#" target="_blank"
					rel="noopener noreferrer">
					<li>Podcast</li>
				</a> */}
        <a
          href="https://github.com/evansibok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>GitHub</li>
        </a>
        <a
          href="mailto:evansibok@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Email</li>
        </a>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
