import React from "react"

import ServicesHeader from "./services-header"
import ServicesContent from "./services-content"
import SeeToo from "./see-too"

const Services = ({ service }) => {
	const { name, imageHeaderPath, imagePath, text } = service

	return (
		<>
			<ServicesHeader
				title={name}
				text={text}
				imageHeaderPath={imageHeaderPath}
				imagePath={imagePath}
			/>
			<ServicesContent title={name} text={text} imagePath={imagePath} />
			<SeeToo serviceName={name} />
		</>
	)
}

export default Services
