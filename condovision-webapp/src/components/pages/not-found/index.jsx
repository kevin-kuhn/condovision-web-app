import React from "react"
import { Link } from "gatsby"

import * as styles from "./styles.module.css"

import { Button } from "@components"

const NotFound = () => {
	return (
		<section className={styles.section}>
			<div className={styles.infos}>
				<h1 className={styles.title}>Página não encontrada. (404)</h1>
				<Link to='/'>
					<Button>Clique aqui para voltar ao inicio.</Button>
				</Link>
			</div>
		</section>
	)
}

export default NotFound
