import * as React from "react"

import { graphql } from "gatsby"

import Layout from "@components/layout"
import { Services } from "@components/pages"

import { useDynamicImage } from "@hooks/useDynamicImage"

const ServicesPage = ({ pageContext: { service }, data }) => {
	const { images } = useDynamicImage(data, service)

	return (
		<Layout
			title={`${service.name} | Condovision - Sistemas Eletrônicos`}
			description={service.shortDescription}
		>
			<Services service={service} images={images} />
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
						src
						srcSet
						base64
						aspectRatio
						originalImg
						originalName
						sizes
					}
				}
			}
		}
	}
`

export default ServicesPage
