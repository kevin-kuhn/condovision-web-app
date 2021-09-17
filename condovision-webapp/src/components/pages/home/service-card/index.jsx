import React from "react"
import { Link } from "gatsby"

import * as styles from "./styles.module.css"
import { Text } from "@components"

const ServiceCard = props => {
	const { icon, name, path, shortDescription } = props.service

	return (
		<article className={styles.container}>
			<h3 className={styles.title}>
				<span className={styles.icon}>{icon}</span>
				<Link to={path}>{name}</Link>
			</h3>
			<div className={styles.infos}>
				<div className={styles.text}>
					<Text>{shortDescription}</Text>
				</div>
				<div className={styles.moreActions}>
					<span className={styles.link}>
						<Link to={path}>Saiba mais</Link>
					</span>
					<button className={styles.button}>Faça um orçamento!</button>
				</div>
			</div>
		</article>
	)
}

export default ServiceCard
