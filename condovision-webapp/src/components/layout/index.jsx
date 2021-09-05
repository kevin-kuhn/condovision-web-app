import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

import * as styles from "./styles.module.css"

//TODO: AJUSTAR META TAGS
const Layout = ({ title = "Condovision - Sistemas Eletrônicos", children }) => {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<meta
					name='description'
					content='Um Processo Simples, mas Eficaz: Como Transformar Leads Frios em Clientes Reais e Satisfeitos (Com Sequência de Emails e Funil Automatizado).'
				/>
				<meta http-equiv='content-language' content='pt-br' />
				<meta name='author' content='Kevin Kuhn' />
				<meta name='keywords' content='sdfsd dfgdf dfgdf dfgfd' />
				<title>{title}</title>
			</Helmet>

			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
