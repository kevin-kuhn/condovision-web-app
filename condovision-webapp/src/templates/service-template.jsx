import * as React from "react"

import { graphql } from "gatsby"

import Layout from "@components/layout"
import { Services } from "@components/pages"

const ServicesPage = ({ pageContext: { service }, data }) => {
	console.log(data)
	return (
		<Layout
			title={`${service.name} | Condovision - Sistemas Eletrônicos`}
			description={service.shortDescription}
		>
			<Services service={service} />
		</Layout>
	)
}

export const query = graphql`
	query {
		allImageSharp {
			edges {
				node {
					id
					gatsbyImageData
					fluid {
						base64
						tracedSVG
						srcWebp
						srcSetWebp
						originalImg
						originalName
					}
				}
			}
		}
	}
`

export default ServicesPage
