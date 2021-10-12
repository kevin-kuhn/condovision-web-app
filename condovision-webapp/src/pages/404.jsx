import * as React from "react"

import Layout from "@components/layout"
import { NotFound } from "@components/pages"

const NotFoundPage = () => {
	return (
		<Layout
			title='Página não encontrada | Condovision - Sistemas Eletrônicos'
			description='Somos especializados em segurança eletrônica e automação residencial com tecnologias de ponta!'
		>
			<NotFound />
		</Layout>
	)
}

export default NotFoundPage
