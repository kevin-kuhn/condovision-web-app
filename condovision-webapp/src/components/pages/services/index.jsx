import React from "react"

import ServicesHeader from "./services-header"

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
			<div dangerouslySetInnerHTML={{ __html: service.text }} />
		</>
	)
}

export default Services
