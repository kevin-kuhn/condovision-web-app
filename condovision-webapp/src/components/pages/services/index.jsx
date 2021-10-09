import React from "react"

import ServicesHeader from "./services-header"
import ServicesContent from "./services-content"
import SeeToo from "./see-too"

const Services = ({ service, images }) => {
	const { name, imagePath, text } = service
	const { bodyImage, headerImage } = images

	return (
		<>
			<ServicesHeader
				title={name}
				text={text}
				fluid={headerImage.fluid}
				imagePath={imagePath}
			/>
			<ServicesContent title={name} text={text} fluid={bodyImage.fluid} />
			<SeeToo serviceName={name} />
		</>
	)
}

export default Services
