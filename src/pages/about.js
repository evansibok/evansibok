import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { PageLabel } from "../components/page-label"
import { SocialLinks } from "../components/social-links"
import HTML5 from "../components/svgs/html5-component"
import CSS3 from "../components/svgs/css3-component"
import JS from "../components/svgs/js-component"
import SASS from "../components/svgs/sass-component"
import ReactJS from "../components/svgs/react-js-component"
import GraphQLIcon from "../components/svgs/graphql-component"
import Github from "../components/svgs/github-component"
import Figma from "../components/svgs/figma-component"
import Trello from "../components/svgs/trello-component"

const AboutPage = () => {
	return (
		<Layout>
			<SEO title="About" />
			<PageLabel name="About Me" />
			<div className="aboutCon">
				<div className="leftCon">
					<p>I design and build websites using well crafted human-centered design approaches, modern tools and a combination of both sides of my brain.
          </p>
					<p>When I'm not designing beautiful user experiences or writing functional code for websites, I listen to music, watch fantasy shows, drink coffee, read a book or write a poem.
          </p>
				</div>

				<PageLabel name="Skills" />
				<div className="rightCon">
					<HTML5 />
					<CSS3 />
					<JS />
					<ReactJS />
					<SASS />
					<GraphQLIcon />
					<Github />
					<Figma />
					<Trello />
				</div>
			</div>
			<SocialLinks />
		</Layout>
	)
}

export default AboutPage
