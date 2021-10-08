import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

import * as styles from "./styles.module.css"

//TODO: AJUSTAR META TAGS
const Layout = ({ title, description, children }) => {
	return (
		<>
			<Helmet
				htmlAttributes={{
					lang: "pt-BR",
				}}
			>
				<meta charSet='utf-8' />
				<meta name='description' content={description} />
				<meta http-equiv='content-language' content='pt-br' />
				<meta name='author' content='Kevin Kuhn' />
				<meta
					name='keywords'
					content='segurança eletrônica alarmes câmeras instalação automação motores elétricos'
				/>
				<title>{title}</title>
			</Helmet>

			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
