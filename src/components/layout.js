import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from "./header"
import Footer from "./footer"
import "../css/reset.css"
import "../css/app.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Dosis|Nunito|PT+Sans|Kodchasan&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://afeld.github.io/emoji-css/emoji.css"
            rel="stylesheet"
          ></link>
        </Helmet>
        <div className="content">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
