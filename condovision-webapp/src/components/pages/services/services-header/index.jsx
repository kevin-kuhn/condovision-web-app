import React from "react"

import Img from "gatsby-image"

import * as styles from "./styles.module.css"

const ServicesHeader = ({ title, fluid = "" }) => {
	return (
		<section className={styles.header}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>{title}</h1>
			</div>
			<Img
				fluid={fluid}
				className={styles.image}
				alt={`Capa do serviço ${title}`}
			/>
		</section>
	)
}

export default ServicesHeader
