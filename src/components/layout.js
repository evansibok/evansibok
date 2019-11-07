/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../css/layout.css"
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
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          &copy; {new Date().getFullYear()}. Designed &amp; Developed with love
          by
          {` `}
          <Link to="/">E V \ N S</Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
