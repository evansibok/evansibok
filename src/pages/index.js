import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { SocialLinks } from "../components/social-links"

const IndexPage = () => {

  return <Layout>
    <Seo title="Evans Ibok" />

    <div className="homeCon">
      <div className="upside">
        <div className="left-home">
          <h1 className="h1HomeCon">
            <p>
              <span className="letCol">H</span>ello,
            </p>
            <p>
              <span className="letCol">I </span>am Evans
            </p>
          </h1>

          <h4>Software Engineer and human at heart 😜</h4>

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
              </a>. My free time is spent watching fantasy shows and animes, listening to audiobooks and music, and spending time in nature.
            </p>

            <p>
              Talk to me about <a
                href="https://acquiralabs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                turning your business ideas into scalable software solutions
              </a>, building web3 DApps, and <a

                href="mailto:evansibok@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                speaking at your events
              </a>.
            </p>
          </div>

          <div className="my-projects">
            <h4>Projects</h4>
            <div className="left-project">
              <ul>
                <a
                  href="https://evans-nfts.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>🖼️{" "}Sensei NFT Minter</li>
                </a>
                <a
                  href="https://github.com/Labs-EU4/lambda-door-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    ⛩️{" "}Lambda Door
                  </li>
                </a>
                <a
                  href="https://github.com/evansibok/EvansIbok.ElectronPortfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>✨{" "}Electron-Vue Crypto Portfolio</li>
                </a>
                <a
                  href="https://shoppies-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>📽️{" "}The Shoppies</li>
                </a>
                <a
                  href="https://github.com/droom-build-week/Back-end"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>💚{" "}Droom</li>
                </a>
              </ul>
            </div>

            {/* <div className="right-project">
            </div> */}
          </div>

        </div>

        <div className="right-home">
          <StaticImage
            src='../images/evans-bitmoji.png'
            alt='brand-logo'
            layout='constrained'
          />
        </div>
      </div>





      {/* <h4 className="h4HomeCon">
        <p>A software engineer living in Nigeria with an eye for minimalistic design and love for user experience.</p>
      </h4> */}

      {/* <ul>
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
      </ul> */}

      <SocialLinks />
    </div>
  </Layout>
}

export default IndexPage
