/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../css/reset.css"
import "../css/app.css"

const Layout = ({ children }) => {
  // Query data from GraphQL
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // Pass as Props to Component
  // siteTitle={data.site.siteMetadata.title}

  return (
    <>
      <div className="container">
        <Header />
        <main>{children}</main>
      </div>
      <footer>
        &copy; {new Date().getFullYear()}. Designed &amp; Developed with love
        by
          {` `}
        <Link to="/">E V \ N S</Link>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
