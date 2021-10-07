import React from "react"

import * as styles from "./styles.module.css"

const ImageStyled = ({ src, alt, width = 60, height = 80, className }) => {
	return (
		<div className='relative'>
			<img
				className={`w-${width} h-${height} z-10 object-cover rounded-md ${className ?? ""}`}
				src={src}
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
