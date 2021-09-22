import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Text } from "@components"

import * as styles from "./styles.module.css"

const HomeHeader = () => {
	return (
		<section className={styles.header}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>CONDOVISION</h1>
				<h2 className={styles.subtitle}>SISTEMAS ELETRÔNICOS</h2>
			</div>
			<StaticImage
				placeholder='blurred'
				src='../../../../assets/images/cameras1.jpg'
				alt='painel'
				style={{ maxHeight: "500px", zIndex: -2 }}
				layout='fullWidth'
				height={500}
			/>
		</section>
	)
}

// <StaticImage
// placeholder='blurred'
// src='../../../assets/images/logo.png'
// alt='logo'
// layout='fixed'
// width={200}
// />
export default HomeHeader
