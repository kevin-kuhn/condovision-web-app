import React from "react"

import AboutHeader from "./about-header"
import Company from "./company"
import Contributors from "./contributors"

const About = ({ images }) => {
	return (
		<>
			<AboutHeader />
			<Company />
			<Contributors images={images} />
		</>
	)
}

export default About
