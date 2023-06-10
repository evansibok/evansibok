import React from "react"
import { Script } from "gatsby"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from "./header"
import Footer from "./footer"
import "../css/reset.css"
import "../css/app.css"

const Layout = ({ children }) => (
  <>
    <div className="container">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700&family=Kodchasan:wght@300;400;500&family=Nunito:wght@300;400;600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://afeld.github.io/emoji-css/emoji.css"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-111423075-1"
        />
        <Script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config',
          'UA-111423075-1');
        </Script>
      </Helmet>
      <div className="content">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
