import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

import * as styles from "./styles.module.css"

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
				<meta name='author' content='github.com/kevin-kuhn' />
				<meta
					name='keywords'
					content='condovision segurança eletrônica alarmes câmeras instalação automação motores elétricos'
				/>
				<meta name="google-site-verification" content="1lf23HCBNF2LzEpp1CCH_O6JOZUbMFrPa0If3gfz3ZQ" />
				<title>{title}</title>
			</Helmet>

			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
