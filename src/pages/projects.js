import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"

const ProjectsPage = () => {
	return (
		<Layout>
			<SEO title="Projects" />
			<PageLabel name="Projects" />
			<div className="projectCon">
				<div>
					<div className="cardHead">
						<h4>Pintereach</h4>

						<ul>
							<a>
								<li>Website</li>
							</a>
							<a>
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
							<img src="" alt="pintereach screenshot" />
						</div>
					</div>
				</div>

			</div>
			<SocialLinks />
		</Layout>
	)
}

export default ProjectsPage
