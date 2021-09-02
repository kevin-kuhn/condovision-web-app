import * as React from "react"
import { Helmet } from "react-helmet"

// markup
const IndexPage = () => {
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
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='keywords' content='sdfsd dfgdf dfgdf dfgfd' />
				<title>My Title</title>
			</Helmet>
			<div className='text-secondary'>Hello World!</div>
		</>
	)
}

export default IndexPage
