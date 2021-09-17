import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// import * as styles from "./styles.module.css"

const HomeHeader = () => {

	return (
		<StaticImage
			placeholder='blurred'
			src='../../../../assets/images/cameras1.jpg'
			alt='painel'
			style={{ maxHeight: '500px', opacity: 0.2 }}
			layout="fullWidth"
			height={500}
		/>
	)
}

export default HomeHeader
