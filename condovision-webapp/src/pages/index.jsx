import * as React from "react"
import Layout from "@components/layout"
import { Home } from "@components/pages"

const IndexPage = () => {
	return (
		<Layout
			title='Condovision - Sistemas Eletrônicos'
			description='Somos especializados em segurança eletrônica e automação residencial. Realizamos manutenção e/ou projeção de sistemas simples e complexos, com tecnologias de ponta! Trabalho bem feito, cliente feliz.'
		>
			<Home />
		</Layout>
	)
}

export default IndexPage
