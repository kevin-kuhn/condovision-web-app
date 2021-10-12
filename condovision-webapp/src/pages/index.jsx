import * as React from "react"
import Layout from "@components/layout"
import { Home } from "@components/pages"

const IndexPage = () => {
	return (
		<Layout
			title='Condovision - Sistemas Eletrônicos'
			description='Somos especializados em segurança eletrônica e automação residencial com tecnologias de ponta!'
		>
			<Home />
		</Layout>
	)
}

export default IndexPage
