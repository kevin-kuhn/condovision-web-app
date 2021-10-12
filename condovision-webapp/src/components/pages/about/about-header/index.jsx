import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.css"

const AboutHeader = () => {
	return (
		<section className={styles.header}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Sobre nós</h1>
			</div>
			<StaticImage
				placeholder='blurred'
				src='../../../../assets/images/cameras1.jpg'
				alt='painel'
				style={{ maxHeight: "400px", zIndex: -2 }}
				layout='fullWidth'
			/>
		</section>
	)
}

export default AboutHeader
