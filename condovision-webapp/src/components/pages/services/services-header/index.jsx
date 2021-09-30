import React from "react"

import * as styles from "./styles.module.css"

const ServicesHeader = ({ title, imagePath, data }) => {

	return (
		<section className={styles.header}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>CONDOVISION</h1>
				<h2 className={styles.subtitle}>SISTEMAS ELETRÔNICOS</h2>
			</div>
			<img src={`../../../../assets/images/services/header/${imagePath}`} alt={`Capa do serviço ${title}`} />
			{/* <StaticImage
				placeholder='blurred'
				src='../../../../assets/images/cameras1.jpg'
				alt='painel'
				style={{ maxHeight: "500px", zIndex: -2 }}
				layout='fullWidth'
				height={500}
			/> */}
		</section>
	)
}

export default ServicesHeader
