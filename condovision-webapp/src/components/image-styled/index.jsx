import React from "react"

import * as styles from "./styles.module.css"

import Img from "gatsby-image"

const ImageStyled = ({ fluid, alt, width = 60, height = 80, className }) => {
	return (
		<div className='relative'>
			<Img
				fluid={fluid}
				className={`w-${width} h-${height} z-10 object-cover rounded-md ${
					className ?? ""
				}`}
				alt={alt}
			/>
			<div
				style={{ zIndex: -1 }}
				className={`${styles.background} w-${width}`}
			/>
		</div>
	)
}

export default ImageStyled
