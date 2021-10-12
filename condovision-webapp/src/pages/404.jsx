import * as React from "react"

import Layout from "@components/layout"
import { NotFound } from "@components/pages"

const NotFoundPage = () => {
	return (
		<Layout
			title='Página não encontrada | Condovision - Sistemas Eletrônicos'
			description='Somos especializados em segurança eletrônica e automação residencial. Realizamos manutenção e/ou projeção de sistemas simples e complexos, com tecnologias de ponta! Trabalho bem feito, cliente feliz.'
		>
			<NotFound />
		</Layout>
	)
}

export default NotFoundPage
