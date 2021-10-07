import React from "react"

import ServicesHeader from "./services-header"
import ServicesContent from "./services-content"

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
		</>
	)
}

export default Services
