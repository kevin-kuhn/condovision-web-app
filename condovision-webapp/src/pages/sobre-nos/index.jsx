import * as React from "react"
import Layout from "@components/layout"

import { About } from "@components/pages"
import { graphql } from "gatsby"

import { useDynamicImage } from "@hooks/useDynamicImage"

const AboutPage = ({ data }) => {
	const { images } = useDynamicImage(data, "andre.jpg")

	return (
		<Layout
			title='Sobre nós | Condovision - Sistemas Eletrônicos'
			description='Somos especializados em segurança eletrônica e automação residencial. Realizamos manutenção e/ou projeção de sistemas simples e complexos, com tecnologias de ponta! Trabalho bem feito, cliente feliz.'
		>
			<About images={images}/>
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

export default AboutPage
