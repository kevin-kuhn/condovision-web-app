import * as React from "react"
import Layout from "@components/layout"
import { Services } from "@components/pages"

const ServicesPage = ({ pageContext: { service } }) => {
	return (
		<Layout
			title={`${service.name} | Condovision - Sistemas Eletrônicos`}
			description={service.shortDescription}
		>
			<Services service={service} />
		</Layout>
	)
}

export default ServicesPage
