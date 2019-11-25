import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<div className="homeCon">
			<h1 className="h1HomeCon">
				<span className="letCol">H</span>ello, I <span className="letCol">a</span>m <span className="letCol">E</span>vans
			</h1>

			<h4 className="h4HomeCon">A Nigerian born web developer with incredible love for UI/UX Design.</h4>

			<ul>
				<a href="https://twitter.com/evansibok" target="_blank"
					rel="noopener noreferrer">
					<li>Twitter</li>
				</a>
				<a href="https://linkedin.com/evansibok" target="_blank"
					rel="noopener noreferrer">
					<li>LinkedIn</li>
				</a>
				<a href="#" target="_blank"
					rel="noopener noreferrer">
					<li>Podcast</li>
				</a>
				<a href="https://github.com/evansibok" target="_blank"
					rel="noopener noreferrer">
					<li>Github</li>
				</a>
				<a href="mailto:evansibok@gmail.com" target="_blank"
					rel="noopener noreferrer">
					<li>Email</li>
				</a>
			</ul>
		</div>
	</Layout>
)

export default IndexPage
