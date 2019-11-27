import React from "react"

import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"


import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"

const ProjectsPage = () => {

	const data = useStaticQuery(graphql`
		query pintereachScreenshot {
      imageSharp(
        fluid: {
          src: {
            eq: "/static/e7b012f31370b5d97e350b212adffdee/af144/pintereach-screenshot.png"
          }
        }
      ) {
        fluid {
          src
          originalName
        }
      }
    }
	`)
	const pintereach = data.imageSharp.fluid.src
	const pintereachAlt = data.imageSharp.fluid.originalName

	return (
		<Layout>
			<SEO title="Projects" />
			<PageLabel name="Projects" />
			<div className="projectCon">
				<div className="contentCon">
					<div className="cardHead">
						<h4>Pintereach</h4>

						<ul>
							<a href="" target="_blank"
								rel="noopener noreferrer">
								<li>Website</li>
							</a>
							<a href="" target="_blank"
								rel="noopener noreferrer">
								<li>Github</li>
							</a>
						</ul>
					</div>

					<div className="cardBody">
						<div className="leftCon">
							<p>
								Fort NG is a fashion company based in Nigeria. Customers place orders by viewing items on instagram and sending messages. They wanted an E-Commerce website for users to purchase items from as well as a website where potential customers would get the latest news.<br /><br />

								The E-Commerce website was built from scratch using Laravel. An admin portal was also built to enable admins manage news, products, orders as well as website content.
							</p>
							<div className="projectIcons">
								<img src="" alt="html" />
								<img src="" alt="css" />
								<img src="" alt="js" />
							</div>
						</div>
						<div className="imageCon">
							<img src={pintereach} alt={pintereachAlt} />
						</div>
					</div>
				</div>

			</div>
			<SocialLinks />
		</Layout>
	)
}

export default ProjectsPage
