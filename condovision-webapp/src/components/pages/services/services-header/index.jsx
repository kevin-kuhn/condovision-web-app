import React from "react"

import * as styles from "./styles.module.css"

const ServicesHeader = ({ title, imageHeaderPath = ''}) => {

	return (
		<section className={styles.header}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>{title}</h1>
			</div>
			<img
				className={styles.image}
				src={`../../../../../images/header/${imageHeaderPath}`}
				alt={`Capa do serviço ${title}`}
			/>
		</section>
	)
}

export default ServicesHeader
