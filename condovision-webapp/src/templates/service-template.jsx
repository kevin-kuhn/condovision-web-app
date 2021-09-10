import * as React from "react"
import Layout from "@components/layout"

const ServicesPage = ({ pageContext: { service } }) => {
	console.log(service)

	return (
		<Layout>
			<div dangerouslySetInnerHTML={{ __html: service.text }} />
		</Layout>
	)
}

export default ServicesPage
