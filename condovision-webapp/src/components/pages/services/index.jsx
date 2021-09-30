import React from "react"

import ServicesHeader from "./services-header"

const Services = ({ service }) => {
	const { name } = service
	
	return (
		<>
			<ServicesHeader title={name} />
			<div dangerouslySetInnerHTML={{ __html: service.text }} />
		</>
	)
}

export default Services
