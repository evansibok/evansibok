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
			<div className="projectCard">
				<div className="contentCon">
					<div className="cardHead">
						<h4>Pintereach Landing Page</h4>

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
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z" /><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z" /><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z" /><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z" /></svg>
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
